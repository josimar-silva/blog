import { BlogHeader } from "@/components/blog-header"
import { NowHero } from "@/components/now-hero"
import { NowContent } from "@/components/now-content"
import { BlogFooter } from "@/components/blog-footer"

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
