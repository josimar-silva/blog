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

import config from "./config";

const postsDirectory = join(process.cwd(), "__posts");

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const manifestContents = await fs.readFile(
    config.posts.postsManifestFile,
    "utf8",
  );
  const posts = JSON.parse(manifestContents);
  const postFromManifest = posts.find((p: { slug: string }) => p.slug === slug);

  if (!postFromManifest) {
    return {};
  }

  const fullPath = join(postsDirectory, `${postFromManifest.slug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const allData = {
    ...data,
    ...postFromManifest,
    content,
    slug: postFromManifest.slug,
  };

  if (fields.length === 0) {
    return allData;
  }

  const items = {};
  fields.forEach((field) => {
    if (allData[field] !== undefined) {
      items[field] = allData[field];
    }
  });

  return items;
}

export async function getAllPosts(fields: string[] = []) {
  try {
    const fileContents = await fs.readFile(
      config.posts.postsManifestFile,
      "utf8",
    );
    const posts = JSON.parse(fileContents);

    if (fields.length === 0) {
      return posts;
    }

    return posts.map((post: { [x: string]: any }) => {
      const items = {};
      fields.forEach((field) => {
        if (post[field] !== undefined) {
          items[field] = post[field];
        }
      });
      return items;
    });
  } catch {
    console.error("posts not found");
    return [];
  }
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
