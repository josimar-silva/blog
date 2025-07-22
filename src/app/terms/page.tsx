import { BlogHeader } from "@/app/__components/blog-header"
import { TermsOfService } from "@/app/__components/terms-of-service"
import { BlogFooter } from "@/app/__components/blog-footer"

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
