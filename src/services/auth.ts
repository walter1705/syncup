// TODO: Uncomment and configure for your external auth API

// TODO: Configure your external auth API base URL in .env.local
// NEXT_PUBLIC_AUTH_API_URL=https://your-external-auth-api.com

// TODO: Uncomment and implement with your external auth API
// import { apiClient } from './api';

// TODO: Define your auth interfaces when implementing
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

/* TODO: Implement these functions with your external auth API

/**
 * Login user with email and password
 * Endpoints: /api/login
 * @param credentials - User login credentials
 * @returns Promise with authentication response containing JWT token
 */
/*
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // TODO: Use your external auth API URL from environment variables
  const AUTH_API_URL = process.env.NEXT_PUBLIC_AUTH_API_URL;
  
  const response = await fetch(`${AUTH_API_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  
  // Store JWT token in localStorage
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  
  return data;
};
*/

/* TODO: Implement register function with your external auth API

/**
 * Register a new user
 * Endpoints: /api/register
 * @param credentials - User registration credentials
 * @returns Promise with authentication response containing JWT token
 */
/*
export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  // TODO: Use your external auth API URL from environment variables
  const AUTH_API_URL = process.env.NEXT_PUBLIC_AUTH_API_URL;
  
  const response = await fetch(`${AUTH_API_URL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  const data = await response.json();
  
  // Store JWT token in localStorage
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  
  return data;
};
*/

// Utility functions (keep these, they're needed for token management)

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
