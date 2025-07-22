import { BlogHeader } from "@/components/blog-header"
import { MinimalBlogHero } from "@/components/minimal-blog-hero"
import { MinimalBlogList } from "@/components/minimal-blog-list"
import { BlogFooter } from "@/components/blog-footer"
import { getAllPosts } from "@/lib/api"

export default async function BlogPage() {
  const allPosts = await getAllPosts(['title', 'date', 'readTime', 'slug', 'author', 'content', 'tags', 'category', 'excerpt', 'image']);

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <MinimalBlogHero />
        <MinimalBlogList posts={allPosts} />
      </main>
      <BlogFooter />
    </div>
  )
}
