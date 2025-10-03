import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, logout as authLogout } from '@/services/auth';

/**
 * Custom hook to handle authentication state
 * @returns Authentication state and functions
 */
export function useAuth() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication on mount
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      setIsLoggedIn(authenticated);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  /**
   * Logout user and redirect to login page
   */
  const logout = () => {
    authLogout();
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
