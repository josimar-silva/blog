import { Footer } from "@/app/__components/common/footer";
import { Header } from "@/app/__components/common/header";
import { TermsOfService } from "@/app/__components/legal/terms-of-service";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TermsOfService />
      </main>
      <Footer />
    </div>
  );
}
