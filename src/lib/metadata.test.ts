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

import config from "./config";
import { generateMetadata } from "./metadata";
import { getPostBySlug } from "./posts";

jest.mock("./posts", () => ({
  getPostBySlug: jest.fn(),
}));

jest.mock("./config", () => ({
  __esModule: true,
  default: {
    siteUrl: "https://example.com",
  },
}));

describe("generateMetadata", () => {
  const mockPost = {
    title: "Test Post Title",
    excerpt: "Test Post Excerpt",
    image: "/assets/test-image.jpg",
    date: "2025-01-01T00:00:00Z",
    author: "Test Author",
    slug: "test-post-slug",
  };

  it("should generate correct metadata for a post", async () => {
    (getPostBySlug as jest.Mock).mockResolvedValue(mockPost);

    const metadata = await generateMetadata({
      params: { slug: "test-post-slug" },
    });

    expect(metadata.title).toBe(mockPost.title);
    expect(metadata.description).toBe(mockPost.excerpt);
    expect(metadata.openGraph?.title).toBe(mockPost.title);
    expect(metadata.openGraph?.description).toBe(mockPost.excerpt);
    expect(metadata.openGraph?.url).toBe(
      `${config.siteUrl}/blog/${mockPost.slug}`,
    );
    expect(metadata.openGraph?.type).toBe("article");
    expect(metadata.openGraph?.publishedTime).toBe(mockPost.date);
    expect(metadata.openGraph?.authors).toEqual([mockPost.author]);
    expect(metadata.openGraph?.images?.[0].url).toBe(
      new URL(mockPost.image, config.siteUrl).toString(),
    );
    expect(metadata.openGraph?.images?.[0].width).toBe(1200);
    expect(metadata.openGraph?.images?.[0].height).toBe(630);
    expect(metadata.openGraph?.images?.[0].alt).toBe(mockPost.title);

    expect(metadata.twitter?.card).toBe("summary_large_image");
    expect(metadata.twitter?.title).toBe(mockPost.title);
    expect(metadata.twitter?.description).toBe(mockPost.excerpt);
    expect(metadata.twitter?.images?.[0]).toBe(
      new URL(mockPost.image, config.siteUrl).toString(),
    );
  });

  it("should return empty metadata if post is not found", async () => {
    (getPostBySlug as jest.Mock).mockResolvedValue(null);

    const metadata = await generateMetadata({
      params: { slug: "non-existent-post" },
    });

    expect(metadata).toEqual({});
  });
});
