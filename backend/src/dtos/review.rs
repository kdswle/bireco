use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use crate::entities::{Review, User};
use super::user::UserDto;

/// Review data for API responses
#[derive(Debug, Serialize, ToSchema)]
pub struct ReviewDto {
    pub id: String,
    pub book_id: String,
    pub book_title: String,
    pub user: UserDto,
    pub title: String,
    pub content: String,
    pub rating: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

/// Request DTO for creating a review
#[derive(Debug, Deserialize, ToSchema)]
pub struct CreateReviewRequestDto {
    pub book_id: String,
    pub title: String,
    pub content: String,
    pub rating: Option<i32>,
}

/// Request DTO for updating a review
#[derive(Debug, Deserialize, ToSchema)]
pub struct UpdateReviewRequestDto {
    pub title: Option<String>,
    pub content: Option<String>,
    pub rating: Option<i32>,
}

impl ReviewDto {
    pub fn from_review_with_details(
        review: Review,
        user: User,
        book_title: String,
    ) -> Self {
        Self {
            id: review.id,
            book_id: review.book_id,
            book_title,
            user: user.into(),
            title: review.title,
            content: review.content,
            rating: review.rating,
            created_at: review.created_at,
            updated_at: review.updated_at,
        }
    }
}