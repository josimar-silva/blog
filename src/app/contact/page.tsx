import { ContactHero } from "@/app/__components/contact-hero";
import { ContactInfo } from "@/app/__components/contact-info";
import { Footer } from "@/app/__components/footer";
import { Header } from "@/app/__components/header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
