// API Response types - New unified structure
export interface ApiResponse<T> {
  data: T;
  meta: ResponseMeta;
}

export interface ResponseMeta {
  success: boolean;
  timestamp: string;
  request_id?: string;
  pagination?: PaginationMeta;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

export interface PaginationMeta {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  has_next: boolean;
  has_prev: boolean;
}

// Legacy pagination format for backwards compatibility
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
  };
  success?: boolean;
}

// User types
export interface User {
  id: string;
  username: string;
  email: string;
  avatar_url?: string;
  created_at: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

// Book types
export interface Book {
  id: string;
  title: string;
  authors?: string;
  isbn?: string;
  publication_year?: number;
  publisher?: string;
  description?: string;
  cover_image_url?: string;
  source_type: 'ndl' | 'amazon' | 'manual';
  source_id: string;
  created_at: string;
  review_count: number;
  average_rating?: number;
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

// Review types
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

// Draft types
export interface Draft {
  id: string;
  book_id: string;
  title?: string;
  content?: string;
  rating?: number;
  created_at: string;
  updated_at: string;
}

export interface SaveDraftRequest {
  book_id: string;
  title?: string;
  content?: string;
  rating?: number;
}