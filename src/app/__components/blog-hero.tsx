import { Badge } from "@/app/__components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/app/__components/ui/input";
import { Button } from "@/app/__components/ui/button";

export function BlogHero() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              Latest Articles
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Developer Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, technology,
              and building great software.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10 h-12" />
              <Button size="sm" className="absolute right-1 top-1 h-10">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10k+</div>
              <div className="text-sm text-muted-foreground">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
