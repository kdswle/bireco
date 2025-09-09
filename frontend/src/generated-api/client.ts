// Generated API Client based on OpenAPI specification
import createClient from 'openapi-fetch';
import type { paths } from './schema';

// Create the base API client
const client = createClient<paths>({ baseUrl: 'http://localhost:8787' });

export { client };

// Type-safe API wrapper functions
export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = 'http://localhost:8787') {
    this.baseUrl = baseUrl;
  }

  // Auth endpoints
  auth = {
    register: async (data: RegisterRequest): Promise<AuthResponse> => {
      const response = await fetch(`${this.baseUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Registration failed: ${response.statusText}`);
      }
      return response.json();
    },

    login: async (data: LoginRequest): Promise<AuthResponse> => {
      const response = await fetch(`${this.baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }
      return response.json();
    },

    me: async (token: string): Promise<User> => {
      const response = await fetch(`${this.baseUrl}/api/auth/me`, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Get user failed: ${response.statusText}`);
      }
      return response.json();
    },
  };

  // Books endpoints  
  books = {
    search: async (query: string, limit?: number): Promise<BookSearchResult[]> => {
      const params = new URLSearchParams({ q: query }); // Fix query parameter name
      if (limit) params.append('limit', limit.toString());
      
      const response = await fetch(`${this.baseUrl}/api/books/search?${params}`);
      if (!response.ok) {
        throw new Error(`Book search failed: ${response.statusText}`);
      }
      const result = await response.json();
      // Handle API response format {data: BookSearchResult[], meta: {status: 200}}
      if (result.meta?.status === 200) {
        return result.data || [];
      } else {
        throw new Error(result.meta?.error?.message || 'API Error');
      }
    },

    getById: async (id: string, token?: string): Promise<Book> => {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${this.baseUrl}/api/books/${id}`, { headers });
      if (!response.ok) {
        throw new Error(`Get book failed: ${response.statusText}`);
      }
      const result = await response.json();
      // Handle API response format {data: Book, meta: {status: 200}}
      if (result.meta?.status === 200) {
        return result.data;
      } else {
        throw new Error(result.meta?.error?.message || 'API Error');
      }
    },

    create: async (data: CreateBookRequest, token: string): Promise<Book> => {
      const response = await fetch(`${this.baseUrl}/api/books`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Create book failed: ${response.statusText}`);
      }
      const result = await response.json();
      // Handle API response format {data: Book, meta: {status: 200}}
      if (result.meta?.status === 200) {
        return result.data;
      } else {
        throw new Error(result.meta?.error?.message || 'API Error');
      }
    },
  };

  // Reviews endpoints
  reviews = {
    list: async (params?: { bookId?: string; limit?: number; offset?: number }, token?: string): Promise<PaginatedResponse<Review>> => {
      const searchParams = new URLSearchParams();
      if (params?.bookId) searchParams.append('book_id', params.bookId);
      if (params?.limit) searchParams.append('limit', params.limit.toString());
      if (params?.offset) searchParams.append('offset', params.offset.toString());

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${this.baseUrl}/api/reviews?${searchParams}`, { headers });
      if (!response.ok) {
        throw new Error(`Get reviews failed: ${response.statusText}`);
      }
      return response.json();
    },

    getById: async (id: string, token?: string): Promise<Review> => {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${this.baseUrl}/api/reviews/${id}`, { headers });
      if (!response.ok) {
        throw new Error(`Get review failed: ${response.statusText}`);
      }
      return response.json();
    },

    latest: async (limit?: number): Promise<Review[]> => {
      const params = new URLSearchParams();
      if (limit) params.append('limit', limit.toString());

      const response = await fetch(`${this.baseUrl}/api/reviews/latest?${params}`);
      if (!response.ok) {
        throw new Error(`Get latest reviews failed: ${response.statusText}`);
      }
      return response.json();
    },

    create: async (data: CreateReviewRequest, token: string): Promise<Review> => {
      const response = await fetch(`${this.baseUrl}/api/reviews`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Create review failed: ${response.statusText}`);
      }
      return response.json();
    },

    update: async (id: string, data: UpdateReviewRequest, token: string): Promise<Review> => {
      const response = await fetch(`${this.baseUrl}/api/reviews/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Update review failed: ${response.statusText}`);
      }
      return response.json();
    },

    delete: async (id: string, token: string): Promise<void> => {
      const response = await fetch(`${this.baseUrl}/api/reviews/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Delete review failed: ${response.statusText}`);
      }
    },
  };
}

// Default client instance
export const apiClient = new ApiClient();

// Type definitions for better IDE support
export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar_url?: string;
  created_at: string;
}

export interface Book {
  id: string;
  title: string;
  authors?: string;
  isbn?: string;
  publication_year?: number;
  publisher?: string;
  description?: string;
  cover_image_url?: string;
  source_type: string;
  source_id: string;
  review_count: number;
  average_rating?: number;
  created_at: string;
}

export interface BookSearchResult {
  source_id: string;
  title: string;
  authors?: string;
  isbn?: string;
  publication_year?: number;
  publisher?: string;
  description?: string;
  cover_image_url?: string;
}

export interface CreateBookRequest {
  title: string;
  authors?: string;
  isbn?: string;
  publication_year?: number;
  publisher?: string;
  description?: string;
  cover_image_url?: string;
  source_type: string;
  source_id: string;
}

export interface Review {
  id: string;
  book_id: string;
  book_title: string;
  user: User;
  title: string;
  content: string;
  rating?: number;
  created_at: string;
  updated_at: string;
}

export interface CreateReviewRequest {
  book_id: string;
  title: string;
  content: string;
  rating?: number;
}

export interface UpdateReviewRequest {
  title?: string;
  content?: string;
  rating?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
  };
  success?: boolean;
}