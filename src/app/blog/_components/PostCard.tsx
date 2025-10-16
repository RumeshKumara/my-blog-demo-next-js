import Link from 'next/link';
import { formatDate } from '@/utils/formatDate';
import type { Post } from '@/types';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <div className="border rounded p-4 hover:shadow-md">
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      </Link>
      <p className="text-gray-600 mb-2">{post.excerpt}</p>
      <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
    </div>
  );
}