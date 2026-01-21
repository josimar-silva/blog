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

import cloudflareImageLoader from "./image-loader";

describe("cloudflareImageLoader", () => {
  const originalEnv = process.env.NODE_ENV;

  beforeEach(() => {
    // Set to production by default for tests
    process.env.NODE_ENV = "production";
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
    jest.restoreAllMocks();
  });

  describe("empty src validation", () => {
    it("should return placeholder and warn when src is empty", () => {
      const result = cloudflareImageLoader({
        src: "",
        width: 800,
        quality: 80,
      });

      expect(result).toBe("/assets/placeholder.svg");
      expect(console.warn).toHaveBeenCalledWith(
        "cloudflareImageLoader: empty src provided",
      );
    });
  });

  describe("bypass transformation for external URLs", () => {
    it("should return http URLs unchanged", () => {
      const src = "http://example.com/image.jpg";
      const result = cloudflareImageLoader({
        src,
        width: 800,
        quality: 80,
      });

      expect(result).toBe(src);
    });

    it("should return https URLs unchanged", () => {
      const src = "https://example.com/image.jpg";
      const result = cloudflareImageLoader({
        src,
        width: 800,
        quality: 80,
      });

      expect(result).toBe(src);
    });

    it("should return data URIs unchanged", () => {
      const src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB";
      const result = cloudflareImageLoader({
        src,
        width: 800,
        quality: 80,
      });

      expect(result).toBe(src);
    });

    it("should return already processed Cloudflare images unchanged", () => {
      const src = "/cdn-cgi/image/width=400,quality=85/assets/image.jpg";
      const result = cloudflareImageLoader({
        src,
        width: 800,
        quality: 80,
      });

      expect(result).toBe(src);
    });
  });

  describe("development mode", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "development";
    });

    it("should return original src without transformation", () => {
      const src = "/assets/image.jpg";
      const result = cloudflareImageLoader({
        src,
        width: 800,
        quality: 80,
      });

      expect(result).toBe(src);
    });

    it("should bypass transformation for relative paths", () => {
      const src = "assets/image.jpg";
      const result = cloudflareImageLoader({
        src,
        width: 800,
        quality: 80,
      });

      expect(result).toBe(src);
    });
  });

  describe("production mode transformations", () => {
    it("should transform relative path with leading slash", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg",
        width: 800,
        quality: 85,
      });

      expect(result).toBe(
        "/cdn-cgi/image/width=800,format=avif,fit=scale-down,quality=85/assets/image.jpg",
      );
    });

    it("should transform relative path without leading slash", () => {
      const result = cloudflareImageLoader({
        src: "assets/image.jpg",
        width: 800,
        quality: 85,
      });

      expect(result).toBe(
        "/cdn-cgi/image/width=800,format=avif,fit=scale-down,quality=85/assets/image.jpg",
      );
    });

    it("should transform without quality parameter when not provided", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg",
        width: 800,
      });

      expect(result).toBe(
        "/cdn-cgi/image/width=800,format=avif,fit=scale-down/assets/image.jpg",
      );
    });

    it("should handle different width values", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg",
        width: 400,
        quality: 75,
      });

      expect(result).toBe(
        "/cdn-cgi/image/width=400,format=avif,fit=scale-down,quality=75/assets/image.jpg",
      );
    });

    it("should handle nested paths", () => {
      const result = cloudflareImageLoader({
        src: "/assets/blog/posts/image.jpg",
        width: 800,
        quality: 80,
      });

      expect(result).toBe(
        "/cdn-cgi/image/width=800,format=avif,fit=scale-down,quality=80/assets/blog/posts/image.jpg",
      );
    });
  });

  describe("quality parameter handling", () => {
    it("should include quality when specified", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg",
        width: 800,
        quality: 70,
      });

      expect(result).toContain("quality=70");
    });

    it("should omit quality parameter when undefined", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg",
        width: 800,
        quality: undefined,
      });

      expect(result).not.toContain("quality");
      expect(result).toBe(
        "/cdn-cgi/image/width=800,format=avif,fit=scale-down/assets/image.jpg",
      );
    });

    it("should handle quality=0 (falsy value)", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg",
        width: 800,
        quality: 0,
      });

      // Quality 0 is falsy, so it should be omitted
      expect(result).not.toContain("quality");
    });
  });

  describe("format and fit parameters", () => {
    it("should prioritize AVIF format for better compression", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg",
        width: 800,
      });

      expect(result).toContain("format=avif");
    });

    it("should always include fit=scale-down", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg",
        width: 800,
      });

      expect(result).toContain("fit=scale-down");
    });

    it("should prioritize AVIF with quality parameter", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg",
        width: 800,
        quality: 80,
      });

      expect(result).toBe(
        "/cdn-cgi/image/width=800,format=avif,fit=scale-down,quality=80/assets/image.jpg",
      );
    });

    it("should prioritize AVIF without quality parameter", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg",
        width: 800,
      });

      expect(result).toBe(
        "/cdn-cgi/image/width=800,format=avif,fit=scale-down/assets/image.jpg",
      );
    });
  });

  describe("edge cases", () => {
    it("should handle image with special characters in filename", () => {
      const result = cloudflareImageLoader({
        src: "/assets/my-image_2024 (1).jpg",
        width: 800,
        quality: 85,
      });

      expect(result).toBe(
        "/cdn-cgi/image/width=800,format=avif,fit=scale-down,quality=85/assets/my-image_2024 (1).jpg",
      );
    });

    it("should handle image with query parameters", () => {
      const result = cloudflareImageLoader({
        src: "/assets/image.jpg?v=123",
        width: 800,
        quality: 85,
      });

      expect(result).toBe(
        "/cdn-cgi/image/width=800,format=avif,fit=scale-down,quality=85/assets/image.jpg?v=123",
      );
    });
  });
});
