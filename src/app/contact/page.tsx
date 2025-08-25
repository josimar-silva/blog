import { Footer } from "@/app/__components/common/footer";
import { Header } from "@/app/__components/common/header";
import { ContactHero } from "@/app/__components/contact/contact-hero";
import { ContactInfo } from "@/app/__components/contact/contact-info";

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
