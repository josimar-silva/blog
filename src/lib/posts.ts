/**
 * MIT License
 *
 * Copyright (c) 2025 Josimar Silva
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import fs from "fs/promises";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "__posts");

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, ""),
    fullPath = join(postsDirectory, `${realSlug}.md`),
    fileContents = await fs.readFile(fullPath, "utf8"),
    { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = await fs.readdir(postsDirectory),
    posts = await Promise.all(
      slugs.map(async (slug) => await getPostBySlug(slug, fields)),
    );
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export async function getFeaturedPosts(
  fields: string[] = [
    "featured",
    "id",
    "slug",
    "title",
    "image",
    "readTime",
    "excerpt",
    "date",
    "category",
  ],
) {
  return (await getAllPosts(fields)).filter((post) => post.featured);
}
