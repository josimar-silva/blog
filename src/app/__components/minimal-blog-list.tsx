"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/app/__components/ui/badge"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  slug: string
}

interface MinimalBlogListProps {
  posts: BlogPost[]
}

export function MinimalBlogList({ posts }: MinimalBlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All"),

  // Get unique categories from posts
   categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))],

  // Filter posts based on selected category
   filteredPosts = selectedCategory === "All" ? posts : posts.filter((post) => post.category === selectedCategory)

  return (
    <section className="pb-16 md:pb-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80 transition-colors px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({posts.filter((post) => post.category === category).length})
                  </span>
                )}
                {category === "All" && <span className="ml-2 text-xs opacity-70">({posts.length})</span>}
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

                    <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>

                {index < filteredPosts.length - 1 && <div className="mt-12 border-b border-border/50" />}
              </article>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No posts found in the "{selectedCategory}" category.</p>
              <button onClick={() => setSelectedCategory("All")} className="mt-4 text-primary hover:underline">
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
              : `Showing ${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""} in "${selectedCategory}"`}
          </p>
        </div>
      </div>
    </section>
  )
}
