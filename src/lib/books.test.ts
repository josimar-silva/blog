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

import fs from "fs/promises";

import { books as mockBooks } from "@/lib/data/books";

import { getBookBySlug, getBooks } from "./books";

jest.mock("@/lib/data/books", () => ({
  books: [
    {
      id: "1",
      slug: "mock-book-1",
      title: "Mock Book 1",
      notes: "",
    },
    {
      id: "2",
      slug: "mock-book-2",
      title: "Mock Book 2",
      notes: "",
    },
  ],
}));

jest.mock("fs/promises", () => ({
  readFile: jest.fn(),
}));

describe("books library", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getBooks", () => {
    it("should return all books from the manifest", async () => {
      const allBooks = await getBooks();
      expect(allBooks.length).toBe(mockBooks.length);
      expect(allBooks[0].slug).toBe("mock-book-1");
    });
  });

  describe("getBookBySlug", () => {
    it("should return a single book with its content", async () => {
      const slug = "mock-book-1";
      const mockFileContent =
        "---\ntitle: Mock Book 1\n---\n\nThis is the note content.";
      (fs.readFile as jest.Mock).mockResolvedValue(mockFileContent);

      const book = await getBookBySlug(slug);

      expect(book).not.toBeNull();
      expect(book?.slug).toBe(slug);
      expect(book?.title).toBe("Mock Book 1");
      expect(book?.notes).toBe("\nThis is the note content.");
      expect(fs.readFile).toHaveBeenCalledWith(
        expect.stringContaining("__books/mock-book-1.md"),
        "utf8",
      );
    });

    it("should return null if the book is not in the manifest", async () => {
      const slug = "non-existent-slug";
      const book = await getBookBySlug(slug);
      expect(book).toBeNull();
      expect(fs.readFile).not.toHaveBeenCalled();
    });
  });
});
