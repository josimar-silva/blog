import { Mail } from "lucide-react";

import { Button } from "@/app/__components/ui/button";
import { Card, CardContent } from "@/app/__components/ui/card";
import { Input } from "@/app/__components/ui/input";

export function Newsletter() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <Card className="mx-auto max-w-2xl">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest posts and updates delivered directly to your inbox.
              No spam, unsubscribe at any time.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              Join 1,000+ developers who read my newsletter weekly.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
