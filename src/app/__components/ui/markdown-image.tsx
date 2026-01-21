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

import Image from "next/image";

interface MarkdownImageProps {
  src?: string;
  alt?: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  blurDataUrl?: string;
  loading?: "lazy" | "eager";
  figcaption?: string;
}

/**
 * Custom image component for markdown content.
 * Renders images through Next.js Image component for optimization.
 *
 * Features:
 * - Responsive sizing via sizes attribute
 * - Blur placeholder support (blurDataUrl)
 * - Lazy loading by default
 * - Aspect ratio preservation
 * - Optional figcaption support
 *
 * @param props - Image properties from markdown
 */
export function MarkdownImage({
  src,
  alt,
  title,
  width,
  height,
  blurDataUrl,
  loading = "lazy",
  figcaption,
}: Readonly<MarkdownImageProps>) {
  // Default aspect ratio: 16:9 (common for blog imagery)
  const DEFAULT_WIDTH = 1024;
  const DEFAULT_HEIGHT = 576; // 16:9 ratio

  // Parse width/height or use defaults
  const imageWidth = width ? parseInt(String(width), 10) : DEFAULT_WIDTH;
  const imageHeight = height ? parseInt(String(height), 10) : DEFAULT_HEIGHT;

  if (!src) {
    return null;
  }

  const imageElement = (
    <Image
      src={src}
      alt={alt || ""}
      title={title}
      width={imageWidth}
      height={imageHeight}
      quality={80}
      loading={loading}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
      className="rounded-lg object-cover w-full h-auto"
      {...(blurDataUrl && {
        placeholder: "blur",
        blurDataURL: blurDataUrl,
      })}
    />
  );

  // Wrap in figure/figcaption if caption provided
  if (figcaption) {
    return (
      <figure className="my-6">
        {imageElement}
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          {figcaption}
        </figcaption>
      </figure>
    );
  }

  // Wrap in container for proper spacing
  return <div className="my-6">{imageElement}</div>;
}
