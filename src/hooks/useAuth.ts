'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  name: string;
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login (in real: API call)
    const mockUser: User = { id: 1, name: 'John Doe', email };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    document.cookie = 'auth=true; path=/';
  };

  const signup = async (email: string, password: string) => {
    // Mock signup
    const mockUser: User = { id: 2, name: 'Jane Doe', email };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    document.cookie = 'auth=true; path=/';
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/');
  };

  return { user, login, signup, logout };
}