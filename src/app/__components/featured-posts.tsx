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

import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/app/__components/ui/badge";
import { Button } from "@/app/__components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/__components/ui/card";
import { getFeaturedPosts } from "@/lib/posts";

export async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <section
      className="py-12 md:py-24 lg:py-32 bg-muted/50"
      data-testid="featured-posts"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              data-testid="featured-posts-title"
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            >
              Featured Posts
            </h2>
            <p
              data-testid="featured-posts-subtitle"
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              My most recent articles on software engineering.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {featuredPosts.map((post) => (
            <Card
              key={post.slug}
              className="overflow-hidden flex flex-col"
              data-testid="featured-post-item"
            >
              <Link
                href={`/blog/${post.slug}`}
                data-testid="featured-post-link"
              >
                <Image
                  src={post.image || "/assets/blog/posts/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="aspect-video w-full object-cover transition-transform hover:scale-105"
                />
              </Link>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold hover:text-primary transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mt-2 line-clamp-1">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div data-testid="all-posts-button" className="flex justify-center">
          <Button asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
