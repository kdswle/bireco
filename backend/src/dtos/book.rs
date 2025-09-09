use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use crate::entities::{Book, SourceType};

/// Book data for API responses
#[derive(Debug, Serialize, ToSchema)]
pub struct BookDto {
    pub id: String,
    pub title: String,
    pub authors: Option<String>,
    pub isbn: Option<String>,
    pub publication_year: Option<i32>,
    pub publisher: Option<String>,
    pub description: Option<String>,
    pub cover_image_url: Option<String>,
    pub source_type: String,
    pub source_id: String,
    pub review_count: usize,
    pub average_rating: Option<f64>,
    pub created_at: DateTime<Utc>,
}

/// Request DTO for creating a book
#[derive(Debug, Deserialize, ToSchema)]
pub struct CreateBookRequestDto {
    pub title: String,
    pub authors: Option<String>,
    pub isbn: Option<String>,
    pub publication_year: Option<i32>,
    pub publisher: Option<String>,
    pub description: Option<String>,
    pub cover_image_url: Option<String>,
    pub source_type: String,
    pub source_id: String,
}

/// Search result DTO for external book APIs
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct BookSearchResultDto {
    pub source_id: String,
    pub title: String,
    pub authors: Option<String>,
    pub isbn: Option<String>,
    pub publication_year: Option<i32>,
    pub publisher: Option<String>,
    pub description: Option<String>,
    pub cover_image_url: Option<String>,
}

impl BookDto {
    pub fn from_book_with_stats(book: Book, review_count: usize, average_rating: Option<f64>) -> Self {
        Self {
            id: book.id,
            title: book.title,
            authors: book.authors,
            isbn: book.isbn,
            publication_year: book.publication_year,
            publisher: book.publisher,
            description: book.description,
            cover_image_url: book.cover_image_url,
            source_type: book.source_type.as_str().to_string(),
            source_id: book.source_id,
            review_count,
            average_rating,
            created_at: book.created_at,
        }
    }
}

impl From<Book> for BookDto {
    fn from(book: Book) -> Self {
        Self::from_book_with_stats(book, 0, None)
    }
}