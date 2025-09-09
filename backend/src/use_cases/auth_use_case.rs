use worker::{Result, Error};
use serde::{Deserialize, Serialize};
use chrono::{Utc, Duration};
use hmac::{Hmac, Mac};
use sha2::Sha256;
use base64::{Engine as _, engine::general_purpose::STANDARD as Base64};
use argon2::{Argon2, PasswordHash, PasswordHasher, PasswordVerifier};
use argon2::password_hash::{rand_core::OsRng, SaltString};

use crate::entities::{User, CreateUserRequest, LoginRequest, AuthResponse};
use crate::repositories::UserRepository;

type HmacSha256 = Hmac<Sha256>;

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub user_id: String,
    pub username: String,
    pub exp: i64,
    pub iat: i64,
}

#[derive(Debug, Serialize, Deserialize)]
struct JwtHeader {
    alg: String,
    typ: String,
}

pub struct AuthUseCase<'a> {
    user_repo: UserRepository<'a>,
    jwt_secret: String,
}

impl<'a> AuthUseCase<'a> {
    pub fn new(user_repo: UserRepository<'a>, jwt_secret: String) -> Self {
        Self { user_repo, jwt_secret }
    }

    // Simple JWT implementation for WASM
    fn create_jwt(&self, claims: &Claims) -> Result<String> {
        let header = JwtHeader {
            alg: "HS256".to_string(),
            typ: "JWT".to_string(),
        };

        let header_json = serde_json::to_string(&header)
            .map_err(|e| Error::RustError(format!("Header serialization error: {}", e)))?;
        let claims_json = serde_json::to_string(claims)
            .map_err(|e| Error::RustError(format!("Claims serialization error: {}", e)))?;

        let header_b64 = Base64.encode(header_json.as_bytes());
        let claims_b64 = Base64.encode(claims_json.as_bytes());
        let message = format!("{}.{}", header_b64, claims_b64);

        // Create signature
        let mut mac = HmacSha256::new_from_slice(self.jwt_secret.as_bytes())
            .map_err(|e| Error::RustError(format!("HMAC key error: {}", e)))?;
        mac.update(message.as_bytes());
        let signature = mac.finalize().into_bytes();
        let signature_b64 = Base64.encode(&signature);

        Ok(format!("{}.{}", message, signature_b64))
    }

    fn verify_jwt(&self, token: &str) -> Result<Claims> {
        let parts: Vec<&str> = token.split('.').collect();
        if parts.len() != 3 {
            return Err(Error::RustError("Invalid JWT format".to_string()));
        }

        let header_b64 = parts[0];
        let claims_b64 = parts[1];
        let signature_b64 = parts[2];

        // Verify signature
        let message = format!("{}.{}", header_b64, claims_b64);
        let mut mac = HmacSha256::new_from_slice(self.jwt_secret.as_bytes())
            .map_err(|e| Error::RustError(format!("HMAC key error: {}", e)))?;
        mac.update(message.as_bytes());
        let expected_signature = mac.finalize().into_bytes();
        let expected_signature_b64 = Base64.encode(&expected_signature);

        if signature_b64 != expected_signature_b64 {
            return Err(Error::RustError("Invalid JWT signature".to_string()));
        }

        // Decode claims
        let claims_json = Base64.decode(claims_b64)
            .map_err(|e| Error::RustError(format!("Base64 decode error: {}", e)))?;
        let claims_str = String::from_utf8(claims_json)
            .map_err(|e| Error::RustError(format!("UTF-8 decode error: {}", e)))?;
        let claims: Claims = serde_json::from_str(&claims_str)
            .map_err(|e| Error::RustError(format!("Claims deserialization error: {}", e)))?;

        // Check expiration
        let now = Utc::now().timestamp();
        if claims.exp < now {
            return Err(Error::RustError("JWT token expired".to_string()));
        }

        Ok(claims)
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
        let salt = SaltString::generate(&mut OsRng);
        let argon2 = Argon2::default();
        let password_hash = argon2.hash_password(request.password.as_bytes(), &salt)
            .map_err(|e| Error::RustError(format!("パスワードのハッシュ化に失敗しました: {}", e)))?
            .to_string();

        // ユーザー作成
        let user = User::new(
            request.username,
            request.email,
            password_hash,
            None, // avatar_urlは後で設定可能
        );

        // ユーザー保存
        self.user_repo.create(&user).await?;

        // JWT生成
        let now = Utc::now();
        let claims = Claims {
            user_id: user.id.clone(),
            username: user.username.clone(),
            exp: (now + Duration::hours(24)).timestamp(),
            iat: now.timestamp(),
        };

        let token = self.create_jwt(&claims)?;

        Ok(AuthResponse {
            user: user.to_response(),
            token,
        })
    }

    pub async fn login(&self, request: LoginRequest) -> Result<AuthResponse> {
        // ユーザー検索
        let user = self.user_repo.find_by_email(&request.email).await?
            .ok_or_else(|| Error::RustError("メールアドレスまたはパスワードが間違っています".to_string()))?;

        // パスワード検証
        let parsed_hash = PasswordHash::new(&user.password_hash)
            .map_err(|e| Error::RustError(format!("パスワードハッシュの解析に失敗しました: {}", e)))?;
        
        let argon2 = Argon2::default();
        argon2.verify_password(request.password.as_bytes(), &parsed_hash)
            .map_err(|_| Error::RustError("メールアドレスまたはパスワードが間違っています".to_string()))?;

        // JWT生成
        let now = Utc::now();
        let claims = Claims {
            user_id: user.id.clone(),
            username: user.username.clone(),
            exp: (now + Duration::hours(24)).timestamp(),
            iat: now.timestamp(),
        };

        let token = self.create_jwt(&claims)?;

        Ok(AuthResponse {
            user: user.to_response(),
            token,
        })
    }

    pub async fn verify_token(&self, token: &str) -> Result<User> {
        let claims = self.verify_jwt(token)?;
        let user = self.user_repo.find_by_id(&claims.user_id).await?
            .ok_or_else(|| Error::RustError("ユーザーが見つかりません".to_string()))?;
        
        Ok(user)
    }

    pub async fn get_user_by_token(&self, token: &str) -> Result<User> {
        self.verify_token(token).await
    }

    pub async fn refresh_token(&self, token: &str) -> Result<String> {
        let claims = self.verify_jwt(token)?;
        
        // 新しいトークン生成
        let now = Utc::now();
        let new_claims = Claims {
            user_id: claims.user_id,
            username: claims.username,
            exp: (now + Duration::hours(24)).timestamp(),
            iat: now.timestamp(),
        };

        self.create_jwt(&new_claims)
    }
}