use worker::*;
use worker::d1::D1Database;
use wasm_bindgen::JsValue;
use serde::Deserialize;
use chrono::{DateTime, Utc, TimeZone};
use crate::entities::Review;

#[derive(Debug, Deserialize)]
struct ReviewRow {
    id: String,
    book_id: String,
    user_id: String,
    title: String,
    content: String,
    rating: Option<i32>,
    created_at: f64,
    updated_at: f64,
}

impl ReviewRow {
    fn to_review(self) -> Result<Review> {
        Ok(Review {
            id: self.id,
            book_id: self.book_id,
            user_id: self.user_id,
            title: self.title,
            content: self.content,
            rating: self.rating,
            created_at: Utc.timestamp_opt(self.created_at as i64, 0).single()
                .ok_or_else(|| Error::RustError("Invalid created_at timestamp".to_string()))?,
            updated_at: Utc.timestamp_opt(self.updated_at as i64, 0).single()
                .ok_or_else(|| Error::RustError("Invalid updated_at timestamp".to_string()))?,
        })
    }
}

pub struct ReviewRepository<'a> {
    db: &'a D1Database,
}

impl<'a> ReviewRepository<'a> {
    pub fn new(db: &'a D1Database) -> Self {
        Self { db }
    }

    pub async fn create(&self, review: &Review) -> Result<()> {
        let query = "
            INSERT INTO reviews (id, book_id, user_id, title, content, rating, created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)
        ";
        
        self.db
            .prepare(query)
            .bind(&[
                review.id.clone().into(),
                review.book_id.clone().into(),
                review.user_id.clone().into(),
                review.title.clone().into(),
                review.content.clone().into(),
                review.rating.map(|r| r.into()).unwrap_or(JsValue::NULL),
                (review.created_at.timestamp() as i32).into(),
                (review.updated_at.timestamp() as i32).into(),
            ])?
            .run()
            .await?;

        Ok(())
    }

    pub async fn find_by_id(&self, id: &str) -> Result<Option<Review>> {
        let query = "
            SELECT id, book_id, user_id, title, content, rating, 
                   created_at, updated_at
            FROM reviews
            WHERE id = ?1
        ";
        
        let result = self.db
            .prepare(query)
            .bind(&[id.into()])?
            .first::<ReviewRow>(None)
            .await?;

        match result {
            Some(row) => Ok(Some(row.to_review()?)),
            None => Ok(None),
        }
    }

    pub async fn list(&self, book_id: Option<&str>, limit: Option<u32>, offset: Option<u32>) -> Result<Vec<Review>> {
        let limit = limit.unwrap_or(20);
        let offset = offset.unwrap_or(0);
        
        let (query, params) = if let Some(book_id) = book_id {
            (
                "
                SELECT id, book_id, user_id, title, content, rating, 
                       created_at, updated_at
                FROM reviews
                WHERE book_id = ?1
                ORDER BY created_at DESC
                LIMIT ?2 OFFSET ?3
                ",
                vec![book_id.into(), (limit as i32).into(), (offset as i32).into()]
            )
        } else {
            (
                "
                SELECT id, book_id, user_id, title, content, rating, 
                       created_at, updated_at
                FROM reviews
                ORDER BY created_at DESC
                LIMIT ?1 OFFSET ?2
                ",
                vec![(limit as i32).into(), (offset as i32).into()]
            )
        };
        
        let results = self.db
            .prepare(query)
            .bind(&params)?
            .all()
            .await?;

        let review_rows: Vec<ReviewRow> = results.results()?;
        let mut reviews = Vec::new();
        for row in review_rows {
            reviews.push(row.to_review()?);
        }
        Ok(reviews)
    }

    pub async fn get_latest(&self, limit: Option<u32>) -> Result<Vec<Review>> {
        let limit = limit.unwrap_or(20);
        
        let query = "
            SELECT id, book_id, user_id, title, content, rating, 
                   created_at, updated_at
            FROM reviews
            ORDER BY created_at DESC
            LIMIT ?1
        ";
        
        let results = self.db
            .prepare(query)
            .bind(&[(limit as i32).into()])?
            .all()
            .await?;

        let review_rows: Vec<ReviewRow> = results.results()?;
        let mut reviews = Vec::new();
        for row in review_rows {
            reviews.push(row.to_review()?);
        }
        Ok(reviews)
    }

    pub async fn update(&self, review: &Review) -> Result<()> {
        let query = "
            UPDATE reviews 
            SET title = ?2, content = ?3, rating = ?4, updated_at = ?5
            WHERE id = ?1
        ";
        
        self.db
            .prepare(query)
            .bind(&[
                review.id.clone().into(),
                review.title.clone().into(),
                review.content.clone().into(),
                review.rating.map(|r| r.into()).unwrap_or(JsValue::NULL),
                (review.updated_at.timestamp() as i32).into(),
            ])?
            .run()
            .await?;

        Ok(())
    }

    pub async fn delete(&self, id: &str) -> Result<()> {
        let query = "DELETE FROM reviews WHERE id = ?1";
        
        self.db
            .prepare(query)
            .bind(&[id.into()])?
            .run()
            .await?;

        Ok(())
    }
}