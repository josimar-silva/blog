import { BlogHeader } from "@/components/blog-header"
import { AboutHero } from "@/components/about-hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { ContactCTA } from "@/components/contact-cta"
import { BlogFooter } from "@/components/blog-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <AboutHero />
        <div className="space-y-12">
          <Experience />
          <Skills />
          <Education />
          <ContactCTA />
        </div>
      </main>
      <BlogFooter />
    </div>
  )
}
