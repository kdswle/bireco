// Example usage of the new generated API client
import { reviewsApi, authApi, booksApi } from './api-client';

// Example: Login and get user profile
export async function loginUser(email: string, password: string) {
  try {
    const authResponse = await authApi.login({ email, password });
    localStorage.setItem('auth_token', authResponse.token);
    return authResponse.user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}

// Example: Get user's reviews
export async function getUserReviews(limit = 50, offset = 0) {
  try {
    const response = await reviewsApi.list(undefined, limit, offset);
    
    // Handle both old and new response formats
    if ('data' in response && Array.isArray(response.data)) {
      return response.data;
    }
    
    // Fallback for direct array response
    return Array.isArray(response) ? response : [];
  } catch (error) {
    console.error('Failed to get user reviews:', error);
    return [];
  }
}

// Example: Create a new review
export async function createReview(bookId: string, title: string, content: string, rating?: number) {
  try {
    const review = await reviewsApi.create({
      book_id: bookId,
      title,
      content,
      rating,
    });
    return review;
  } catch (error) {
    console.error('Failed to create review:', error);
    throw error;
  }
}

// Example: Search for books
export async function searchBooks(query: string, limit = 20) {
  try {
    const results = await booksApi.search(query, limit);
    return results;
  } catch (error) {
    console.error('Book search failed:', error);
    return [];
  }
}

// Example: Create a book from search result
export async function createBookFromSearchResult(searchResult: any) {
  try {
    const book = await booksApi.create({
      title: searchResult.title,
      authors: searchResult.authors,
      isbn: searchResult.isbn,
      publication_year: searchResult.publication_year,
      publisher: searchResult.publisher,
      description: searchResult.description,
      cover_image_url: searchResult.cover_image_url,
      source_type: 'ndl',
      source_id: searchResult.source_id,
    });
    return book;
  } catch (error) {
    console.error('Failed to create book:', error);
    throw error;
  }
}