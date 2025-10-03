# RSync - Usage Examples

This document provides practical examples for common use cases in the RSync application.

## Authentication Examples

### Example 1: Protected Page Component

```tsx
'use client';

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function ProtectedPage() {
  const { isLoggedIn, isLoading, requireAuth } = useAuth();

  useEffect(() => {
    requireAuth(); // Redirect if not authenticated
  }, [isLoggedIn, isLoading, requireAuth]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return null; // Will redirect
  }

  return <div>Protected Content</div>;
}
```

### Example 2: Making API Requests with Authentication

```tsx
'use client';

import { useEffect, useState } from 'react';
import { apiClient } from '@/services/api';
import { useAuth } from '@/hooks/useAuth';

interface Song {
  id: string;
  title: string;
  artist: string;
}

export default function MusicLibrary() {
  const { isLoggedIn } = useAuth();
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchSongs = async () => {
      try {
        const data = await apiClient.get<Song[]>('/songs');
        setSongs(data);
      } catch (error) {
        console.error('Failed to fetch songs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, [isLoggedIn]);

  if (loading) return <div>Loading songs...</div>;

  return (
    <div>
      {songs.map((song) => (
        <div key={song.id}>
          {song.title} - {song.artist}
        </div>
      ))}
    </div>
  );
}
```

### Example 3: Header with Conditional Auth Buttons

```tsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/Button/Button';

export default function Header() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header>
      <Link href="/">RSync</Link>

      {isLoggedIn ? (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Button href="/login" variant="secondary">
            Log In
          </Button>
          <Button href="/login" variant="primary">
            Sign Up
          </Button>
        </>
      )}
    </header>
  );
}
```

### Example 4: Create a New Resource

```tsx
import { apiClient } from '@/services/api';

async function createPlaylist(name: string, description: string) {
  try {
    const newPlaylist = await apiClient.post('/playlists', {
      name,
      description,
    });

    console.log('Playlist created:', newPlaylist);
    return newPlaylist;
  } catch (error) {
    console.error('Failed to create playlist:', error);
    throw error;
  }
}
```

### Example 5: Update User Profile

```tsx
import { apiClient } from '@/services/api';

async function updateProfile(
  userId: string,
  data: { name?: string; email?: string }
) {
  try {
    const updatedUser = await apiClient.patch(`/users/${userId}`, data);
    console.log('Profile updated:', updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('Failed to update profile:', error);
    throw error;
  }
}
```

### Example 6: Delete a Resource

```tsx
import { apiClient } from '@/services/api';

async function deleteSong(songId: string) {
  try {
    await apiClient.delete(`/songs/${songId}`);
    console.log('Song deleted successfully');
  } catch (error) {
    console.error('Failed to delete song:', error);
    throw error;
  }
}
```

## Form Handling Examples

### Example 7: Form with Error Handling

```tsx
'use client';

import { useState } from 'react';
import { apiClient, ApiError } from '@/services/api';

export default function CreatePlaylistForm() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      await apiClient.post('/playlists', { name });
      setSuccess(true);
      setName(''); // Reset form
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Playlist created!</div>}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Playlist name"
        required
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Playlist'}
      </button>
    </form>
  );
}
```

## Environment Configuration

### Development

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Production

```env
NEXT_PUBLIC_API_URL=https://api.rsync.com
```

### Testing

```env
NEXT_PUBLIC_API_URL=https://staging-api.rsync.com
```

## Best Practices

1. **Always check authentication before making requests**

   ```tsx
   const { isLoggedIn } = useAuth();
   if (!isLoggedIn) return;
   ```

2. **Handle loading states**

   ```tsx
   const [isLoading, setIsLoading] = useState(false);
   ```

3. **Catch and display errors**

   ```tsx
   try {
     await apiClient.post(...);
   } catch (error) {
     if (error instanceof ApiError) {
       setError(error.message);
     }
   }
   ```

4. **Use TypeScript types**

   ```tsx
   interface User {
     id: string;
     name: string;
     email: string;
   }

   const user = await apiClient.get<User>('/user/profile');
   ```

5. **Clean up on unmount**
   ```tsx
   useEffect(() => {
     let mounted = true;

     async function fetchData() {
       const data = await apiClient.get('/data');
       if (mounted) {
         setData(data);
       }
     }

     fetchData();

     return () => {
       mounted = false;
     };
   }, []);
   ```

## Troubleshooting

### Token Not Being Sent

- Verify token is stored: `localStorage.getItem('token')`
- Check browser console for Authorization header
- Ensure you're using `apiClient` from `@/services/api`

### CORS Errors

- Configure CORS on your backend to allow your frontend origin
- Add proper headers in backend: `Access-Control-Allow-Origin`

### 401 Unauthorized Errors

- Token might be expired or invalid
- Clear localStorage and login again
- Check token format in Authorization header

### Network Errors

- Verify API URL in `.env.local`
- Check if backend server is running
- Verify network connectivity
