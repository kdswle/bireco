use worker::*;

pub mod handlers;
pub mod entities;
mod external;
mod repositories;
mod use_cases;
pub mod dtos;
pub mod api_docs;

fn add_cors_headers(mut response: Response, env: &Env) -> Result<Response> {
    let headers = response.headers_mut();
    
    // Get allowed origin from environment variable, fallback to localhost for development
    let allowed_origin = env.var("ALLOWED_ORIGIN")
        .map(|v| v.to_string())
        .unwrap_or_else(|_| "http://localhost:5173".to_string());
    
    headers.set("Access-Control-Allow-Origin", &allowed_origin)?;
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")?;
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")?;
    headers.set("Access-Control-Allow-Credentials", "true")?;
    Ok(response)
}

#[event(fetch)]
async fn main(req: Request, env: Env, _ctx: Context) -> Result<Response> {
    // Handle preflight requests
    if req.method() == Method::Options {
        return add_cors_headers(Response::empty()?, &env);
    }

    let router = Router::new();
    
    let response = router
        .get("/", |_, _| Response::ok("bireco API is running"))
        .get("/health", handlers::health::check)
        .get("/api/test", handlers::health::test)
        .get("/api/docs/openapi.json", |_, _| {
            use crate::api_docs::ApiDoc;
            use utoipa::OpenApi;
            
            let openapi_spec = ApiDoc::openapi().to_pretty_json().unwrap_or_else(|_| "{}".to_string());
            Response::from_json(&serde_json::from_str::<serde_json::Value>(&openapi_spec).unwrap_or_default())
        })
        .get("/api/docs", |_, _| {
            let html = include_str!("../swagger-ui.html");
            Response::from_html(html)
        })
        .post_async("/api/auth/register", handlers::auth::register)
        .post_async("/api/auth/login", handlers::auth::login)
        .get_async("/api/auth/me", handlers::auth::me)
        .get_async("/api/books/search", handlers::books::search)
        .post_async("/api/books", handlers::books::create)
        .get_async("/api/books/:id", handlers::books::get_by_id)
        .get_async("/api/reviews", handlers::reviews::list)
        .get_async("/api/reviews/latest", handlers::reviews::latest)
        .get_async("/api/reviews/:id", handlers::reviews::get_by_id)
        .post_async("/api/reviews", handlers::reviews::create)
        .put_async("/api/reviews/:id", handlers::reviews::update)
        .delete_async("/api/reviews/:id", handlers::reviews::delete)
        .run(req, env.clone())
        .await?;

    add_cors_headers(response, &env)
}
