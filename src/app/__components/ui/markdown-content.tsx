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

"use client";

import { useSyncExternalStore } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { highlight } from "remark-sugar-high";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

/**
 * Renders markdown content with syntax highlighting and theme support.
 *
 * Features:
 * - GitHub Flavored Markdown (GFM) support
 * - Syntax highlighting with theme-aware color schemes
 * - Math notation support
 * - Raw HTML support
 * - Client-side rendering to prevent hydration mismatches
 *
 * @param content - The markdown content to render
 * @param className - Optional additional CSS classes for the container
 */
export function MarkdownContent({
  content,
  className = "prose prose-gray max-w-none dark:prose-invert lg:prose-lg",
}: Readonly<MarkdownContentProps>) {
  const isClientMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!isClientMounted) {
    return (
      <div
        className={className}
        aria-hidden="true"
        style={{ minHeight: "100px" }}
      >
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4" />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Markdown
        remarkPlugins={[remarkFrontmatter, remarkGfm, remarkMath, highlight]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </Markdown>
    </div>
  );
}
