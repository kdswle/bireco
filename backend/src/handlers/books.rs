use worker::*;
use serde_json::json;
use crate::external::NdlOpenSearchClient;
use crate::external::ndl::opensearch::SearchParams;
use crate::entities::CreateBookRequest;
use crate::repositories::BookRepository;
use crate::use_cases::BookUseCase;
use crate::dtos::common::ApiResponse;

fn normalize_search_query(query: &str) -> String {
    // 全角空白を半角空白に変換してtrim
    query.replace('　', " ").trim().to_string()
}

/// Search books by title
#[utoipa::path(
    get,
    path = "/api/books/search",
    tag = "books",
    params(
        ("q" = String, Query, description = "Search query"),
        ("limit" = Option<u32>, Query, description = "Number of results to return")
    ),
    responses(
        (status = 200, description = "Search results", body = crate::api_docs::BookSearchResultsWrapper)
    )
)]
pub async fn search(req: Request, _ctx: RouteContext<()>) -> Result<Response> {
    let url = req.url()?;
    let query_pairs: std::collections::HashMap<String, String> = 
        url.query_pairs().map(|(k, v)| (k.to_string(), v.to_string())).collect();
    
    let default_query = "".to_string();
    let raw_query = query_pairs.get("q").unwrap_or(&default_query);
    let query = normalize_search_query(raw_query);
    let limit = query_pairs.get("limit")
        .and_then(|l| l.parse::<u32>().ok())
        .unwrap_or(20);

    // Return empty result for empty query
    if query.is_empty() {
        let empty_response: Vec<crate::entities::BookSearchResult> = vec![];
        let api_response = ApiResponse::success(empty_response);
        return Response::from_json(&api_response);
    }

    let client = NdlOpenSearchClient::new();
    
    // NDL OpenSearch APIで検索
    match client.search_by_title(&query, Some(limit)).await {
        Ok(books) => {
            let api_response = ApiResponse::success(books);
            Response::from_json(&api_response)
        },
        Err(e) => {
            let empty_response: Vec<crate::entities::BookSearchResult> = vec![];
            let api_response = ApiResponse::error(500, "BOOK_SEARCH_FAILED", &format!("Failed to search books: {}", e), empty_response);
            let response = Response::from_json(&api_response)?;
            Ok(response.with_status(500))
        }
    }
}

/// Create a new book
#[utoipa::path(
    post,
    path = "/api/books",
    tag = "books",
    request_body = CreateBookRequest,
    responses(
        (status = 201, description = "Book created successfully", body = ApiResponse<crate::entities::BookResponse>),
        (status = 400, description = "Invalid request", body = ApiResponse<Option<crate::entities::BookResponse>>)
    )
)]
pub async fn create(mut req: Request, ctx: RouteContext<()>) -> Result<Response> {
    // Get D1 database
    let db = ctx.env.d1("DB")?;
    
    // Parse request body
    let body: CreateBookRequest = match req.json().await {
        Ok(body) => body,
        Err(_) => {
            let empty_response: Option<crate::entities::BookResponse> = None;
            let api_response = ApiResponse::error(400, "INVALID_REQUEST", "Invalid request body", empty_response);
            return Response::from_json(&api_response).map(|r| r.with_status(400));
        }
    };

    // Initialize repository and use case
    let book_repo = BookRepository::new(&db);
    let book_use_case = BookUseCase::new(book_repo);
    
    // Create book
    match book_use_case.create_book(body).await {
        Ok(book_response) => {
            let api_response = ApiResponse::success_with_status(book_response, 201);
            Response::from_json(&api_response).map(|r| r.with_status(201))
        },
        Err(e) => {
            console_log!("Book creation error: {:?}", e);
            let (status, code, message) = match &e {
                Error::RustError(msg) if msg.contains("UNIQUE constraint failed") => {
                    (409, "DUPLICATE_BOOK", "この本は既に登録されています")
                }
                Error::RustError(msg) if msg.contains("not found") => {
                    (400, "DATABASE_ERROR", "データベース接続に失敗しました")
                }
                _ => {
                    (500, "BOOK_CREATION_FAILED", "本の作成に失敗しました")
                }
            };
            
            let empty_response: Option<crate::entities::BookResponse> = None;
            let mut api_response = ApiResponse::error(status, code, message, empty_response);
            // Add error details
            if let Some(ref mut error) = api_response.meta.error {
                error.details = Some(serde_json::json!({"rust_error": format!("{:?}", e)}));
            }
            Response::from_json(&api_response).map(|r| r.with_status(status))
        }
    }
}

/// Get book by ID
#[utoipa::path(
    get,
    path = "/api/books/{id}",
    tag = "books",
    params(
        ("id" = String, Path, description = "Book ID")
    ),
    responses(
        (status = 200, description = "Book found", body = ApiResponse<crate::entities::BookResponse>),
        (status = 404, description = "Book not found", body = ApiResponse<Option<crate::entities::BookResponse>>)
    )
)]
pub async fn get_by_id(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    // Get D1 database
    let db = ctx.env.d1("DB")?;
    
    // Extract book ID from route parameters
    let book_id = match ctx.param("id") {
        Some(id) => id,
        None => {
            let empty_response: Option<crate::entities::BookResponse> = None;
            let api_response = ApiResponse::error(400, "INVALID_REQUEST", "Book ID is required", empty_response);
            return Response::from_json(&api_response).map(|r| r.with_status(400));
        }
    };

    // Initialize repository and use case
    let book_repo = BookRepository::new(&db);
    let book_use_case = BookUseCase::new(book_repo);
    
    // Get book
    match book_use_case.get_book_by_id(book_id).await {
        Ok(Some(book_response)) => {
            let api_response = ApiResponse::success(book_response);
            Response::from_json(&api_response)
        },
        Ok(None) => {
            let empty_response: Option<crate::entities::BookResponse> = None;
            let api_response = ApiResponse::error(404, "NOT_FOUND", "本が見つかりません", empty_response);
            Response::from_json(&api_response).map(|r| r.with_status(404))
        },
        Err(e) => {
            console_log!("Book retrieval error: {:?}", e);
            let empty_response: Option<crate::entities::BookResponse> = None;
            let mut api_response = ApiResponse::error(500, "BOOK_RETRIEVAL_FAILED", "本の取得に失敗しました", empty_response);
            // Add error details
            if let Some(ref mut error) = api_response.meta.error {
                error.details = Some(serde_json::json!({"rust_error": format!("{:?}", e)}));
            }
            Response::from_json(&api_response).map(|r| r.with_status(500))
        }
    }
}