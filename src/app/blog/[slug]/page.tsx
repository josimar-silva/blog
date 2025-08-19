import { BlogHeader } from "@/app/__components/blog-header"
import { BlogPost } from "@/app/__components/blog-post"
import { BlogFooter } from "@/app/__components/blog-footer"
import { getPostBySlug, markdownToHtml, getAllPosts } from "@/lib/posts"
import { notFound } from "next/navigation"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {  
  const post = await getPostBySlug(params.slug, ['title', 'date', 'readTime', 'slug', 'author', 'content', 'tags', 'category']) 

  if (!post) {
    return notFound()
  }

  const contentHtml = await markdownToHtml(post.content || '')

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BlogPost post={{ ...post, content: contentHtml }} />
      <BlogFooter />
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts(['slug'])
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
