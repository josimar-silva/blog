import { BlogHeader } from "@/app/__components/blog-header";
import { MinimalBlogHero } from "@/app/__components/minimal-blog-hero";
import { MinimalBlogList } from "@/app/__components/minimal-blog-list";
import { BlogFooter } from "@/app/__components/blog-footer";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const allPosts = await getAllPosts([
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
  ]);

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <MinimalBlogHero />
        <MinimalBlogList posts={allPosts} />
      </main>
      <BlogFooter />
    </div>
  );
}
