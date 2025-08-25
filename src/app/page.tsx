import { Footer } from "@/app/__components/common/footer";
import { Header } from "@/app/__components/common/header";
import { HeroSection } from "@/app/__components/common/hero-section";
import { FeaturedPosts } from "@/app/__components/featured-posts";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedPosts />
      </main>
      <Footer />
    </div>
  );
}
