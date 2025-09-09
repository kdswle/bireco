use serde::{Deserialize, Serialize};
use utoipa::ToSchema;

/// Standard API response wrapper
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ApiResponse<T> {
    /// Whether the request was successful
    pub success: bool,
    /// Response data
    pub data: T,
    /// Response metadata
    pub meta: Option<ResponseMeta>,
    /// Error information (only present when success is false)
    pub error: Option<ApiError>,
}

/// Response metadata for additional information
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ResponseMeta {
    /// Timestamp of the response
    pub timestamp: chrono::DateTime<chrono::Utc>,
    /// Request ID for tracking
    pub request_id: Option<String>,
    /// Pagination information (if applicable)
    pub pagination: Option<PaginationMeta>,
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
            success: true,
            data,
            meta: Some(ResponseMeta {
                timestamp: chrono::Utc::now(),
                request_id: None,
                pagination: None,
            }),
            error: None,
        }
    }

    /// Create a successful response with pagination
    pub fn success_with_pagination(data: T, pagination: PaginationMeta) -> Self {
        Self {
            success: true,
            data,
            meta: Some(ResponseMeta {
                timestamp: chrono::Utc::now(),
                request_id: None,
                pagination: Some(pagination),
            }),
            error: None,
        }
    }

    /// Create an error response
    pub fn error(code: &str, message: &str) -> Self 
    where 
        T: Default 
    {
        Self {
            success: false,
            data: T::default(),
            meta: Some(ResponseMeta {
                timestamp: chrono::Utc::now(),
                request_id: None,
                pagination: None,
            }),
            error: Some(ApiError {
                code: code.to_string(),
                message: message.to_string(),
                details: None,
            }),
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