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

import { Calendar, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/app/__components/ui/badge";
import { Card, CardContent, CardHeader } from "@/app/__components/ui/card";
import { FormattedDate } from "@/app/__components/ui/formatted-date";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  slug: string;
  featured: boolean;
  blurDataUrl?: string;
}

interface BlogGridProps {
  featuredPosts: BlogPost[];
  regularPosts: BlogPost[];
}

export function BlogGrid({ featuredPosts, regularPosts }: BlogGridProps) {
  return (
    <div className="space-y-12">
      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Featured Posts</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative">
                    <Image
                      src={post.image || "/assets/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      quality={85}
                      className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                      {...(post.blurDataUrl && {
                        placeholder: "blur",
                        blurDataURL: post.blurDataUrl,
                      })}
                    />
                    <Badge className="absolute top-4 left-4">Featured</Badge>
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <FormattedDate date={post.date} />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">All Posts</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.image || "/assets/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={250}
                  quality={80}
                  className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  {...(post.blurDataUrl && {
                    placeholder: "blur",
                    blurDataURL: post.blurDataUrl,
                  })}
                />
              </Link>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <FormattedDate date={post.date} />
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-bold hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
