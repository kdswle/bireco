use worker::*;
use serde_json::json;

pub fn check(_req: Request, _ctx: RouteContext<()>) -> Result<Response> {
    Response::ok("OK")
}

pub fn test(_req: Request, _ctx: RouteContext<()>) -> Result<Response> {
    Response::from_json(&json!({
        "success": true,
        "message": "Test endpoint working",
        "timestamp": js_sys::Date::now()
    }))
}