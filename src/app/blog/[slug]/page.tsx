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

import { notFound } from "next/navigation";

import { BlogPost } from "@/app/__components/blog/blog-post";
import { Footer } from "@/app/__components/common/footer";
import { Header } from "@/app/__components/common/header";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug, [
    "title",
    "date",
    "readTime",
    "slug",
    "author",
    "authorPhoto",
    "content",
    "tags",
    "category",
    "previousPost",
    "nextPost",
  ]);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BlogPost post={post} />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts(["slug"]);
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
