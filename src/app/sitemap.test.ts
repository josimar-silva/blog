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

import { getBooks } from "@/lib/books";
import { getAllPosts } from "@/lib/posts";

import sitemap from "./sitemap";

jest.mock("@/lib/posts");
jest.mock("@/lib/books");

describe("sitemap", () => {
  it("should generate the correct sitemap", async () => {
    const mockPosts = [
      { slug: "post-1", date: "2025-01-01" },
      { slug: "post-2", date: "2025-01-02" },
    ];
    const mockBooks = [
      { slug: "book-1", dateRead: "2025-01-15" },
      { slug: "book-2", dateRead: "2025-01-20" },
    ];
    (getAllPosts as jest.Mock).mockResolvedValue(mockPosts);
    (getBooks as jest.Mock).mockResolvedValue(mockBooks);

    const result = await sitemap();

    expect(result).toHaveLength(13); // 9 static pages + 2 posts + 2 books
    expect(result).toContainEqual({
      url: "https://josimar-silva.com/blog/post-1",
      lastModified: new Date("2025-01-01"),
    });
    expect(result).toContainEqual({
      url: "https://josimar-silva.com/blog/post-2",
      lastModified: new Date("2025-01-02"),
    });
    expect(result).toContainEqual({
      url: "https://josimar-silva.com/bookshelf/book-1",
      lastModified: new Date("2025-01-15"),
    });
    expect(result).toContainEqual({
      url: "https://josimar-silva.com/bookshelf/book-2",
      lastModified: new Date("2025-01-20"),
    });
    expect(result).toContainEqual({
      url: "https://josimar-silva.com/",
      lastModified: expect.any(Date),
    });
  });
});
