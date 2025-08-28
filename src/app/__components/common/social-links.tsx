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

import { Book, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: Readonly<SocialLinksProps>) {
  return (
    <div
      data-testid="social-links"
      className={cn("flex items-center space-x-4", className)}
    >
      <Link
        href="https://github.com/josimar-silva"
        className="text-muted-foreground hover:text-foreground"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/josimar-silvx"
        className="text-muted-foreground hover:text-foreground"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="https://www.goodreads.com/josimar-silva"
        className="text-muted-foreground hover:text-foreground"
        aria-label="Goodreads"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Book className="h-5 w-5" />
        <span className="sr-only">Goodreads</span>
      </Link>
      <Link
        href="mailto:me@josimar-silva.com"
        className="text-muted-foreground hover:text-foreground"
        aria-label="Mail"
      >
        <Mail className="h-5 w-5" />
        <span className="sr-only">E-mail</span>
      </Link>
    </div>
  );
}
