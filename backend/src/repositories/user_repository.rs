use worker::*;
use worker::d1::D1Database;
use wasm_bindgen::JsValue;
use crate::entities::User;

pub struct UserRepository<'a> {
    db: &'a D1Database,
}

impl<'a> UserRepository<'a> {
    pub fn new(db: &'a D1Database) -> Self {
        Self { db }
    }

    pub async fn create(&self, user: &User) -> Result<()> {
        let query = "
            INSERT INTO users (id, username, email, password_hash, avatar_url, created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)
        ";
        
        // Convert avatar_url Option to proper value for D1
        let avatar_value = user.avatar_url.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL);
        
        self.db
            .prepare(query)
            .bind(&[
                user.id.clone().into(),
                user.username.clone().into(),
                user.email.clone().into(),
                user.password_hash.clone().into(),
                avatar_value,
                user.created_at.to_rfc3339().into(),
                user.updated_at.to_rfc3339().into(),
            ])?
            .run()
            .await?;

        Ok(())
    }

    pub async fn find_by_id(&self, id: &str) -> Result<Option<User>> {
        let query = "
            SELECT id, username, email, password_hash, avatar_url, created_at, updated_at
            FROM users WHERE id = ?1
        ";
        
        let result = self.db
            .prepare(query)
            .bind(&[id.into()])?
            .first::<User>(None)
            .await?;

        Ok(result)
    }

    pub async fn find_by_username(&self, username: &str) -> Result<Option<User>> {
        let query = "
            SELECT id, username, email, password_hash, avatar_url, created_at, updated_at
            FROM users WHERE username = ?1
        ";
        
        let result = self.db
            .prepare(query)
            .bind(&[username.into()])?
            .first::<User>(None)
            .await?;

        Ok(result)
    }

    pub async fn find_by_email(&self, email: &str) -> Result<Option<User>> {
        let query = "
            SELECT id, username, email, password_hash, avatar_url, created_at, updated_at
            FROM users WHERE email = ?1
        ";
        
        let result = self.db
            .prepare(query)
            .bind(&[email.into()])?
            .first::<User>(None)
            .await?;

        Ok(result)
    }

    pub async fn update(&self, user: &User) -> Result<()> {
        let query = "
            UPDATE users 
            SET username = ?2, email = ?3, password_hash = ?4, 
                avatar_url = ?5, updated_at = ?6
            WHERE id = ?1
        ";
        
        // Convert avatar_url Option to proper value for D1
        let avatar_value = user.avatar_url.as_ref().map(|s| s.as_str().into()).unwrap_or(JsValue::NULL);
        
        self.db
            .prepare(query)
            .bind(&[
                user.id.clone().into(),
                user.username.clone().into(),
                user.email.clone().into(),
                user.password_hash.clone().into(),
                avatar_value,
                user.updated_at.to_rfc3339().into(),
            ])?
            .run()
            .await?;

        Ok(())
    }

    pub async fn delete(&self, id: &str) -> Result<()> {
        let query = "DELETE FROM users WHERE id = ?1";
        
        self.db
            .prepare(query)
            .bind(&[id.into()])?
            .run()
            .await?;

        Ok(())
    }
}