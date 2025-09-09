use worker::*;
use serde_json::json;
use crate::external::NdlOpenSearchClient;
use crate::external::ndl::opensearch::SearchParams;
use crate::entities::CreateBookRequest;
use crate::repositories::BookRepository;
use crate::use_cases::BookUseCase;

fn normalize_search_query(query: &str) -> String {
    // 全角空白を半角空白に変換してtrim
    query.replace('　', " ").trim().to_string()
}

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
        return Response::from_json(&json!({
            "success": true,
            "data": []
        }));
    }

    let client = NdlOpenSearchClient::new();
    
    // NDL OpenSearch APIで検索
    match client.search_by_title(&query, Some(limit)).await {
        Ok(books) => {
            Response::from_json(&json!({
                "success": true,
                "data": books
            }))
        },
        Err(e) => {
            let response = Response::from_json(&json!({
                "success": false,
                "error": "Book search failed",
                "message": format!("Failed to search books: {}", e)
            }))?;
            Ok(response.with_status(500))
        }
    }
}

pub async fn create(mut req: Request, ctx: RouteContext<()>) -> Result<Response> {
    // Get D1 database
    let db = ctx.env.d1("DB")?;
    
    // Parse request body
    let body: CreateBookRequest = match req.json().await {
        Ok(body) => body,
        Err(_) => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "INVALID_REQUEST",
                "message": "Invalid request body"
            }
        })).map(|r| r.with_status(400))
    };

    // Initialize repository and use case
    let book_repo = BookRepository::new(&db);
    let book_use_case = BookUseCase::new(book_repo);
    
    // Create book
    match book_use_case.create_book(body).await {
        Ok(book_response) => {
            Response::from_json(&json!({
                "success": true,
                "data": book_response
            })).map(|r| r.with_status(201))
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
            
            Response::from_json(&json!({
                "success": false,
                "error": {
                    "code": code,
                    "message": message,
                    "details": format!("{:?}", e)
                }
            })).map(|r| r.with_status(status))
        }
    }
}

pub async fn get_by_id(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    // Get D1 database
    let db = ctx.env.d1("DB")?;
    
    // Extract book ID from route parameters
    let book_id = match ctx.param("id") {
        Some(id) => id,
        None => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "INVALID_REQUEST",
                "message": "Book ID is required"
            }
        })).map(|r| r.with_status(400))
    };

    // Initialize repository and use case
    let book_repo = BookRepository::new(&db);
    let book_use_case = BookUseCase::new(book_repo);
    
    // Get book
    match book_use_case.get_book_by_id(book_id).await {
        Ok(Some(book_response)) => {
            Response::from_json(&json!({
                "success": true,
                "data": book_response
            }))
        },
        Ok(None) => {
            Response::from_json(&json!({
                "success": false,
                "error": {
                    "code": "NOT_FOUND",
                    "message": "本が見つかりません"
                }
            })).map(|r| r.with_status(404))
        },
        Err(e) => {
            console_log!("Book retrieval error: {:?}", e);
            Response::from_json(&json!({
                "success": false,
                "error": {
                    "code": "BOOK_RETRIEVAL_FAILED",
                    "message": "本の取得に失敗しました",
                    "details": format!("{:?}", e)
                }
            })).map(|r| r.with_status(500))
        }
    }
}