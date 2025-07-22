import { BlogHeader } from "@/components/blog-header"
import { PrivacyPolicy } from "@/components/privacy-policy"
import { BlogFooter } from "@/components/blog-footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <PrivacyPolicy />
      </main>
      <BlogFooter />
    </div>
  )
}
