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

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { Badge } from "@/app/__components/ui/badge";
import { getCategories } from "@/lib/categories";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

function BlogListComponent({ posts }: Readonly<BlogListProps>) {
  const searchParams = useSearchParams();
  const categoryKey = searchParams.get("category");

  const getInitialCategory = () => {
    if (!categoryKey) {
      return "All";
    }
    const categories = getCategories();
    const category = categories.find((c) => c.key === categoryKey);
    return category ? category.name : "All";
  };

  const [selectedCategory, setSelectedCategory] =
    useState(getInitialCategory());

  useEffect(() => {
    setSelectedCategory(getInitialCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryKey]);

  const categories = getCategories()
      .map((category) => category.name)
      .concat("All"),
    // Filter posts based on selected category
    filteredPosts =
      selectedCategory === "All"
        ? posts
        : posts.filter((post) => post.category === selectedCategory);

  function formattedArticle() {
    return `article${filteredPosts.length !== 1 ? "s" : ""}`;
  }

  return (
    <section className="pb-16 md:pb-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={
                  selectedCategory === category ? "default" : "secondary"
                }
                className="cursor-pointer hover:bg-primary/80 transition-colors px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({posts.filter((post) => post.category === category).length}
                    )
                  </span>
                )}
                {category === "All" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({posts.length})
                  </span>
                )}
              </Badge>
            ))}
          </div>
        </div>

        {/* Posts List */}
        <div className="space-y-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>

                {index < filteredPosts.length - 1 && (
                  <div className="mt-12 border-b border-border/50" />
                )}
              </article>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No posts found in the "{selectedCategory}" category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-primary hover:underline"
              >
                View all posts
              </button>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            {selectedCategory === "All"
              ? `Showing all ${posts.length} articles`
              : `Showing ${filteredPosts.length} ${formattedArticle()} in "${selectedCategory}"`}
          </p>
        </div>
      </div>
    </section>
  );
}

export function BlogList(props: Readonly<BlogListProps>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogListComponent {...props} />
    </Suspense>
  );
}
