// Mock DB setup (in real app, use Prisma or similar)
export const db = {
  posts: [
    {
      id: 1,
      slug: 'hello-world',
      title: 'Hello World',
      content: '<p>This is a demo post.</p>',
      excerpt: 'First post excerpt.',
      date: new Date().toISOString(),
      image: '/logo.png',
    },
  ],
};