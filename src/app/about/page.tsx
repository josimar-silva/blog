import { AboutHero } from "@/app/__components/about/about-hero";
import { ContactCTA } from "@/app/__components/contact-cta";
import { Education } from "@/app/__components/education";
import { Experience } from "@/app/__components/experience";
import { Footer } from "@/app/__components/footer";
import { Header } from "@/app/__components/header";
import { Skills } from "@/app/__components/skills";

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
