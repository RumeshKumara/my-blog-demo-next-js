import Link from 'next/link';
import { getPosts } from '@/lib/fetchPosts';

export default async function HomePage() {
  const posts = await getPosts(); // Server-side fetch (SSG/ISR)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Welcome to My Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded">
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}