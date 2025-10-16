'use client';
import { useState, useEffect } from 'react';
import { getPosts } from '@/lib/fetchPosts';
import type { Post } from '@/types';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then(setPosts).finally(() => setLoading(false));
  }, []);

  return { posts, loading };
}