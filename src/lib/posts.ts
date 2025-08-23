import fs from 'fs/promises';
import {join} from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '__posts');

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, ''),
   fullPath = join(postsDirectory, `${realSlug}.md`),
   fileContents = await fs.readFile(fullPath, 'utf8'),
   { data, content } = matter(fileContents);

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
  const slugs = await fs.readdir(postsDirectory),
   posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug, fields))
  );
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export async function getFeaturedPosts(fields: string[] = ["featured", "id", "slug", "title", "image", "readTime", "excerpt", "date", "category"]) {
    return (await getAllPosts(fields)).filter(post => post.featured);
}
