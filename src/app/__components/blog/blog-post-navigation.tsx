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

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/app/__components/ui/button";

interface PostNavigationProps {
  slug: string;
  title: string;
}

interface BlogPostNavigationProps {
  previousPost?: PostNavigationProps | null;
  nextPost?: PostNavigationProps | null;
}

export function BlogPostNavigation({
  previousPost,
  nextPost,
}: BlogPostNavigationProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {previousPost ? (
          <Button variant="outline" asChild>
            <Link href={`/blog/${previousPost.slug}`}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        {nextPost ? (
          <Button variant="outline" asChild>
            <Link href={`/blog/${nextPost.slug}`}>
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
