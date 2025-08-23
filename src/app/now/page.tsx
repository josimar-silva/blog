import { BlogFooter } from "@/app/__components/blog-footer";
import { BlogHeader } from "@/app/__components/blog-header";
import { NowContent } from "@/app/__components/now-content";
import { NowHero } from "@/app/__components/now-hero";

export default function NowPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <NowHero />
        <NowContent />
      </main>
      <BlogFooter />
    </div>
  );
}
