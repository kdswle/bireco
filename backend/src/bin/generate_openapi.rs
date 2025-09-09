use std::fs;
use utoipa::OpenApi;

// Define a simple OpenAPI spec for generation
#[derive(OpenApi)]
#[openapi(
    paths(),
    components(
        schemas()
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
        (url = "http://localhost:8787", description = "Development server")
    )
)]
struct ApiDoc;

fn main() {
    let doc = ApiDoc::openapi();
    let json = doc.to_pretty_json().expect("Failed to serialize OpenAPI spec");
    
    fs::write("openapi.json", json).expect("Failed to write OpenAPI spec to file");
    println!("OpenAPI specification written to openapi.json");
}