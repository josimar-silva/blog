import { BlogHeader } from "@/components/blog-header"
import { MinimalContactHero } from "@/components/minimal-contact-hero"
import { MinimalContactInfo } from "@/components/minimal-contact-info"
import { BlogFooter } from "@/components/blog-footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <MinimalContactHero />
        <MinimalContactInfo />
      </main>
      <BlogFooter />
    </div>
  )
}
