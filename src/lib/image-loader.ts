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

import type { ImageLoaderProps } from "next/image";

/**
 * Normalizes source path by removing leading slash for Cloudflare Image Resizing
 */
const normalizeSrc = (src: string): string => {
  return src.startsWith("/") ? src.slice(1) : src;
};

/**
 * Checks if the source URL should bypass Cloudflare Image Resizing.
 * Returns true for:
 * - External URLs (http/https)
 * - Data URIs (inline base64 images)
 * - Already processed Cloudflare images
 */
const shouldBypassTransformation = (src: string): boolean => {
  const bypassPatterns = [
    src.startsWith("http://"),
    src.startsWith("https://"),
    src.startsWith("data:"),
    src.includes("/cdn-cgi/image/"),
  ];

  return bypassPatterns.some(Boolean);
};

/**
 * Build Cloudflare Image Resizing parameters.
 *
 * Prioritizes AVIF format for modern browsers while maintaining compatibility
 * with older browsers via automatic fallback to WebP/JPEG.
 *
 * Format priority:
 * 1. AVIF (modern browsers: ~80% support)
 * 2. WebP (fallback for older browsers)
 * 3. JPEG/PNG (final fallback)
 *
 * @param width
 * @param quality
 */
const buildImageParams = (width: number, quality?: number) => {
  const params: string[] = [
    `width=${width}`,
    "format=avif", // Prioritize AVIF for better compression
    "fit=scale-down", // Never upscale images
  ];

  if (quality) {
    params.push(`quality=${quality}`);
  }

  return params.join(",");
};

/**
 * Custom image loader for Cloudflare Image Resizing
 *
 * @see https://developers.cloudflare.com/images/image-resizing/url-format/
 */
export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  if (!src) {
    console.warn("cloudflareImageLoader: empty src provided");
    return "/assets/placeholder.svg";
  }

  if (shouldBypassTransformation(src)) {
    return src;
  }

  // In development, serve images directly without transformation
  if (process.env.NODE_ENV === "development") {
    return src;
  }

  const paramsString = buildImageParams(width, quality);
  const normalizedSrc = normalizeSrc(src);

  return `/cdn-cgi/image/${paramsString}/${normalizedSrc}`;
}
