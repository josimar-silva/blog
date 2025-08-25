/**
 * MIT License
 *
 * Copyright (c) 2025 Josimar Silva
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
