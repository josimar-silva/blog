import { Badge } from "@/app/__components/ui/badge"
import { Button } from "@/app/__components/ui/button"
import BlogPostContent from "@/app/__components/blog-post-content"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogPostProps {
  post: {
    title: string
    content: string
    date: string
    readTime: string
    category: string
    author: string
    image: string
    tags: string[]
  }
}

export function BlogPost({ post }: BlogPostProps) {

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
          {/* Tags at the top */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>{post.category}</Badge>
            {post.tags && post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">{post.title}</h1>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/placeholder.svg?height=40&width=40"
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

        {/* Content */}
        <BlogPostContent content={post.content} />
      </div>
    </article>
  )
}
