import { getPost } from '@/lib/fetchPosts';
import { formatDate } from '@/utils/formatDate';

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="prose max-w-none">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">
        Published on {formatDate(post.date)}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}