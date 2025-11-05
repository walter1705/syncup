import { useState } from 'react';

// Get API URL from environment variable
const API_URL =
  process.env.NEXT_PUBLIC_RSYNC_API ||
  process.env.RSYNC_API ||
  'http://localhost:8080/api';

/**
 * Custom hook for making API requests
 * Simplificado para uso directo sin capas extras
 */
export function useApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Make a POST request to the API
   * @param endpoint - API endpoint (e.g., '/login', '/register')
   * @param data - Request body data
   * @returns Response data or throws error
   */
  const post = async <T>(endpoint: string, data: unknown): Promise<T> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Request failed');
      }

      return responseData as T;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clear error state
   */
  const clearError = () => setError(null);

  return {
    post,
    isLoading,
    error,
    clearError,
  };
}
