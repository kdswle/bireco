use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use crate::entities::User;

/// User data for API responses (excludes sensitive information)
#[derive(Debug, Serialize, ToSchema)]
pub struct UserDto {
    pub id: String,
    pub username: String,
    pub email: String,
    pub avatar_url: Option<String>,
    pub created_at: DateTime<Utc>,
}

/// Request DTO for user registration
#[derive(Debug, Deserialize, ToSchema)]
pub struct RegisterRequestDto {
    pub username: String,
    pub email: String,
    pub password: String,
}

/// Request DTO for user login
#[derive(Debug, Deserialize, ToSchema)]
pub struct LoginRequestDto {
    pub email: String,
    pub password: String,
}

/// Response DTO for authentication (login/register)
#[derive(Debug, Serialize, ToSchema)]
pub struct AuthResponseDto {
    pub user: UserDto,
    pub token: String,
}

impl From<User> for UserDto {
    fn from(user: User) -> Self {
        Self {
            id: user.id,
            username: user.username,
            email: user.email,
            avatar_url: user.avatar_url,
            created_at: user.created_at,
        }
    }
}

impl From<&User> for UserDto {
    fn from(user: &User) -> Self {
        Self {
            id: user.id.clone(),
            username: user.username.clone(),
            email: user.email.clone(),
            avatar_url: user.avatar_url.clone(),
            created_at: user.created_at,
        }
    }
}