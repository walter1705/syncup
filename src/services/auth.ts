import { apiClient } from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

/**
 * Login user with email and password
 * @param credentials - User login credentials
 * @returns Promise with authentication response containing JWT token
 */
export const login = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(
    '/auth/login',
    credentials
  );

  // Store JWT token in localStorage
  if (response.token) {
    localStorage.setItem('token', response.token);
  }

  return response;
};

/**
 * Register a new user
 * @param credentials - User registration credentials
 * @returns Promise with authentication response containing JWT token
 */
export const register = async (
  credentials: RegisterCredentials
): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(
    '/auth/register',
    credentials
  );

  // Store JWT token in localStorage
  if (response.token) {
    localStorage.setItem('token', response.token);
  }

  return response;
};

/**
 * Logout user by removing token from localStorage
 */
export const logout = (): void => {
  localStorage.removeItem('token');
};

/**
 * Get stored JWT token from localStorage
 * @returns JWT token or null if not found
 */
export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};

/**
 * Check if user is authenticated
 * @returns boolean indicating if user has a valid token
 */
export const isAuthenticated = (): boolean => {
  return !!getToken();
};
