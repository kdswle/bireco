use worker::{Result, Error};
use jsonwebtoken::{encode, decode, Header, Validation, EncodingKey, DecodingKey, Algorithm};
use serde::{Deserialize, Serialize};
use chrono::{Utc, Duration};
use bcrypt::{hash, verify, DEFAULT_COST};

use crate::entities::{User, CreateUserRequest, LoginRequest, AuthResponse};
use crate::repositories::UserRepository;

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub user_id: String,
    pub username: String,
    pub exp: usize,
}

pub struct AuthUseCase<'a> {
    user_repo: UserRepository<'a>,
    jwt_secret: String,
}

impl<'a> AuthUseCase<'a> {
    pub fn new(user_repo: UserRepository<'a>, jwt_secret: String) -> Self {
        Self { user_repo, jwt_secret }
    }

    pub async fn register(&self, request: CreateUserRequest) -> Result<AuthResponse> {
        // バリデーション
        User::validate_username(&request.username)
            .map_err(|e| Error::RustError(e))?;
        User::validate_email(&request.email)
            .map_err(|e| Error::RustError(e))?;

        if request.password.len() < 6 {
            return Err(Error::RustError("パスワードは6文字以上である必要があります".to_string()));
        }

        // 重複チェック
        if let Some(_) = self.user_repo.find_by_username(&request.username).await? {
            return Err(Error::RustError("このユーザー名は既に使用されています".to_string()));
        }

        if let Some(_) = self.user_repo.find_by_email(&request.email).await? {
            return Err(Error::RustError("このメールアドレスは既に使用されています".to_string()));
        }

        // パスワードハッシュ化
        let password_hash = hash(&request.password, DEFAULT_COST)
            .map_err(|e| Error::RustError(format!("パスワードのハッシュ化に失敗しました: {}", e)))?;

        // ユーザー作成
        let user = User::new(
            request.username,
            request.email,
            password_hash,
            request.display_name,
        );

        self.user_repo.create(&user).await?;

        // トークン生成
        let token = self.generate_token(&user)?;

        Ok(AuthResponse {
            user: user.to_response(),
            token,
        })
    }

    pub async fn login(&self, request: LoginRequest) -> Result<AuthResponse> {
        // ユーザー検索（ユーザー名またはメールアドレス）
        let user = if request.username.contains('@') {
            self.user_repo.find_by_email(&request.username).await?
        } else {
            self.user_repo.find_by_username(&request.username).await?
        };

        let user = user.ok_or_else(|| Error::RustError("ユーザーが見つかりません".to_string()))?;

        // パスワード確認
        let is_valid = verify(&request.password, &user.password_hash)
            .map_err(|e| Error::RustError(format!("パスワード確認でエラーが発生しました: {}", e)))?;

        if !is_valid {
            return Err(Error::RustError("パスワードが間違っています".to_string()));
        }

        // トークン生成
        let token = self.generate_token(&user)?;

        Ok(AuthResponse {
            user: user.to_response(),
            token,
        })
    }

    pub fn verify_token(&self, token: &str) -> Result<Claims> {
        let token_data = decode::<Claims>(
            token,
            &DecodingKey::from_secret(self.jwt_secret.as_ref()),
            &Validation::new(Algorithm::HS256),
        ).map_err(|e| Error::RustError(format!("トークンが無効です: {}", e)))?;

        Ok(token_data.claims)
    }

    pub async fn get_user_by_token(&self, token: &str) -> Result<User> {
        let claims = self.verify_token(token)?;
        let user = self.user_repo.find_by_id(&claims.user_id).await?
            .ok_or_else(|| Error::RustError("ユーザーが見つかりません".to_string()))?;

        Ok(user)
    }

    pub fn refresh_token(&self, user: &User) -> Result<String> {
        self.generate_token(user)
    }

    fn generate_token(&self, user: &User) -> Result<String> {
        let expiration = Utc::now()
            .checked_add_signed(Duration::hours(24))
            .expect("valid timestamp")
            .timestamp() as usize;

        let claims = Claims {
            user_id: user.id.clone(),
            username: user.username.clone(),
            exp: expiration,
        };

        encode(
            &Header::default(),
            &claims,
            &EncodingKey::from_secret(self.jwt_secret.as_ref()),
        ).map_err(|e| Error::RustError(format!("トークン生成に失敗しました: {}", e)))
    }
}