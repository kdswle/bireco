use worker::{Result, Error};
use crate::entities::{Review, ReviewResponse, CreateReviewRequest, UpdateReviewRequest, User};
use crate::repositories::{ReviewRepository, BookRepository, UserRepository};

pub struct ReviewUseCase<'a> {
    review_repo: ReviewRepository<'a>,
    book_repo: BookRepository<'a>,
    user_repo: UserRepository<'a>,
}

impl<'a> ReviewUseCase<'a> {
    pub fn new(
        review_repo: ReviewRepository<'a>,
        book_repo: BookRepository<'a>,
        user_repo: UserRepository<'a>,
    ) -> Self {
        Self {
            review_repo,
            book_repo,
            user_repo,
        }
    }

    pub async fn create_review(&self, request: CreateReviewRequest, user_id: &str) -> Result<ReviewResponse> {
        // Validation
        Review::validate_title(&request.title)
            .map_err(|e| Error::RustError(e))?;
        Review::validate_content(&request.content)
            .map_err(|e| Error::RustError(e))?;
        Review::validate_rating(request.rating)
            .map_err(|e| Error::RustError(e))?;

        // Check if book exists
        let book = self.book_repo.find_by_id(&request.book_id).await?
            .ok_or_else(|| Error::RustError("指定された本が見つかりません".to_string()))?;

        // Check if user exists
        let user = self.user_repo.find_by_id(user_id).await?
            .ok_or_else(|| Error::RustError("ユーザーが見つかりません".to_string()))?;

        // Create review
        let review = Review::new(
            request.book_id,
            user_id.to_string(),
            request.title,
            request.content,
            request.rating,
        );

        self.review_repo.create(&review).await?;

        // Return review response
        Ok(ReviewResponse {
            id: review.id,
            book_id: review.book_id,
            book_title: book.title,
            user: user.to_response(),
            title: review.title,
            content: review.content,
            rating: review.rating,
            created_at: review.created_at,
            updated_at: review.updated_at,
        })
    }

    pub async fn get_review_by_id(&self, id: &str) -> Result<Option<ReviewResponse>> {
        // Note: This would need a more complex query to get book title and user info
        // For now, we'll use separate queries
        match self.review_repo.find_by_id(id).await? {
            Some(review) => {
                let book = self.book_repo.find_by_id(&review.book_id).await?
                    .ok_or_else(|| Error::RustError("関連する本が見つかりません".to_string()))?;
                
                let user = self.user_repo.find_by_id(&review.user_id).await?
                    .ok_or_else(|| Error::RustError("レビューの作成者が見つかりません".to_string()))?;

                Ok(Some(ReviewResponse {
                    id: review.id,
                    book_id: review.book_id,
                    book_title: book.title,
                    user: user.to_response(),
                    title: review.title,
                    content: review.content,
                    rating: review.rating,
                    created_at: review.created_at,
                    updated_at: review.updated_at,
                }))
            },
            None => Ok(None),
        }
    }

    pub async fn list_reviews(&self, book_id: Option<&str>, limit: Option<u32>, offset: Option<u32>) -> Result<Vec<ReviewResponse>> {
        let reviews = self.review_repo.list(book_id, limit, offset).await?;
        let mut results = Vec::new();

        for review in reviews {
            let book = self.book_repo.find_by_id(&review.book_id).await?
                .ok_or_else(|| Error::RustError("関連する本が見つかりません".to_string()))?;
            
            let user = self.user_repo.find_by_id(&review.user_id).await?
                .ok_or_else(|| Error::RustError("レビューの作成者が見つかりません".to_string()))?;

            results.push(ReviewResponse {
                id: review.id,
                book_id: review.book_id,
                book_title: book.title,
                user: user.to_response(),
                title: review.title,
                content: review.content,
                rating: review.rating,
                created_at: review.created_at,
                updated_at: review.updated_at,
            });
        }

        Ok(results)
    }

    pub async fn get_latest_reviews(&self, limit: Option<u32>) -> Result<Vec<ReviewResponse>> {
        let reviews = self.review_repo.get_latest(limit).await?;
        let mut results = Vec::new();

        for review in reviews {
            let book = self.book_repo.find_by_id(&review.book_id).await?
                .ok_or_else(|| Error::RustError("関連する本が見つかりません".to_string()))?;
            
            let user = self.user_repo.find_by_id(&review.user_id).await?
                .ok_or_else(|| Error::RustError("レビューの作成者が見つかりません".to_string()))?;

            results.push(ReviewResponse {
                id: review.id,
                book_id: review.book_id,
                book_title: book.title,
                user: user.to_response(),
                title: review.title,
                content: review.content,
                rating: review.rating,
                created_at: review.created_at,
                updated_at: review.updated_at,
            });
        }

        Ok(results)
    }

    pub async fn update_review(&self, id: &str, request: UpdateReviewRequest, user_id: &str) -> Result<ReviewResponse> {
        // Get existing review
        let mut review = self.review_repo.find_by_id(id).await?
            .ok_or_else(|| Error::RustError("レビューが見つかりません".to_string()))?;

        // Check ownership
        if review.user_id != user_id {
            return Err(Error::RustError("このレビューを編集する権限がありません".to_string()));
        }

        // Validate updates
        if let Some(ref title) = request.title {
            Review::validate_title(title)
                .map_err(|e| Error::RustError(e))?;
        }
        if let Some(ref content) = request.content {
            Review::validate_content(content)
                .map_err(|e| Error::RustError(e))?;
        }
        Review::validate_rating(request.rating)
            .map_err(|e| Error::RustError(e))?;

        // Update review
        review.update(request.title, request.content, request.rating);
        self.review_repo.update(&review).await?;

        // Get book and user info
        let book = self.book_repo.find_by_id(&review.book_id).await?
            .ok_or_else(|| Error::RustError("関連する本が見つかりません".to_string()))?;
        
        let user = self.user_repo.find_by_id(&review.user_id).await?
            .ok_or_else(|| Error::RustError("レビューの作成者が見つかりません".to_string()))?;

        Ok(ReviewResponse {
            id: review.id,
            book_id: review.book_id,
            book_title: book.title,
            user: user.to_response(),
            title: review.title,
            content: review.content,
            rating: review.rating,
            created_at: review.created_at,
            updated_at: review.updated_at,
        })
    }

    pub async fn delete_review(&self, id: &str, user_id: &str) -> Result<()> {
        // Get existing review
        let review = self.review_repo.find_by_id(id).await?
            .ok_or_else(|| Error::RustError("レビューが見つかりません".to_string()))?;

        // Check ownership
        if review.user_id != user_id {
            return Err(Error::RustError("このレビューを削除する権限がありません".to_string()));
        }

        self.review_repo.delete(id).await?;
        Ok(())
    }
}