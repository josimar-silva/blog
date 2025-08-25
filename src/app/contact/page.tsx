import { BlogFooter } from "@/app/__components/blog-footer";
import { BlogHeader } from "@/app/__components/blog-header";
import { ContactHero } from "@/app/__components/contact-hero";
import { ContactInfo } from "@/app/__components/contact-info";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <ContactHero />
        <ContactInfo />
      </main>
      <BlogFooter />
    </div>
  );
}
