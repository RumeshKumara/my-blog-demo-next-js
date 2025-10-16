import type { Post } from '@/types';

const API_URL = process.env.API_URL || 'http://localhost:3000';

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API_URL}/api/posts`, {
    next: { revalidate: 3600 }, // ISR: Revalidate every hour
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) || null;
}