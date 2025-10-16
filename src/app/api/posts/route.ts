import { NextResponse } from 'next/server';
import type { Post } from '@/types';

const mockPosts: Post[] = [
  {
    id: 1,
    slug: 'hello-world',
    title: 'Hello World',
    content: '<p>This is a demo post.</p>',
    excerpt: 'First post excerpt.',
    date: new Date().toISOString(),
    image: '/logo.png',
  },
  {
    id: 2,
    slug: 'next-js-tips',
    title: 'Next.js Tips',
    content: '<p>Some tips on using Next.js.</p>',
    excerpt: 'Tips excerpt.',
    date: new Date().toISOString(),
    image: '/logo.png',
  },
];

export async function GET() {
  return NextResponse.json(mockPosts);
}

export async function POST(request: Request) {
  const newPost: Omit<Post, 'id'> = await request.json();
  const postWithId: Post = { ...newPost, id: mockPosts.length + 1 };
  mockPosts.push(postWithId); // In real app, save to DB
  return NextResponse.json({ message: 'Post created', post: postWithId }, { status: 201 });
}