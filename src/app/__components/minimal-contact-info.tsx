import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Link from "next/link";

export function MinimalContactInfo() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container px-4 md:px-6 max-w-2xl">
        <div className="space-y-12">
          {/* Primary Contact */}
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email</span>
              </div>
              <Link
                href="mailto:hello@johndoe.com"
                className="text-2xl md:text-3xl font-medium hover:text-primary transition-colors"
              >
                hello@johndoe.com
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-border/50" />

          {/* Secondary Info */}
          <div className="grid gap-8 md:grid-cols-1">
            {/* Location */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Location</span>
              </div>
              <p className="text-lg">San Francisco, CA</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-border/50" />

          {/* Social Links */}
          <div className="text-center space-y-6">
            <div className="text-muted-foreground">
              <span className="text-sm">Find me on</span>
            </div>

            <div className="flex justify-center gap-8">
              <Link
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Github className="h-6 w-6" />
                <span className="text-sm">GitHub</span>
              </Link>

              <Link
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Twitter className="h-6 w-6" />
                <span className="text-sm">Twitter</span>
              </Link>

              <Link
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin className="h-6 w-6" />
                <span className="text-sm">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
