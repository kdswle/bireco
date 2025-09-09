use worker::*;
use serde_json::json;
use utoipa::path;

use crate::entities::{CreateUserRequest, LoginRequest};
use crate::repositories::UserRepository;
use crate::use_cases::AuthUseCase;
use crate::dtos::{RegisterRequestDto, AuthResponseDto};
use crate::dtos::common::ApiResponse;

/// Register a new user
#[utoipa::path(
    post,
    path = "/api/auth/register",
    tag = "auth",
    request_body = RegisterRequestDto,
    responses(
        (status = 201, description = "User registered successfully", body = ApiResponse<AuthResponseDto>),
        (status = 400, description = "Invalid request", body = ApiResponse<String>),
        (status = 409, description = "User already exists", body = ApiResponse<String>)
    )
)]
pub async fn register(mut req: Request, ctx: RouteContext<()>) -> Result<Response> {
    // Get environment variables
    let jwt_secret = ctx.env.var("JWT_SECRET")?.to_string();
    
    // Get D1 database
    let db = ctx.env.d1("DB")?;
    
    // Parse request body
    let body: CreateUserRequest = match req.json().await {
        Ok(body) => body,
        Err(_) => {
            let empty_response: Option<crate::entities::AuthResponse> = None;
            let api_response = ApiResponse::error(400, "INVALID_REQUEST", "Invalid request body", empty_response);
            return Response::from_json(&api_response).map(|r| r.with_status(400));
        }
    };

    // Initialize repository and use case
    let user_repo = UserRepository::new(&db);
    let auth_use_case = AuthUseCase::new(user_repo, jwt_secret);
    
    // Register user
    match auth_use_case.register(body).await {
        Ok(auth_response) => {
            Response::from_json(&json!({
                "success": true,
                "data": auth_response
            })).map(|r| r.with_status(201))
        },
        Err(e) => {
            console_log!("Registration error: {:?}", e);
            let (status, code, message) = match &e {
                Error::RustError(msg) if msg.contains("UNIQUE constraint failed") => {
                    (409, "DUPLICATE_DATA", "このメールアドレスまたはユーザー名は既に登録されています")
                }
                Error::RustError(msg) if msg.contains("not found") => {
                    (400, "DATABASE_ERROR", "データベース接続に失敗しました")
                }
                Error::RustError(msg) => {
                    (400, "VALIDATION_ERROR", msg.as_str())
                }
                _ => {
                    (500, "INTERNAL_ERROR", "内部エラーが発生しました")
                }
            };
            
            Response::from_json(&json!({
                "success": false,
                "error": {
                    "code": code,
                    "message": message,
                    "details": format!("{:?}", e)
                }
            })).map(|r| r.with_status(status))
        }
    }
}

/// Authenticate a user and return a JWT token
#[utoipa::path(
    post,
    path = "/api/auth/login",
    tag = "auth",
    request_body = LoginRequestDto,
    responses(
        (status = 200, description = "User authenticated successfully", body = ApiResponse<AuthResponseDto>),
        (status = 400, description = "Invalid request", body = ApiResponse<String>),
        (status = 401, description = "Invalid credentials", body = ApiResponse<String>)
    )
)]
pub async fn login(mut req: Request, ctx: RouteContext<()>) -> Result<Response> {
    // Get environment variables
    let jwt_secret = ctx.env.var("JWT_SECRET")?.to_string();
    
    // Get D1 database
    let db = ctx.env.d1("DB")?;
    
    // Parse request body
    let body: LoginRequest = match req.json().await {
        Ok(body) => body,
        Err(_) => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "INVALID_REQUEST",
                "message": "Invalid request body"
            }
        })).map(|r| r.with_status(400))
    };

    // Initialize repository and use case
    let user_repo = UserRepository::new(&db);
    let auth_use_case = AuthUseCase::new(user_repo, jwt_secret);
    
    // Login user
    match auth_use_case.login(body).await {
        Ok(auth_response) => {
            Response::from_json(&json!({
                "success": true,
                "data": auth_response
            }))
        },
        Err(e) => {
            console_log!("Login error: {:?}", e);
            let (status, code, message) = match &e {
                Error::RustError(msg) if msg.contains("not found") => {
                    (401, "INVALID_CREDENTIALS", "メールアドレスまたはパスワードが正しくありません")
                }
                Error::RustError(msg) if msg.contains("password") => {
                    (401, "INVALID_CREDENTIALS", "メールアドレスまたはパスワードが正しくありません")
                }
                Error::RustError(msg) if msg.contains("DATABASE") => {
                    (500, "DATABASE_ERROR", "データベース接続に失敗しました")
                }
                _ => {
                    (500, "LOGIN_FAILED", "ログインに失敗しました")
                }
            };
            
            Response::from_json(&json!({
                "success": false,
                "error": {
                    "code": code,
                    "message": message,
                    "details": format!("{:?}", e)
                }
            })).map(|r| r.with_status(status))
        }
    }
}

pub async fn me(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    // Get environment variables
    let jwt_secret = ctx.env.var("JWT_SECRET")?.to_string();
    
    // Get D1 database
    let db = ctx.env.d1("DB")?;
    
    // Extract token from Authorization header  
    let auth_header = match req.headers().get("Authorization") {
        Ok(Some(header)) => header,
        _ => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "UNAUTHORIZED", 
                "message": "Authorization header missing"
            }
        })).map(|r| r.with_status(401))
    };
    
    let token = auth_header
        .strip_prefix("Bearer ")
        .ok_or_else(|| Error::RustError("Invalid authorization header format".to_string()))?;
    
    // Initialize repository and use case
    let user_repo = UserRepository::new(&db);
    let auth_use_case = AuthUseCase::new(user_repo, jwt_secret);
    
    // Verify token and get user
    match auth_use_case.verify_token(token).await {
        Ok(user) => {
            Response::from_json(&json!({
                "success": true,
                "data": user
            }))
        },
        Err(e) => {
            console_log!("Token verification error: {:?}", e);
            Response::from_json(&json!({
                "success": false,
                "error": {
                    "code": "UNAUTHORIZED",
                    "message": "Invalid or expired token",
                    "details": format!("{:?}", e)
                }
            })).map(|r| r.with_status(401))
        }
    }
}