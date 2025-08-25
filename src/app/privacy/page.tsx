import { Footer } from "@/app/__components/footer";
import { Header } from "@/app/__components/header";
import { PrivacyPolicy } from "@/app/__components/privacy-policy";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
