export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  image?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}