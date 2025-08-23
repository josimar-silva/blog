import { BlogHeader } from "@/app/__components/blog-header";
import { PrivacyPolicy } from "@/app/__components/privacy-policy";
import { BlogFooter } from "@/app/__components/blog-footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <PrivacyPolicy />
      </main>
      <BlogFooter />
    </div>
  );
}
