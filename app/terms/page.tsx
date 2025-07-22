import { BlogHeader } from "@/components/blog-header"
import { TermsOfService } from "@/components/terms-of-service"
import { BlogFooter } from "@/components/blog-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <TermsOfService />
      </main>
      <BlogFooter />
    </div>
  )
}
