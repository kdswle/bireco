use worker::*;
use worker::d1::D1Database;
use wasm_bindgen::JsValue;
use serde::Deserialize;
use chrono::{DateTime, Utc, TimeZone};
use crate::entities::Draft;

#[derive(Debug, Deserialize)]
struct DraftRow {
    id: String,
    book_id: String,
    user_id: String,
    title: Option<String>,
    content: Option<String>,
    rating: Option<i32>,
    created_at: f64,
    updated_at: f64,
}

impl DraftRow {
    fn to_draft(self) -> Result<Draft> {
        Ok(Draft {
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

pub struct DraftRepository<'a> {
    db: &'a D1Database,
}

impl<'a> DraftRepository<'a> {
    pub fn new(db: &'a D1Database) -> Self {
        Self { db }
    }

    pub async fn create(&self, draft: &Draft) -> Result<()> {
        let query = "
            INSERT INTO drafts (id, book_id, user_id, title, content, rating, created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)
        ";
        
        self.db
            .prepare(query)
            .bind(&[
                draft.id.clone().into(),
                draft.book_id.clone().into(),
                draft.user_id.clone().into(),
                draft.title.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                draft.content.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                draft.rating.map(|r| r.into()).unwrap_or(JsValue::NULL),
                (draft.created_at.timestamp() as i32).into(),
                (draft.updated_at.timestamp() as i32).into(),
            ])?
            .run()
            .await?;

        Ok(())
    }

    pub async fn find_by_id(&self, id: &str) -> Result<Option<Draft>> {
        let query = "
            SELECT id, book_id, user_id, title, content, rating, created_at, updated_at
            FROM drafts WHERE id = ?1
        ";
        
        let result = self.db
            .prepare(query)
            .bind(&[id.into()])?
            .first::<DraftRow>(None)
            .await?;

        match result {
            Some(row) => Ok(Some(row.to_draft()?)),
            None => Ok(None),
        }
    }

    pub async fn find_by_user_and_book(&self, user_id: &str, book_id: &str) -> Result<Option<Draft>> {
        let query = "
            SELECT id, book_id, user_id, title, content, rating, created_at, updated_at
            FROM drafts WHERE user_id = ?1 AND book_id = ?2
            ORDER BY updated_at DESC
            LIMIT 1
        ";
        
        let result = self.db
            .prepare(query)
            .bind(&[user_id.into(), book_id.into()])?
            .first::<DraftRow>(None)
            .await?;

        match result {
            Some(row) => Ok(Some(row.to_draft()?)),
            None => Ok(None),
        }
    }

    pub async fn list_by_user(&self, user_id: &str, limit: Option<u32>, offset: Option<u32>) -> Result<Vec<Draft>> {
        let limit = limit.unwrap_or(20);
        let offset = offset.unwrap_or(0);
        
        let query = "
            SELECT id, book_id, user_id, title, content, rating, created_at, updated_at
            FROM drafts 
            WHERE user_id = ?1
            ORDER BY updated_at DESC
            LIMIT ?2 OFFSET ?3
        ";
        
        let results = self.db
            .prepare(query)
            .bind(&[user_id.into(), (limit as i32).into(), (offset as i32).into()])?
            .all()
            .await?;

        let draft_rows: Vec<DraftRow> = results.results()?;
        let mut drafts = Vec::new();
        for row in draft_rows {
            drafts.push(row.to_draft()?);
        }
        Ok(drafts)
    }

    pub async fn update(&self, draft: &Draft) -> Result<()> {
        let query = "
            UPDATE drafts 
            SET title = ?2, content = ?3, rating = ?4, updated_at = ?5
            WHERE id = ?1
        ";
        
        self.db
            .prepare(query)
            .bind(&[
                draft.id.clone().into(),
                draft.title.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                draft.content.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL),
                draft.rating.map(|r| r.into()).unwrap_or(JsValue::NULL),
                (draft.updated_at.timestamp() as i32).into(),
            ])?
            .run()
            .await?;

        Ok(())
    }

    pub async fn delete(&self, id: &str) -> Result<()> {
        let query = "DELETE FROM drafts WHERE id = ?1";
        
        self.db
            .prepare(query)
            .bind(&[id.into()])?
            .run()
            .await?;

        Ok(())
    }

    pub async fn delete_by_user_and_book(&self, user_id: &str, book_id: &str) -> Result<()> {
        let query = "DELETE FROM drafts WHERE user_id = ?1 AND book_id = ?2";
        
        self.db
            .prepare(query)
            .bind(&[user_id.into(), book_id.into()])?
            .run()
            .await?;

        Ok(())
    }
}