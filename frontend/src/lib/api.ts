import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  BookSearchResult,
  Book,
  Review,
  CreateReviewRequest,
  UpdateReviewRequest,
  Draft,
  SaveDraftRequest,
  PaginatedResponse,
  User,
} from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8787';

// Custom fetch wrapper with error handling
async function fetchWithAuth(
  url: string, 
  options: RequestInit = {}
): Promise<Response> {
  const token = localStorage.getItem('auth_token');
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(`${API_BASE_URL}${url}`, config);
  
  if (response.status === 401) {
    localStorage.removeItem('auth_token');
    window.location.href = '/login';
    throw new Error('Unauthorized');
  }
  
  return response;
}

// Helper to handle API response
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(errorData.error?.message || errorData.message || 'API Error');
  }
  
  const data = await response.json();
  return data.success ? data.data : data;
}

// Auth API
export const authApi = {
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await fetchWithAuth('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return handleResponse<AuthResponse>(response);
  },
  
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await fetchWithAuth('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return handleResponse<AuthResponse>(response);
  },
  
  me: async (): Promise<User> => {
    const response = await fetchWithAuth('/api/auth/me');
    return handleResponse<User>(response);
  },
  
  refresh: async (): Promise<{ token: string }> => {
    const response = await fetchWithAuth('/api/auth/refresh', {
      method: 'POST',
    });
    return handleResponse<{ token: string }>(response);
  },
};

// Books API
export const booksApi = {
  search: async (query: string, limit?: number): Promise<BookSearchResult[]> => {
    const params = new URLSearchParams();
    params.append('q', query);
    if (limit) params.append('limit', limit.toString());
    
    const response = await fetchWithAuth(`/api/books/search?${params}`);
    return handleResponse<BookSearchResult[]>(response);
  },
  
  getById: async (id: string): Promise<Book> => {
    console.log('booksApi.getById: Calling API for id:', id);
    const response = await fetchWithAuth(`/api/books/${id}`);
    console.log('booksApi.getById: Response received:', response);
    const result = await handleResponse<Book>(response);
    console.log('booksApi.getById: Processed result:', result);
    return result;
  },
  
  create: async (data: BookSearchResult & { source_type: 'ndl' | 'amazon' | 'manual' }): Promise<Book> => {
    const response = await fetchWithAuth('/api/books', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return handleResponse<Book>(response);
  },
};

// Reviews API  
export const reviewsApi = {
  list: async (bookId?: string, limit?: number, offset?: number): Promise<PaginatedResponse<Review>> => {
    const params = new URLSearchParams();
    if (bookId) params.append('book_id', bookId);
    if (limit) params.append('limit', limit.toString());
    if (offset) params.append('offset', offset.toString());
    
    const response = await fetchWithAuth(`/api/reviews?${params}`);
    return handleResponse<PaginatedResponse<Review>>(response);
  },
  
  latest: async (limit?: number): Promise<Review[]> => {
    const params = new URLSearchParams();
    if (limit) params.append('limit', limit.toString());
    
    const response = await fetchWithAuth(`/api/reviews/latest?${params}`);
    return handleResponse<Review[]>(response);
  },
  
  getById: async (id: string): Promise<Review> => {
    const response = await fetchWithAuth(`/api/reviews/${id}`);
    return handleResponse<Review>(response);
  },
  
  create: async (data: CreateReviewRequest): Promise<Review> => {
    const response = await fetchWithAuth('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return handleResponse<Review>(response);
  },
  
  update: async (id: string, data: UpdateReviewRequest): Promise<Review> => {
    const response = await fetchWithAuth(`/api/reviews/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return handleResponse<Review>(response);
  },
  
  delete: async (id: string): Promise<void> => {
    await fetchWithAuth(`/api/reviews/${id}`, {
      method: 'DELETE',
    });
  },
};

// Drafts API
export const draftsApi = {
  save: async (data: SaveDraftRequest): Promise<Draft> => {
    const response = await fetchWithAuth('/api/drafts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return handleResponse<Draft>(response);
  },
  
  list: async (limit?: number, offset?: number): Promise<Draft[]> => {
    const params = new URLSearchParams();
    if (limit) params.append('limit', limit.toString());
    if (offset) params.append('offset', offset.toString());
    
    const response = await fetchWithAuth(`/api/drafts?${params}`);
    return handleResponse<Draft[]>(response);
  },
  
  getByBook: async (bookId: string): Promise<Draft | null> => {
    try {
      const response = await fetchWithAuth(`/api/drafts/book/${bookId}`);
      return handleResponse<Draft | null>(response);
    } catch (error) {
      // 404の場合はnullを返す
      if (error instanceof Error && error.message.includes('404')) {
        return null;
      }
      throw error;
    }
  },
  
  update: async (id: string, data: SaveDraftRequest): Promise<Draft> => {
    const response = await fetchWithAuth(`/api/drafts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return handleResponse<Draft>(response);
  },
  
  delete: async (id: string): Promise<void> => {
    await fetchWithAuth(`/api/drafts/${id}`, {
      method: 'DELETE',
    });
  },
};

// Export the api functions to maintain backward compatibility
export const api = {
  get: (url: string) => fetchWithAuth(url).then(handleResponse),
  post: (url: string, data?: any) => fetchWithAuth(url, { method: 'POST', body: data ? JSON.stringify(data) : undefined }).then(handleResponse),
  put: (url: string, data?: any) => fetchWithAuth(url, { method: 'PUT', body: data ? JSON.stringify(data) : undefined }).then(handleResponse),
  delete: (url: string) => fetchWithAuth(url, { method: 'DELETE' }),
};
