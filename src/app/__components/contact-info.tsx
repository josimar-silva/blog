import { Card, CardContent } from "@/app/__components/ui/card";
import { Button } from "@/app/__components/ui/button";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold text-lg mb-4">Contact Information</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <Link
                  href="mailto:hello@johndoe.com"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  hello@johndoe.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
