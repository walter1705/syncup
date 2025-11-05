// TODO: Configure for external API usage
// This API client can be used for other endpoints (not auth)

// TODO: Configure your main API URL in .env.local
// NEXT_PUBLIC_API_URL=https://your-main-api.com/api

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * API Client for making HTTP requests (non-auth endpoints)
 * For auth endpoints, use the external auth API directly in auth.ts
 */
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  /**
   * Get authorization headers with JWT token
   */
  private getAuthHeaders(): HeadersInit {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  /**
   * Handle API response
   */
  private async handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');

    const data = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      throw new ApiError(
        response.status,
        data?.message || data || 'An error occurred',
        data
      );
    }

    return data as T;
  }

  /**
   * Make GET request
   */
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'GET',
      headers: this.getAuthHeaders(),
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Make POST request
   */
  async post<T>(endpoint: string, body?: unknown): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(body),
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Make PUT request
   */
  async put<T>(endpoint: string, body?: unknown): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(body),
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Make PATCH request
   */
  async patch<T>(endpoint: string, body?: unknown): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'PATCH',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(body),
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Make DELETE request
   */
  async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders(),
    });

    return this.handleResponse<T>(response);
  }
}

export const apiClient = new ApiClient(API_URL);
