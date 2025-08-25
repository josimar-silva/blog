import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/__components/ui/card";
import { Badge } from "@/app/__components/ui/badge";
import { Button } from "@/app/__components/ui/button";
import { Input } from "@/app/__components/ui/input";
import { Calendar, Mail, Rss, Tag, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
}

interface BlogSidebarProps {
  posts: BlogPost[];
}

export function BlogSidebar({ posts }: BlogSidebarProps) {
  // Get recent posts (last 5)
  const recentPosts = posts.slice(0, 5),
    // Get popular categories
    categoryCount = posts.reduce(
      (acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    ),
    popularCategories = Object.entries(categoryCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6),
    // Get popular tags
    tagCount = posts.reduce(
      (acc, post) => {
        post.tags.forEach((tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
        });
        return acc;
      },
      {} as Record<string, number>,
    ),
    popularTags = Object.entries(tagCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 12);

  return (
    <aside className="space-y-6">
      {/* Newsletter Signup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Stay Updated
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Get the latest posts delivered directly to your inbox.
          </p>
          <div className="space-y-2">
            <Input placeholder="Your email address" type="email" />
            <Button className="w-full">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Join 1,000+ developers. No spam, unsubscribe anytime.
          </p>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-3">
              <Image
                src={post.image || "/assets/placeholder.svg"}
                alt={post.title}
                width={60}
                height={60}
                className="aspect-square rounded object-cover shrink-0"
              />
              <div className="space-y-1">
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="text-sm font-medium hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Popular Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {popularCategories.map(([category, count]) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase()}`}
                className="flex items-center justify-between p-2 rounded hover:bg-muted transition-colors"
              >
                <span className="text-sm">{category}</span>
                <Badge variant="secondary" className="text-xs">
                  {count}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map(([tag, count]) => (
              <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                <Badge
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tag} ({count})
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* RSS Feed */}
      <Card>
        <CardContent className="p-4">
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/rss.xml">
              <Rss className="mr-2 h-4 w-4" />
              RSS Feed
            </Link>
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}
