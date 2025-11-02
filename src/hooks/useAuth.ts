import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Hook simple para manejar autenticación con JWT token
 */
export function useAuth() {
  const router = useRouter();

  /**
   * Verifica si hay token en localStorage
   */
  const checkToken = (): boolean => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('authToken');
  };

  /**
   * Protege rutas: Si NO hay token, redirige a login
   * Llamar directamente en el componente
   */
  useEffect(() => {
    const hasToken = checkToken();
    const isLoginPage = window.location.pathname === '/login';
    const isDashboardPage = window.location.pathname === '/dashboard';

    // Si está en login Y tiene token → ir a dashboard
    if (isLoginPage && hasToken) {
      router.push('/dashboard');
    }

    // Si está en dashboard Y NO tiene token → ir a login
    if (isDashboardPage && !hasToken) {
      router.push('/login');
    }
  }, [router]);

  /**
   * Cierra sesión
   */
  const logout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return {
    isAuthenticated: checkToken(),
    logout,
  };
}
