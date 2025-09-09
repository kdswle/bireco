use worker::*;
use worker::d1::D1Database;
use wasm_bindgen::JsValue;
use serde::{Deserialize};
use chrono::{DateTime, Utc, TimeZone};
use crate::entities::{Book, SourceType};

#[derive(Debug, Deserialize)]
struct BookRow {
    id: String,
    title: String,
    authors: Option<String>,
    isbn: Option<String>,
    publication_year: Option<i32>,
    publisher: Option<String>,
    description: Option<String>,
    cover_image_url: Option<String>,
    source_type: String,
    source_id: String,
    created_at: f64,  // D1 returns timestamp as f64
    updated_at: f64,  // D1 returns timestamp as f64
}

impl BookRow {
    fn to_book(self) -> Result<Book> {
        let source_type = match self.source_type.as_str() {
            "ndl" => SourceType::Ndl,
            "amazon" => SourceType::Amazon,
            "manual" => SourceType::Manual,
            _ => return Err(Error::RustError(format!("Invalid source_type: {}", self.source_type))),
        };

        Ok(Book {
            id: self.id,
            title: self.title,
            authors: self.authors,
            isbn: self.isbn,
            publication_year: self.publication_year,
            publisher: self.publisher,
            description: self.description,
            cover_image_url: self.cover_image_url,
            source_type,
            source_id: self.source_id,
            created_at: Utc.timestamp_opt(self.created_at as i64, 0).single()
                .ok_or_else(|| Error::RustError("Invalid created_at timestamp".to_string()))?,
            updated_at: Utc.timestamp_opt(self.updated_at as i64, 0).single()
                .ok_or_else(|| Error::RustError("Invalid updated_at timestamp".to_string()))?,
        })
    }
}

pub struct BookRepository<'a> {
    db: &'a D1Database,
}

impl<'a> BookRepository<'a> {
    pub fn new(db: &'a D1Database) -> Self {
        Self { db }
    }

    pub async fn create(&self, book: &Book) -> Result<()> {
        let query = "
            INSERT INTO books (id, title, authors, isbn, publication_year, publisher, 
                             description, cover_image_url, source_type, source_id, 
                             created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12)
        ";
        
        self.db
            .prepare(query)
            .bind(&[
                book.id.clone().into(),
                book.title.clone().into(),
                book.authors.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                book.isbn.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                book.publication_year.map(|y| y.into()).unwrap_or(JsValue::NULL),
                book.publisher.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                book.description.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                book.cover_image_url.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                book.source_type.as_str().into(),
                book.source_id.clone().into(),
                (book.created_at.timestamp() as i32).into(),
                (book.updated_at.timestamp() as i32).into(),
            ])?
            .run()
            .await?;

        Ok(())
    }

    pub async fn find_by_id(&self, id: &str) -> Result<Option<Book>> {
        let query = "
            SELECT id, title, authors, isbn, publication_year, publisher, 
                   description, cover_image_url, source_type, source_id, 
                   created_at, updated_at
            FROM books WHERE id = ?1
        ";
        
        let result = self.db
            .prepare(query)
            .bind(&[id.into()])?
            .first::<BookRow>(None)
            .await?;

        match result {
            Some(row) => Ok(Some(row.to_book()?)),
            None => Ok(None),
        }
    }

    pub async fn find_by_source(&self, source_type: &SourceType, source_id: &str) -> Result<Option<Book>> {
        let query = "
            SELECT id, title, authors, isbn, publication_year, publisher, 
                   description, cover_image_url, source_type, source_id, 
                   created_at, updated_at
            FROM books WHERE source_type = ?1 AND source_id = ?2
        ";
        
        let result = self.db
            .prepare(query)
            .bind(&[source_type.as_str().into(), source_id.into()])?
            .first::<Book>(None)
            .await?;

        Ok(result)
    }

    pub async fn search_by_title(&self, title: &str, limit: Option<u32>) -> Result<Vec<Book>> {
        let limit = limit.unwrap_or(20);
        let query = "
            SELECT id, title, authors, isbn, publication_year, publisher, 
                   description, cover_image_url, source_type, source_id, 
                   created_at, updated_at
            FROM books 
            WHERE title LIKE ?1 
            ORDER BY created_at DESC 
            LIMIT ?2
        ";
        
        let search_term = format!("%{}%", title);
        let results = self.db
            .prepare(query)
            .bind(&[search_term.into(), (limit as i64).into()])?
            .all()
            .await?;

        let books: Vec<Book> = results.results()?;
        Ok(books)
    }

    pub async fn search_by_author(&self, author: &str, limit: Option<u32>) -> Result<Vec<Book>> {
        let limit = limit.unwrap_or(20);
        let query = "
            SELECT id, title, authors, isbn, publication_year, publisher, 
                   description, cover_image_url, source_type, source_id, 
                   created_at, updated_at
            FROM books 
            WHERE authors LIKE ?1 
            ORDER BY created_at DESC 
            LIMIT ?2
        ";
        
        let search_term = format!("%{}%", author);
        let results = self.db
            .prepare(query)
            .bind(&[search_term.into(), (limit as i64).into()])?
            .all()
            .await?;

        let books: Vec<Book> = results.results()?;
        Ok(books)
    }

    pub async fn get_review_count(&self, book_id: &str) -> Result<i32> {
        let query = "SELECT COUNT(*) as count FROM reviews WHERE book_id = ?1";
        
        let result = self.db
            .prepare(query)
            .bind(&[book_id.into()])?
            .first::<serde_json::Value>(None)
            .await?;

        match result {
            Some(value) => {
                let count = value["count"].as_i64().unwrap_or(0) as i32;
                Ok(count)
            },
            None => Ok(0),
        }
    }

    pub async fn get_average_rating(&self, book_id: &str) -> Result<Option<f64>> {
        let query = "SELECT AVG(rating) as avg_rating FROM reviews WHERE book_id = ?1 AND rating IS NOT NULL";
        
        let result = self.db
            .prepare(query)
            .bind(&[book_id.into()])?
            .first::<serde_json::Value>(None)
            .await?;

        match result {
            Some(value) => {
                let avg = value["avg_rating"].as_f64();
                Ok(avg)
            },
            None => Ok(None),
        }
    }

    pub async fn update(&self, book: &Book) -> Result<()> {
        let query = "
            UPDATE books 
            SET title = ?2, authors = ?3, isbn = ?4, publication_year = ?5, 
                publisher = ?6, description = ?7, cover_image_url = ?8, 
                updated_at = ?9
            WHERE id = ?1
        ";
        
        self.db
            .prepare(query)
            .bind(&[
                book.id.clone().into(),
                book.title.clone().into(),
                book.authors.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                book.isbn.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                book.publication_year.map(|y| y.into()).unwrap_or(JsValue::NULL),
                book.publisher.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                book.description.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                book.cover_image_url.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                (book.updated_at.timestamp() as i32).into(),
            ])?
            .run()
            .await?;

        Ok(())
    }

    pub async fn delete(&self, id: &str) -> Result<()> {
        let query = "DELETE FROM books WHERE id = ?1";
        
        self.db
            .prepare(query)
            .bind(&[id.into()])?
            .run()
            .await?;

        Ok(())
    }
}