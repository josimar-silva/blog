import { BlogHeader } from "@/app/__components/blog-header";
import { MinimalContactHero } from "@/app/__components/minimal-contact-hero";
import { MinimalContactInfo } from "@/app/__components/minimal-contact-info";
import { BlogFooter } from "@/app/__components/blog-footer";

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
  );
}
