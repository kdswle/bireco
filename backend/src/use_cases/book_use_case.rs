use worker::Result;
use crate::entities::{Book, BookResponse, SourceType, CreateBookRequest};
use crate::repositories::BookRepository;

pub struct BookUseCase<'a> {
    book_repo: BookRepository<'a>,
}

impl<'a> BookUseCase<'a> {
    pub fn new(book_repo: BookRepository<'a>) -> Self {
        Self { book_repo }
    }

    pub async fn create_book(&self, request: CreateBookRequest) -> Result<BookResponse> {
        // Check if book already exists by source
        if let Some(existing_book) = self.book_repo.find_by_source(&request.source_type, &request.source_id).await? {
            // Book already exists, return it with stats
            let review_count = self.book_repo.get_review_count(&existing_book.id).await?;
            let average_rating = self.book_repo.get_average_rating(&existing_book.id).await?;
            return Ok(existing_book.to_response(review_count, average_rating));
        }

        // Create new book
        let book = Book::new(
            request.title,
            request.authors,
            request.isbn,
            request.publication_year,
            request.publisher,
            request.description,
            request.cover_image_url,
            request.source_type,
            request.source_id,
        );

        self.book_repo.create(&book).await?;

        // Return book with initial stats (0 reviews)
        Ok(book.to_response(0, None))
    }

    pub async fn get_book_by_id(&self, id: &str) -> Result<Option<BookResponse>> {
        match self.book_repo.find_by_id(id).await? {
            Some(book) => {
                let review_count = self.book_repo.get_review_count(&book.id).await?;
                let average_rating = self.book_repo.get_average_rating(&book.id).await?;
                Ok(Some(book.to_response(review_count, average_rating)))
            },
            None => Ok(None),
        }
    }

    pub async fn find_or_create_book(&self, request: CreateBookRequest) -> Result<BookResponse> {
        self.create_book(request).await
    }

    pub async fn search_books_by_title(&self, title: &str, limit: Option<u32>) -> Result<Vec<BookResponse>> {
        let books = self.book_repo.search_by_title(title, limit).await?;
        let mut results = Vec::new();

        for book in books {
            let review_count = self.book_repo.get_review_count(&book.id).await?;
            let average_rating = self.book_repo.get_average_rating(&book.id).await?;
            results.push(book.to_response(review_count, average_rating));
        }

        Ok(results)
    }

    pub async fn search_books_by_author(&self, author: &str, limit: Option<u32>) -> Result<Vec<BookResponse>> {
        let books = self.book_repo.search_by_author(author, limit).await?;
        let mut results = Vec::new();

        for book in books {
            let review_count = self.book_repo.get_review_count(&book.id).await?;
            let average_rating = self.book_repo.get_average_rating(&book.id).await?;
            results.push(book.to_response(review_count, average_rating));
        }

        Ok(results)
    }
}