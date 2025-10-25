'use client';

import { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation'; // TODO: Uncomment when implementing auth logic
import Home from '@/components/Home/Home';
// TODO: Import your auth services when implementing login/register
// import { login, register } from '@/services/auth';
// import { ApiError } from '@/services/api';

export default function Login() {
  // const router = useRouter(); // TODO: Uncomment when implementing auth logic
  const [isLogin, setIsLogin] = useState(true);
  // TODO: Uncomment these states when implementing auth logic
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Implement your authentication logic here
    console.log('Form submitted:', formData);
    console.log('Is Login Mode:', isLogin);

    /*
    // TODO: Replace this comment with your auth implementation
    setError(null);
    setIsLoading(true);

    try {
      if (isLogin) {
        // Login request
        const response = await login({
          email: formData.email,
          password: formData.password,
        });

        console.log('Login successful:', response);

        // Redirect to dashboard after successful login
        router.push('/dashboard');
      } else {
        // Register request
        const response = await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        console.log('Registration successful:', response);

        // Redirect to dashboard after successful registration
        router.push('/dashboard');
      }
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Authentication error:', err);
    } finally {
      setIsLoading(false);
    }
    */
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // TODO: Uncomment when implementing error handling
    // if (error) setError(null);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background-content)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="block text-center mb-8">
          <Home />
        </Link>

        {/* Form Card */}
        <div className="bg-black border rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
          {/* Toggle Buttons */}
          <div className="flex gap-2 mb-8 bg-gray-900 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* TODO: Uncomment Error Message when implementing auth */}
            {/* {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )} */}

            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Enter your password"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-400 cursor-pointer hover:text-gray-300">
                  <input
                    type="checkbox"
                    className="appearance-none mr-2 w-4 h-4 rounded bg-white  border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              // TODO: Add disabled={isLoading} when implementing auth
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              {/* TODO: Add loading state when implementing auth */}
              {isLogin ? 'Log In' : 'Sign Up'}

              {/* TODO: Uncomment loading spinner when implementing auth
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isLogin ? 'Logging In...' : 'Signing Up...'}
                </span>
              ) : (
                <>{isLogin ? 'Log In' : 'Sign Up'}</>
              )}
              */}
            </button>
          </form>

          {/* Social Login (Optional) */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-black text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-blue-500/30 rounded-lg text-gray-300 bg-gray-900 hover:bg-gray-800 hover:border-blue-500 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-blue-500/30 rounded-lg text-gray-300 bg-gray-900 hover:bg-gray-800 hover:border-blue-500 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </button>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
          >
            ← Back to Home
          </Link>
          <Link href="/dashboard" className="text-gray-400">
            {' '}
            dASHBOARD
          </Link>
        </div>
      </div>
    </div>
  );
}
