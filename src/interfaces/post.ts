import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  image: string;
  content: string;
  featured: true;
  readTime: string;
  category: string;
  tags: string[];
};
