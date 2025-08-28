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

import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { SocialLinks } from "../common/social-links";

export function ContactInfo() {
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
                href="mailto:me@josimar-silva.com"
                className="text-2xl md:text-3xl font-medium hover:text-primary transition-colors"
              >
                me@josimar-silva.com
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
              <p className="text-lg">Germany</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-border/50" />

          {/* Social Links */}
          <div className="text-center space-y-6">
            <div className="text-muted-foreground">
              <span className="text-sm">Find me on</span>
            </div>

            <SocialLinks className="flex justify-center gap-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
