'use client';

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function Dashboard() {
  const { isLoggedIn, isLoading, logout, requireAuth } = useAuth();

  useEffect(() => {
    // Require authentication to access this page
    requireAuth();
  }, [isLoggedIn, isLoading, requireAuth]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--color-background-content)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render dashboard content if not authenticated
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--color-background-content)] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <button
            onClick={logout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example cards */}
          <div className="bg-black border border-blue-500/30 rounded-xl p-6 hover:border-blue-500 transition-all">
            <h2 className="text-xl font-bold mb-2">Welcome to RSync</h2>
            <p className="text-gray-400">
              You are now logged in and can access the dashboard.
            </p>
          </div>

          <div className="bg-black border border-blue-500/30 rounded-xl p-6 hover:border-blue-500 transition-all">
            <h2 className="text-xl font-bold mb-2">Your Music</h2>
            <p className="text-gray-400">
              Browse your music library and playlists.
            </p>
          </div>

          <div className="bg-black border border-blue-500/30 rounded-xl p-6 hover:border-blue-500 transition-all">
            <h2 className="text-xl font-bold mb-2">Discover</h2>
            <p className="text-gray-400">
              Find new music and artists you&apos;ll love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
