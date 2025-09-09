use utoipa::{OpenApi, ToSchema};
use crate::dtos::common::{ResponseMeta, ApiError};
use crate::dtos::{user::UserDto, book::BookDto, review::ReviewDto, AuthResponseDto};
use crate::entities::{AuthResponse, User, UserResponse, BookResponse, ReviewResponse, BookSearchResult, CreateUserRequest, LoginRequest, CreateBookRequest, CreateReviewRequest, UpdateReviewRequest, SourceType};
use serde::{Serialize, Deserialize};

// Define specific response wrappers to avoid generic type issues
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct AuthResponseWrapper {
    pub data: AuthResponse,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct UserResponseWrapper {
    pub data: User,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct BookResponseWrapper {
    pub data: BookResponse,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ReviewResponseWrapper {
    pub data: ReviewResponse,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ReviewListResponseWrapper {
    pub data: Vec<ReviewResponse>,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct BookSearchResultsWrapper {
    pub data: Vec<BookSearchResult>,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct StringResponseWrapper {
    pub data: String,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct OptionalAuthResponseWrapper {
    pub data: Option<AuthResponse>,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct OptionalBookResponseWrapper {
    pub data: Option<BookResponse>,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct OptionalReviewResponseWrapper {
    pub data: Option<ReviewResponse>,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct OptionalUserResponseWrapper {
    pub data: Option<User>,
    pub meta: ResponseMeta,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct OptionalStringResponseWrapper {
    pub data: Option<String>,
    pub meta: ResponseMeta,
}

#[derive(OpenApi)]
#[openapi(
    paths(
        // Auth endpoints
        crate::handlers::auth::register,
        crate::handlers::auth::login,
        crate::handlers::auth::me,
        // Book endpoints
        crate::handlers::books::search,
        crate::handlers::books::create,
        crate::handlers::books::get_by_id,
        // Review endpoints
        crate::handlers::reviews::list,
        crate::handlers::reviews::latest,
        crate::handlers::reviews::create,
        crate::handlers::reviews::get_by_id,
        crate::handlers::reviews::update,
        crate::handlers::reviews::delete
    ),
    components(
        schemas(
            // Response wrappers
            AuthResponseWrapper,
            UserResponseWrapper,
            BookResponseWrapper,
            ReviewResponseWrapper,
            ReviewListResponseWrapper,
            BookSearchResultsWrapper,
            StringResponseWrapper,
            OptionalAuthResponseWrapper,
            OptionalBookResponseWrapper,
            OptionalReviewResponseWrapper,
            OptionalUserResponseWrapper,
            OptionalStringResponseWrapper,
            
            // Common API response metadata
            ResponseMeta,
            ApiError,
            
            // Entity types that have ToSchema derives
            AuthResponse,
            User,
            UserResponse,
            BookResponse,
            ReviewResponse,
            BookSearchResult,
            CreateUserRequest,
            CreateBookRequest,
            LoginRequest,
            CreateReviewRequest,
            UpdateReviewRequest,
            SourceType,
            
            // DTOs for backwards compatibility
            UserDto,
            BookDto,
            ReviewDto,
            AuthResponseDto,
        )
    ),
    tags(
        (name = "auth", description = "Authentication endpoints"),
        (name = "books", description = "Book management endpoints"),
        (name = "reviews", description = "Review management endpoints"),
    ),
    info(
        title = "Bireco API",
        version = "1.0.0",
        description = "API for the Bireco book review platform",
        contact(
            name = "Bireco Team",
            email = "team@bireco.example.com"
        )
    ),
    servers(
        (url = "https://your-worker.your-subdomain.workers.dev", description = "Production server"),
        (url = "http://localhost:8787", description = "Development server")
    )
)]
pub struct ApiDoc;