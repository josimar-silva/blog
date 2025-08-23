import { Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/app/__components/ui/button";
import { Card, CardContent } from "@/app/__components/ui/card";

export function ContactCTA() {
  return (
    <section className="py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <Card className="mx-auto max-w-4xl">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question, want to collaborate, or just want to
              say hi, I'd love to hear from you.
            </p>

            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                Currently available for freelance projects and full-time
                opportunities
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
