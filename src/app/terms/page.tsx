import { Footer } from "@/app/__components/footer";
import { Header } from "@/app/__components/header";
import { TermsOfService } from "@/app/__components/terms-of-service";

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
