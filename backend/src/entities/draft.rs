use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Draft {
    pub id: String,
    pub book_id: String,
    pub user_id: String,
    pub title: Option<String>,
    pub content: Option<String>,
    pub rating: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Deserialize)]
pub struct SaveDraftRequest {
    pub book_id: String,
    pub title: Option<String>,
    pub content: Option<String>,
    pub rating: Option<i32>,
}

#[derive(Debug, Serialize)]
pub struct DraftResponse {
    pub id: String,
    pub book_id: String,
    pub title: Option<String>,
    pub content: Option<String>,
    pub rating: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl Draft {
    pub fn new(
        book_id: String,
        user_id: String,
        title: Option<String>,
        content: Option<String>,
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

    pub fn update(
        &mut self,
        title: Option<String>,
        content: Option<String>,
        rating: Option<i32>,
    ) {
        self.title = title;
        self.content = content;
        self.rating = rating;
        self.updated_at = Utc::now();
    }

    pub fn to_response(&self) -> DraftResponse {
        DraftResponse {
            id: self.id.clone(),
            book_id: self.book_id.clone(),
            title: self.title.clone(),
            content: self.content.clone(),
            rating: self.rating,
            created_at: self.created_at,
            updated_at: self.updated_at,
        }
    }
}