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

import { getAllPosts } from "@/lib/posts";

import sitemap from "./sitemap";

jest.mock("@/lib/posts");

describe("sitemap", () => {
  it("should generate the correct sitemap", async () => {
    const mockPosts = [
      { slug: "post-1", date: "2025-01-01" },
      { slug: "post-2", date: "2025-01-02" },
    ];
    (getAllPosts as jest.Mock).mockResolvedValue(mockPosts);

    const result = await sitemap();

    expect(result).toHaveLength(11); // 9 static pages + 2 posts
    expect(result).toContainEqual({
      url: "https://josimar-silva.com/blog/post-1",
      lastModified: new Date("2025-01-01"),
    });
    expect(result).toContainEqual({
      url: "https://josimar-silva.com/blog/post-2",
      lastModified: new Date("2025-01-02"),
    });
    expect(result).toContainEqual({
      url: "https://josimar-silva.com/",
      lastModified: expect.any(Date),
    });
  });
});
