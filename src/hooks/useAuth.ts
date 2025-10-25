import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, logout as authLogout } from '@/services/auth';

/**
 * Custom hook to handle authentication state
 * TODO: This hook is ready to use when you implement the auth functions
 * @returns Authentication state and functions
 */
export function useAuth() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication on mount
    const checkAuth = () => {
      // TODO: This will work when isAuthenticated is implemented
      const authenticated = isAuthenticated();
      setIsLoggedIn(authenticated);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  /**
   * Logout user and redirect to login page
   * TODO: This will work when logout function is implemented
   */
  const logout = () => {
    authLogout(); // This function is available (just clears localStorage)
    setIsLoggedIn(false);
    router.push('/login');
  };

  /**
   * Require authentication, redirect to login if not authenticated
   */
  const requireAuth = () => {
    if (!isLoading && !isLoggedIn) {
      router.push('/login');
    }
  };

  return {
    isLoggedIn,
    isLoading,
    logout,
    requireAuth,
  };
}
