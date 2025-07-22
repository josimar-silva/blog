import { Card, CardContent, CardHeader } from "@/app/__components/ui/card"
import { Badge } from "@/app/__components/ui/badge"
import { Button } from "@/app/__components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/api"

export async function RecentPosts() {
  const recentPosts = await getAllPosts(['title', 'date', 'readTime', 'slug', 'author', 'content', 'tags', 'category', 'excerpt', 'image'])

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Posts</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Latest articles and tutorials from my blog.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {recentPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.image || "/assets/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={150}
                      className="aspect-video w-full object-cover transition-transform hover:scale-105 md:aspect-square"
                    />
                  </Link>
                </div>
                <div className="md:w-2/3">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
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
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
