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

import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import BlogPostContent from "@/app/__components/blog/blog-post-content";
import { BlogPostNavigation } from "@/app/__components/blog/blog-post-navigation";
import { Badge } from "@/app/__components/ui/badge";
import { Button } from "@/app/__components/ui/button";

interface PostNavigationProps {
  slug: string;
  title: string;
}

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
    author: string;
    authorPhoto: string;
    image: string;
    tags: string[];
    previousPost?: PostNavigationProps | null;
    nextPost?: PostNavigationProps | null;
  };
}

export function BlogPost({ post }: Readonly<BlogPostProps>) {
  return (
    <article className="py-8">
      <div className="container px-4 md:px-6 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
            {post.title}
          </h1>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Image
                src={post.authorPhoto || "/assets/placeholder.svg"}
                alt={post.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-muted-foreground">Author</p>
              </div>
            </div>

            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Metadata */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src={post.image || "/assets/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="aspect-video w-full rounded-lg object-cover"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>{post.category}</Badge>
          {post.tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        {/* Content */}
        <BlogPostContent content={post.content} />

        {/* Navigation */}
        <div className="mt-12">
          <BlogPostNavigation
            previousPost={post.previousPost}
            nextPost={post.nextPost}
          />
        </div>
      </div>
    </article>
  );
}
