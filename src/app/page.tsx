import { BlogFooter } from "@/app/__components/blog-footer";
import { BlogHeader } from "@/app/__components/blog-header";
import { FeaturedPosts } from "@/app/__components/featured-posts";
import { HeroSection } from "@/app/__components/hero-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <HeroSection />
        <FeaturedPosts />
      </main>
      <BlogFooter />
    </div>
  );
}
