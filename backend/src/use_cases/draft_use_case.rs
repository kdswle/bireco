use worker::{Result, Error};
use crate::entities::{Draft, DraftResponse, SaveDraftRequest, User};
use crate::repositories::{DraftRepository, BookRepository, UserRepository};

pub struct DraftUseCase<'a> {
    draft_repo: DraftRepository<'a>,
    book_repo: BookRepository<'a>,
    user_repo: UserRepository<'a>,
}

impl<'a> DraftUseCase<'a> {
    pub fn new(
        draft_repo: DraftRepository<'a>,
        book_repo: BookRepository<'a>,
        user_repo: UserRepository<'a>,
    ) -> Self {
        Self {
            draft_repo,
            book_repo,
            user_repo,
        }
    }

    pub async fn save_draft(&self, request: SaveDraftRequest, user_id: &str) -> Result<DraftResponse> {
        // Check if book exists
        let book = self.book_repo.find_by_id(&request.book_id).await?
            .ok_or_else(|| Error::RustError("指定された本が見つかりません".to_string()))?;

        // Check if user exists
        let user = self.user_repo.find_by_id(user_id).await?
            .ok_or_else(|| Error::RustError("ユーザーが見つかりません".to_string()))?;

        // Check if a draft already exists for this user and book
        match self.draft_repo.find_by_user_and_book(user_id, &request.book_id).await? {
            Some(mut existing_draft) => {
                // Update existing draft
                existing_draft.update(request.title, request.content, request.rating);
                self.draft_repo.update(&existing_draft).await?;
                Ok(existing_draft.to_response())
            },
            None => {
                // Create new draft
                let draft = Draft::new(
                    request.book_id,
                    user_id.to_string(),
                    request.title,
                    request.content,
                    request.rating,
                );

                self.draft_repo.create(&draft).await?;
                Ok(draft.to_response())
            }
        }
    }

    pub async fn get_draft_by_book(&self, user_id: &str, book_id: &str) -> Result<Option<DraftResponse>> {
        match self.draft_repo.find_by_user_and_book(user_id, book_id).await? {
            Some(draft) => Ok(Some(draft.to_response())),
            None => Ok(None),
        }
    }

    pub async fn get_draft_by_id(&self, id: &str, user_id: &str) -> Result<Option<DraftResponse>> {
        match self.draft_repo.find_by_id(id).await? {
            Some(draft) => {
                // Check ownership
                if draft.user_id != user_id {
                    return Err(Error::RustError("このドラフトにアクセスする権限がありません".to_string()));
                }
                Ok(Some(draft.to_response()))
            },
            None => Ok(None),
        }
    }

    pub async fn list_user_drafts(&self, user_id: &str, limit: Option<u32>, offset: Option<u32>) -> Result<Vec<DraftResponse>> {
        let drafts = self.draft_repo.list_by_user(user_id, limit, offset).await?;
        let results: Vec<DraftResponse> = drafts.into_iter()
            .map(|draft| draft.to_response())
            .collect();
        Ok(results)
    }

    pub async fn update_draft(&self, id: &str, request: SaveDraftRequest, user_id: &str) -> Result<DraftResponse> {
        // Get existing draft
        let mut draft = self.draft_repo.find_by_id(id).await?
            .ok_or_else(|| Error::RustError("ドラフトが見つかりません".to_string()))?;

        // Check ownership
        if draft.user_id != user_id {
            return Err(Error::RustError("このドラフトを編集する権限がありません".to_string()));
        }

        // Check if book still exists
        self.book_repo.find_by_id(&request.book_id).await?
            .ok_or_else(|| Error::RustError("指定された本が見つかりません".to_string()))?;

        // Update draft
        draft.update(request.title, request.content, request.rating);
        self.draft_repo.update(&draft).await?;

        Ok(draft.to_response())
    }

    pub async fn delete_draft(&self, id: &str, user_id: &str) -> Result<()> {
        // Get existing draft
        let draft = self.draft_repo.find_by_id(id).await?
            .ok_or_else(|| Error::RustError("ドラフトが見つかりません".to_string()))?;

        // Check ownership
        if draft.user_id != user_id {
            return Err(Error::RustError("このドラフトを削除する権限がありません".to_string()));
        }

        self.draft_repo.delete(id).await?;
        Ok(())
    }

    pub async fn delete_draft_by_book(&self, user_id: &str, book_id: &str) -> Result<()> {
        // Check if book exists
        self.book_repo.find_by_id(book_id).await?
            .ok_or_else(|| Error::RustError("指定された本が見つかりません".to_string()))?;

        self.draft_repo.delete_by_user_and_book(user_id, book_id).await?;
        Ok(())
    }
}