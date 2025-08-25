import { FeaturedPosts } from "@/app/__components/featured-posts";
import { Footer } from "@/app/__components/footer";
import { Header } from "@/app/__components/header";
import { HeroSection } from "@/app/__components/hero-section";

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
