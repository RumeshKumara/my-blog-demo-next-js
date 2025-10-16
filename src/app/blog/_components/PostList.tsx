import type { Post } from '@/types';

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="border p-4 rounded">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}