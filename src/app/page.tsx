import { BlogHeader } from "@/app/__components/blog-header";
import { HeroSection } from "@/app/__components/hero-section";
import { FeaturedPosts } from "@/app/__components/featured-posts";
import { BlogFooter } from "@/app/__components/blog-footer";

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
