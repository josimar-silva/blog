import { BlogHero } from "@/app/__components/blog/blog-hero";
import { BlogList } from "@/app/__components/blog/blog-list";
import { BlogFooter } from "@/app/__components/blog-footer";
import { BlogHeader } from "@/app/__components/blog-header";
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
        <BlogHero />
        <BlogList posts={allPosts} />
      </main>
      <BlogFooter />
    </div>
  );
}
