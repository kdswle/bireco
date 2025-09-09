use serde::{Deserialize, Serialize};
use utoipa::ToSchema;

/// Standard API response wrapper
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ApiResponse<T> {
    /// Response data
    pub data: T,
    /// Response metadata
    pub meta: ResponseMeta,
}

/// Response metadata for additional information
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ResponseMeta {
    /// HTTP status code
    pub status: u16,
    /// Error information (only present when status >= 400)
    pub error: Option<ApiError>,
}

/// Pagination metadata
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct PaginationMeta {
    /// Current page number (0-based)
    pub page: usize,
    /// Number of items per page
    pub per_page: usize,
    /// Total number of items
    pub total: usize,
    /// Total number of pages
    pub total_pages: usize,
    /// Whether there are more pages
    pub has_next: bool,
    /// Whether there are previous pages  
    pub has_prev: bool,
}

/// Error information
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ApiError {
    /// Error code
    pub code: String,
    /// Human-readable error message
    pub message: String,
    /// Additional error details
    pub details: Option<serde_json::Value>,
}

impl<T> ApiResponse<T> {
    /// Create a successful response
    pub fn success(data: T) -> Self {
        Self {
            data,
            meta: ResponseMeta {
                status: 200,
                error: None,
            },
        }
    }


    /// Create an error response
    pub fn error(status: u16, code: &str, message: &str, data: T) -> Self {
        Self {
            data,
            meta: ResponseMeta {
                status,
                error: Some(ApiError {
                    code: code.to_string(),
                    message: message.to_string(),
                    details: None,
                }),
            },
        }
    }
    
    /// Create a successful response with custom status
    pub fn success_with_status(data: T, status: u16) -> Self {
        Self {
            data,
            meta: ResponseMeta {
                status,
                error: None,
            },
        }
    }
}

/// Helper function to create pagination metadata
pub fn create_pagination_meta(page: usize, per_page: usize, total: usize) -> PaginationMeta {
    let total_pages = (total + per_page - 1) / per_page; // Ceiling division
    PaginationMeta {
        page,
        per_page,
        total,
        total_pages,
        has_next: page + 1 < total_pages,
        has_prev: page > 0,
    }
}