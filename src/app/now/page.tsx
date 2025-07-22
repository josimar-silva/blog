import { BlogHeader } from "@/app/__components/blog-header"
import { NowHero } from "@/app/__components/now-hero"
import { NowContent } from "@/app/__components/now-content"
import { BlogFooter } from "@/app/__components/blog-footer"

export default function NowPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <NowHero />
        <NowContent />
      </main>
      <BlogFooter />
    </div>
  )
}
