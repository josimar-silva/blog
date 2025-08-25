import { BlogHero } from "@/app/__components/blog/blog-hero";
import { BlogList } from "@/app/__components/blog/blog-list";
import { Footer } from "@/app/__components/common/footer";
import { Header } from "@/app/__components/common/header";
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
      <Header />
      <main>
        <BlogHero />
        <BlogList posts={allPosts} />
      </main>
      <Footer />
    </div>
  );
}
