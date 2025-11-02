'use client';

import { useAuth } from '@/hooks/useAuth';

export default function Dashboard() {
  // Auto-redirige a login si NO tiene token
  const { logout } = useAuth();

  return <>AAA</>;
}
