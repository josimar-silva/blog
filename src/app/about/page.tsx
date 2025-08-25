import { AboutHero } from "@/app/__components/about/about-hero";
import { Footer } from "@/app/__components/common/footer";
import { Header } from "@/app/__components/common/header";
import { ContactCTA } from "@/app/__components/contact/contact-cta";
import { Education } from "@/app/__components/resume/education";
import { Experience } from "@/app/__components/resume/experience";
import { Skills } from "@/app/__components/resume/skills";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHero />
        <div className="space-y-12">
          <Experience />
          <Skills />
          <Education />
          <ContactCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
