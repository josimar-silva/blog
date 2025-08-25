import { Footer } from "@/app/__components/common/footer";
import { Header } from "@/app/__components/common/header";
import { PrivacyPolicy } from "@/app/__components/legal/privacy-policy";

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
