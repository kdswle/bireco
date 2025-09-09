use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use utoipa::ToSchema;

use super::user::UserResponse;

#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct Review {
    pub id: String,
    pub book_id: String,
    pub user_id: String,
    pub title: String,
    pub content: String,
    pub rating: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Deserialize, ToSchema)]
pub struct CreateReviewRequest {
    pub book_id: String,
    pub title: String,
    pub content: String,
    pub rating: Option<i32>,
}

#[derive(Debug, Deserialize)]
pub struct UpdateReviewRequest {
    pub title: Option<String>,
    pub content: Option<String>,
    pub rating: Option<i32>,
}

#[derive(Debug, Serialize)]
pub struct ReviewResponse {
    pub id: String,
    pub book_id: String,
    pub book_title: String,
    pub user: UserResponse,
    pub title: String,
    pub content: String,
    pub rating: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl Review {
    pub fn new(
        book_id: String,
        user_id: String,
        title: String,
        content: String,
        rating: Option<i32>,
    ) -> Self {
        let now = Utc::now();
        Self {
            id: Uuid::new_v4().to_string(),
            book_id,
            user_id,
            title,
            content,
            rating,
            created_at: now,
            updated_at: now,
        }
    }

    pub fn update(&mut self, title: Option<String>, content: Option<String>, rating: Option<i32>) {
        if let Some(title) = title {
            self.title = title;
        }
        if let Some(content) = content {
            self.content = content;
        }
        if rating.is_some() {
            self.rating = rating;
        }
        self.updated_at = Utc::now();
    }

    pub fn validate_rating(rating: Option<i32>) -> Result<(), String> {
        if let Some(rating) = rating {
            if rating < 1 || rating > 5 {
                return Err("評価は1-5の範囲で入力してください".to_string());
            }
        }
        Ok(())
    }

    pub fn validate_content(content: &str) -> Result<(), String> {
        if content.trim().is_empty() {
            return Err("感想内容を入力してください".to_string());
        }
        if content.len() > 10000 {
            return Err("感想は10000文字以内で入力してください".to_string());
        }
        Ok(())
    }

    pub fn validate_title(title: &str) -> Result<(), String> {
        if title.trim().is_empty() {
            return Err("タイトルを入力してください".to_string());
        }
        if title.len() > 100 {
            return Err("タイトルは100文字以内で入力してください".to_string());
        }
        Ok(())
    }
}