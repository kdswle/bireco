// New API client using generated types and classes
import { ApiClient } from '../generated-api/client';

// Get base URL from environment
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8787';

// Create configured client instance
export const client = new ApiClient(API_BASE_URL);

// Helper to get auth token
const getAuthToken = (): string | null => {
  return localStorage.getItem('auth_token');
};

// Type-safe API wrapper with authentication
export const authApi = {
  register: client.auth.register,
  login: client.auth.login,
  
  me: async () => {
    const token = getAuthToken();
    if (!token) throw new Error('No auth token');
    return client.auth.me(token);
  },
};

export const booksApi = {
  search: client.books.search,
  
  getById: async (id: string) => {
    const token = getAuthToken();
    return client.books.getById(id, token || undefined);
  },
  
  create: async (data: any) => {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication required');
    return client.books.create(data, token);
  },
};

export const reviewsApi = {
  list: async (bookId?: string, limit?: number, offset?: number) => {
    const token = getAuthToken();
    return client.reviews.list({ bookId, limit, offset }, token || undefined);
  },
  
  getById: async (id: string) => {
    const token = getAuthToken();
    return client.reviews.getById(id, token || undefined);
  },
  
  latest: client.reviews.latest,
  
  create: async (data: any) => {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication required');
    return client.reviews.create(data, token);
  },
  
  update: async (id: string, data: any) => {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication required');
    return client.reviews.update(id, data, token);
  },
  
  delete: async (id: string) => {
    const token = getAuthToken();
    if (!token) throw new Error('Authentication required');
    return client.reviews.delete(id, token);
  },
};

// Export everything from generated client for direct usage
export * from '../generated-api/client';