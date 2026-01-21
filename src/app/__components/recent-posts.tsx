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
import { FormattedDate } from "@/app/__components/ui/formatted-date";
import { getAllPosts } from "@/lib/posts";

export async function RecentPosts() {
  const recentPosts = await getAllPosts([
    "title",
    "date",
    "readTime",
    "slug",
    "author",
    "content",
    "tags",
    "category",
    "excerpt",
    "image",
    "blurDataUrl",
  ]);

  return (
    <section className="py-12 md:py-24 lg:py-32" data-testid="recent-posts">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
              data-testid="recent-posts-title"
            >
              Recent Posts
            </h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              data-testid="recent-posts-subtitle"
            >
              Latest articles and tutorials from my blog.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {recentPosts.map((post) => (
            <Card
              key={post.slug}
              className="overflow-hidden"
              data-testid="recent-post-item"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.image || "/assets/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={150}
                      quality={75}
                      className="aspect-video w-full object-cover transition-transform hover:scale-105 md:aspect-square"
                      {...(post.blurDataUrl && {
                        placeholder: "blur",
                        blurDataURL: post.blurDataUrl,
                      })}
                    />
                  </Link>
                </div>
                <div className="md:w-2/3">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <FormattedDate date={post.date} />
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-bold hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center" data-testid="all-posts-button">
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
