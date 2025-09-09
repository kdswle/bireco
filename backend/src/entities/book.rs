use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use utoipa::ToSchema;

#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct Book {
    pub id: String,
    pub title: String,
    pub authors: Option<String>,
    pub isbn: Option<String>,
    pub publication_year: Option<i32>,
    pub publisher: Option<String>,
    pub description: Option<String>,
    pub cover_image_url: Option<String>,
    pub source_type: SourceType,
    pub source_id: String,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
#[serde(rename_all = "lowercase")]
pub enum SourceType {
    Ndl,
    Amazon,
    Manual,
}

impl SourceType {
    pub fn as_str(&self) -> &'static str {
        match self {
            SourceType::Ndl => "ndl",
            SourceType::Amazon => "amazon",
            SourceType::Manual => "manual",
        }
    }
}

#[derive(Debug, Deserialize, ToSchema)]
pub struct CreateBookRequest {
    pub title: String,
    pub authors: Option<String>,
    pub isbn: Option<String>,
    pub publication_year: Option<i32>,
    pub publisher: Option<String>,
    pub description: Option<String>,
    pub cover_image_url: Option<String>,
    pub source_type: SourceType,
    pub source_id: String,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct BookResponse {
    pub id: String,
    pub title: String,
    pub authors: Option<String>,
    pub isbn: Option<String>,
    pub publication_year: Option<i32>,
    pub publisher: Option<String>,
    pub description: Option<String>,
    pub cover_image_url: Option<String>,
    pub source_type: SourceType,
    pub source_id: String,
    pub created_at: DateTime<Utc>,
    pub review_count: i32,
    pub average_rating: Option<f64>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct BookSearchResult {
    pub source_id: String,
    pub title: String,
    pub authors: Option<String>,
    pub isbn: Option<String>,
    pub publication_year: Option<i32>,
    pub publisher: Option<String>,
    pub description: Option<String>,
    pub cover_image_url: Option<String>,
}

impl Book {
    pub fn new(
        title: String,
        authors: Option<String>,
        isbn: Option<String>,
        publication_year: Option<i32>,
        publisher: Option<String>,
        description: Option<String>,
        cover_image_url: Option<String>,
        source_type: SourceType,
        source_id: String,
    ) -> Self {
        let now = Utc::now();
        Self {
            id: Uuid::new_v4().to_string(),
            title,
            authors,
            isbn,
            publication_year,
            publisher,
            description,
            cover_image_url,
            source_type,
            source_id,
            created_at: now,
            updated_at: now,
        }
    }

    pub fn to_response(&self, review_count: i32, average_rating: Option<f64>) -> BookResponse {
        BookResponse {
            id: self.id.clone(),
            title: self.title.clone(),
            authors: self.authors.clone(),
            isbn: self.isbn.clone(),
            publication_year: self.publication_year,
            publisher: self.publisher.clone(),
            description: self.description.clone(),
            cover_image_url: self.cover_image_url.clone(),
            source_type: self.source_type.clone(),
            source_id: self.source_id.clone(),
            created_at: self.created_at,
            review_count,
            average_rating,
        }
    }
}