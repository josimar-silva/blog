import { Post } from '../interfaces/post';
import fs from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = join(process.cwd(), '_posts');

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug, fields))
  );
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export async function getFeaturedPosts(fields: string[] = ["featured", "id", "slug", "title", "image", "readTime", "excerpt", "date", "category"]) {
  const featuredPosts = (await getAllPosts(fields))
    .filter(post => post.featured);
  
    return featuredPosts;
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
