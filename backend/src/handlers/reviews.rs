use worker::*;
use serde_json::json;
use crate::entities::{CreateReviewRequest, UpdateReviewRequest};
use crate::repositories::{ReviewRepository, BookRepository, UserRepository};
use crate::use_cases::{ReviewUseCase, AuthUseCase};

// Helper function to extract user ID from token
async fn get_user_id_from_request(req: &Request, ctx: &RouteContext<()>) -> Result<String> {
    let auth_header = match req.headers().get("Authorization") {
        Ok(Some(header)) => header,
        _ => return Err(Error::RustError("Authorization header missing".to_string()))
    };
    
    let token = auth_header
        .strip_prefix("Bearer ")
        .ok_or_else(|| Error::RustError("Invalid authorization header format".to_string()))?;
    
    let jwt_secret = ctx.env.var("JWT_SECRET")?.to_string();
    let db = ctx.env.d1("DB")?;
    let user_repo = UserRepository::new(&db);
    let auth_use_case = AuthUseCase::new(user_repo, jwt_secret);
    
    let user = auth_use_case.verify_token(token).await?;
    Ok(user.id)
}

pub async fn list(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    let db = ctx.env.d1("DB")?;
    
    let url = req.url()?;
    let query_pairs: std::collections::HashMap<String, String> = 
        url.query_pairs().map(|(k, v)| (k.to_string(), v.to_string())).collect();
    
    let book_id = query_pairs.get("book_id").map(|s| s.as_str());
    let limit = query_pairs.get("limit")
        .and_then(|l| l.parse::<u32>().ok());
    let offset = query_pairs.get("offset")
        .and_then(|o| o.parse::<u32>().ok());

    let review_repo = ReviewRepository::new(&db);
    let book_repo = BookRepository::new(&db);
    let user_repo = UserRepository::new(&db);
    let review_use_case = ReviewUseCase::new(review_repo, book_repo, user_repo);
    
    match review_use_case.list_reviews(book_id, limit, offset).await {
        Ok(reviews) => {
            Response::from_json(&json!({
                "success": true,
                "data": reviews,
                "pagination": {
                    "total": reviews.len(),
                    "limit": limit.unwrap_or(20),
                    "offset": offset.unwrap_or(0)
                }
            }))
        },
        Err(e) => {
            console_log!("Review list error: {:?}", e);
            Response::from_json(&json!({
                "success": false,
                "error": {
                    "code": "REVIEW_LIST_FAILED",
                    "message": "レビューの取得に失敗しました",
                    "details": format!("{:?}", e)
                }
            })).map(|r| r.with_status(500))
        }
    }
}

pub async fn latest(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    let db = ctx.env.d1("DB")?;
    
    let url = req.url()?;
    let query_pairs: std::collections::HashMap<String, String> = 
        url.query_pairs().map(|(k, v)| (k.to_string(), v.to_string())).collect();
    
    let limit = query_pairs.get("limit")
        .and_then(|l| l.parse::<u32>().ok());

    let review_repo = ReviewRepository::new(&db);
    let book_repo = BookRepository::new(&db);
    let user_repo = UserRepository::new(&db);
    let review_use_case = ReviewUseCase::new(review_repo, book_repo, user_repo);
    
    match review_use_case.get_latest_reviews(limit).await {
        Ok(reviews) => {
            Response::from_json(&json!({
                "success": true,
                "data": reviews
            }))
        },
        Err(e) => {
            console_log!("Latest reviews error: {:?}", e);
            Response::from_json(&json!({
                "success": false,
                "error": {
                    "code": "LATEST_REVIEWS_FAILED",
                    "message": "最新レビューの取得に失敗しました",
                    "details": format!("{:?}", e)
                }
            })).map(|r| r.with_status(500))
        }
    }
}

pub async fn get_by_id(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    let db = ctx.env.d1("DB")?;
    
    let review_id = match ctx.param("id") {
        Some(id) => id,
        None => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "INVALID_REQUEST",
                "message": "Review ID is required"
            }
        })).map(|r| r.with_status(400))
    };

    let review_repo = ReviewRepository::new(&db);
    let book_repo = BookRepository::new(&db);
    let user_repo = UserRepository::new(&db);
    let review_use_case = ReviewUseCase::new(review_repo, book_repo, user_repo);
    
    match review_use_case.get_review_by_id(review_id).await {
        Ok(Some(review)) => {
            Response::from_json(&json!({
                "success": true,
                "data": review
            }))
        },
        Ok(None) => {
            Response::from_json(&json!({
                "success": false,
                "error": {
                    "code": "NOT_FOUND",
                    "message": "レビューが見つかりません"
                }
            })).map(|r| r.with_status(404))
        },
        Err(e) => {
            console_log!("Review retrieval error: {:?}", e);
            Response::from_json(&json!({
                "success": false,
                "error": {
                    "code": "REVIEW_RETRIEVAL_FAILED",
                    "message": "レビューの取得に失敗しました",
                    "details": format!("{:?}", e)
                }
            })).map(|r| r.with_status(500))
        }
    }
}

pub async fn create(mut req: Request, ctx: RouteContext<()>) -> Result<Response> {
    let db = ctx.env.d1("DB")?;
    
    // Get user ID from token
    let user_id = match get_user_id_from_request(&req, &ctx).await {
        Ok(id) => id,
        Err(_) => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "UNAUTHORIZED",
                "message": "認証が必要です"
            }
        })).map(|r| r.with_status(401))
    };
    
    // Parse request body
    let body: CreateReviewRequest = match req.json().await {
        Ok(body) => body,
        Err(_) => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "INVALID_REQUEST",
                "message": "Invalid request body"
            }
        })).map(|r| r.with_status(400))
    };

    let review_repo = ReviewRepository::new(&db);
    let book_repo = BookRepository::new(&db);
    let user_repo = UserRepository::new(&db);
    let review_use_case = ReviewUseCase::new(review_repo, book_repo, user_repo);
    
    match review_use_case.create_review(body, &user_id).await {
        Ok(review) => {
            Response::from_json(&json!({
                "success": true,
                "data": review
            })).map(|r| r.with_status(201))
        },
        Err(e) => {
            console_log!("Review creation error: {:?}", e);
            let (status, code, message) = match &e {
                Error::RustError(msg) if msg.contains("本が見つかりません") => {
                    (404, "BOOK_NOT_FOUND", "指定された本が見つかりません")
                }
                Error::RustError(msg) if msg.contains("バリデーション") || msg.contains("入力") => {
                    (400, "VALIDATION_ERROR", msg.as_str())
                }
                _ => {
                    (500, "REVIEW_CREATION_FAILED", "レビューの作成に失敗しました")
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

pub async fn update(mut req: Request, ctx: RouteContext<()>) -> Result<Response> {
    let db = ctx.env.d1("DB")?;
    
    // Get user ID from token
    let user_id = match get_user_id_from_request(&req, &ctx).await {
        Ok(id) => id,
        Err(_) => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "UNAUTHORIZED",
                "message": "認証が必要です"
            }
        })).map(|r| r.with_status(401))
    };
    
    let review_id = match ctx.param("id") {
        Some(id) => id,
        None => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "INVALID_REQUEST",
                "message": "Review ID is required"
            }
        })).map(|r| r.with_status(400))
    };
    
    // Parse request body
    let body: UpdateReviewRequest = match req.json().await {
        Ok(body) => body,
        Err(_) => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "INVALID_REQUEST",
                "message": "Invalid request body"
            }
        })).map(|r| r.with_status(400))
    };

    let review_repo = ReviewRepository::new(&db);
    let book_repo = BookRepository::new(&db);
    let user_repo = UserRepository::new(&db);
    let review_use_case = ReviewUseCase::new(review_repo, book_repo, user_repo);
    
    match review_use_case.update_review(review_id, body, &user_id).await {
        Ok(review) => {
            Response::from_json(&json!({
                "success": true,
                "data": review
            }))
        },
        Err(e) => {
            console_log!("Review update error: {:?}", e);
            let (status, code, message) = match &e {
                Error::RustError(msg) if msg.contains("見つかりません") => {
                    (404, "NOT_FOUND", "レビューが見つかりません")
                }
                Error::RustError(msg) if msg.contains("権限") => {
                    (403, "FORBIDDEN", "このレビューを編集する権限がありません")
                }
                Error::RustError(msg) if msg.contains("バリデーション") || msg.contains("入力") => {
                    (400, "VALIDATION_ERROR", msg.as_str())
                }
                _ => {
                    (500, "REVIEW_UPDATE_FAILED", "レビューの更新に失敗しました")
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

pub async fn delete(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    let db = ctx.env.d1("DB")?;
    
    // Get user ID from token
    let user_id = match get_user_id_from_request(&req, &ctx).await {
        Ok(id) => id,
        Err(_) => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "UNAUTHORIZED",
                "message": "認証が必要です"
            }
        })).map(|r| r.with_status(401))
    };
    
    let review_id = match ctx.param("id") {
        Some(id) => id,
        None => return Response::from_json(&json!({
            "success": false,
            "error": {
                "code": "INVALID_REQUEST",
                "message": "Review ID is required"
            }
        })).map(|r| r.with_status(400))
    };

    let review_repo = ReviewRepository::new(&db);
    let book_repo = BookRepository::new(&db);
    let user_repo = UserRepository::new(&db);
    let review_use_case = ReviewUseCase::new(review_repo, book_repo, user_repo);
    
    match review_use_case.delete_review(review_id, &user_id).await {
        Ok(_) => {
            Response::from_json(&json!({
                "success": true,
                "message": "レビューを削除しました"
            }))
        },
        Err(e) => {
            console_log!("Review deletion error: {:?}", e);
            let (status, code, message) = match &e {
                Error::RustError(msg) if msg.contains("見つかりません") => {
                    (404, "NOT_FOUND", "レビューが見つかりません")
                }
                Error::RustError(msg) if msg.contains("権限") => {
                    (403, "FORBIDDEN", "このレビューを削除する権限がありません")
                }
                _ => {
                    (500, "REVIEW_DELETE_FAILED", "レビューの削除に失敗しました")
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