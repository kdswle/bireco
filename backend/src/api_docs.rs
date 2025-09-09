use utoipa::OpenApi;
use crate::dtos::*;

#[derive(OpenApi)]
#[openapi(
    paths(
        // Auth endpoints
        crate::handlers::auth::register,
        crate::handlers::auth::login,
    ),
    components(
        schemas(
            // Common API types
            ApiResponse<AuthResponseDto>,
            ApiResponse<UserDto>,
            ApiResponse<BookDto>,
            ApiResponse<ReviewDto>,
            ApiResponse<Vec<ReviewDto>>,
            ApiResponse<Vec<BookDto>>,
            ApiResponse<String>,
            ResponseMeta,
            PaginationMeta,
            ApiError,
            
            // DTO types
            UserDto,
            BookDto,
            ReviewDto,
            AuthResponseDto,
            
            // Request DTOs
            RegisterRequestDto,
            LoginRequestDto,
            CreateBookRequestDto,
            CreateReviewRequestDto,
            UpdateReviewRequestDto,
            
            // Other types
            BookSearchResultDto,
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