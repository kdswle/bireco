use worker::*;

mod handlers;
mod entities;
mod external;
mod repositories;
mod use_cases;

fn add_cors_headers(mut response: Response) -> Result<Response> {
    let headers = response.headers_mut();
    headers.set("Access-Control-Allow-Origin", "http://localhost:5173")?;
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")?;
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")?;
    headers.set("Access-Control-Allow-Credentials", "true")?;
    Ok(response)
}

#[event(fetch)]
async fn main(req: Request, env: Env, _ctx: Context) -> Result<Response> {
    // Handle preflight requests
    if req.method() == Method::Options {
        return add_cors_headers(Response::empty()?);
    }

    let router = Router::new();
    
    let response = router
        .get("/", |_, _| Response::ok("bireco API is running"))
        .get("/health", handlers::health::check)
        .get("/api/test", handlers::health::test)
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
        .run(req, env)
        .await?;

    add_cors_headers(response)
}