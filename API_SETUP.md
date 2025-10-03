# API Configuration

This document explains how to configure and use the API integration in RSync.

## Environment Setup

1. Create a `.env.local` file in the root directory (already created)
2. Set the API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

**Note:** Change the URL to your actual API endpoint.

## API Endpoints

The application expects the following endpoints:

### Authentication

#### POST `/auth/register`

Register a new user.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### POST `/auth/login`

Login an existing user.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## JWT Token Management

- JWT tokens are automatically stored in `localStorage` after successful login/registration
- Tokens are automatically included in the `Authorization` header for all API requests
- Format: `Authorization: Bearer <token>`

## Usage Examples

### Login Service

```typescript
import { login } from '@/services/auth';

try {
  const response = await login({
    email: 'user@example.com',
    password: 'password123',
  });

  // Token is automatically stored
  console.log('User:', response.user);

  // Redirect to dashboard
  router.push('/dashboard');
} catch (error) {
  console.error('Login failed:', error);
}
```

### Register Service

```typescript
import { register } from '@/services/auth';

try {
  const response = await register({
    name: 'John Doe',
    email: 'user@example.com',
    password: 'password123',
  });

  // Token is automatically stored
  console.log('User:', response.user);

  // Redirect to dashboard
  router.push('/dashboard');
} catch (error) {
  console.error('Registration failed:', error);
}
```

### Making Authenticated Requests

```typescript
import { apiClient } from '@/services/api';

// Token is automatically included
const userData = await apiClient.get('/user/profile');
```

### Check Authentication Status

```typescript
import { isAuthenticated, getToken } from '@/services/auth';

if (isAuthenticated()) {
  const token = getToken();
  // User is logged in
}
```

### Logout

```typescript
import { logout } from '@/services/auth';

logout(); // Removes token from localStorage
router.push('/login');
```

## Error Handling

The API client throws `ApiError` for failed requests:

```typescript
import { ApiError } from '@/services/api';

try {
  await login(credentials);
} catch (error) {
  if (error instanceof ApiError) {
    console.log('Status:', error.status);
    console.log('Message:', error.message);
    console.log('Data:', error.data);
  }
}
```

## Development Notes

- The API URL must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser
- `.env.local` is not committed to git (check `.gitignore`)
- Change the API URL in `.env.local` for different environments
- All API requests include proper error handling and TypeScript types
