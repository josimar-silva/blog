import { Footer } from "@/app/__components/footer";
import { Header } from "@/app/__components/header";
import { NowContent } from "@/app/__components/now/now-content";
import { NowHero } from "@/app/__components/now/now-hero";

export default function NowPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <NowHero />
        <NowContent />
      </main>
      <Footer />
    </div>
  );
}
