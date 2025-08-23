import { AboutHero } from "@/app/__components/about-hero";
import { BlogFooter } from "@/app/__components/blog-footer";
import { BlogHeader } from "@/app/__components/blog-header";
import { ContactCTA } from "@/app/__components/contact-cta";
import { Education } from "@/app/__components/education";
import { Experience } from "@/app/__components/experience";
import { Skills } from "@/app/__components/skills";

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
  );
}
