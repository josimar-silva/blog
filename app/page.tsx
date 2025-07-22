import { BlogHeader } from "@/components/blog-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedPosts } from "@/components/featured-posts"
import { RecentPosts } from "@/components/recent-posts"
import { BlogFooter } from "@/components/blog-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <HeroSection />
        <FeaturedPosts />
        <RecentPosts />
      </main>
      <BlogFooter />
    </div>
  )
}
