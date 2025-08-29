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

import { getCategories } from "./categories";

// Mock the categories manifest
jest.mock("@/lib/data/categories", () => ({
  categories: [
    { key: "react", name: "React", count: 5 },
    { key: "next.js", name: "Next.js", count: 3 },
    { key: "typescript", name: "TypeScript", count: 8 },
  ],
}));

describe("getCategories", () => {
  it("should return categories sorted by count in descending order", () => {
    const sortedCategories = getCategories();
    expect(sortedCategories.map((c) => c.name)).toEqual([
      "TypeScript",
      "React",
      "Next.js",
    ]);
  });

  it("should return a limited number of categories", () => {
    const sortedCategories = getCategories(2);
    expect(sortedCategories.map((c) => c.name)).toEqual([
      "TypeScript",
      "React",
    ]);
  });
});
