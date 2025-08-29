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

import { render, screen } from "@testing-library/react";

import { getCategories } from "@/lib/categories";

import CategoriesList from "./categories-list";

// Mock the getCategories function
jest.mock("@/lib/categories", () => ({
  getCategories: jest.fn(() => [
    { key: "typescript", name: "TypeScript", count: 8 },
    { key: "react", name: "React", count: 5 },
    { key: "next.js", name: "Next.js", count: 3 },
    { key: "software-engineering", name: "Software Engineering", count: 1 },
  ]),
}));

describe("CategoriesList", () => {
  it("renders a list of categories", () => {
    render(<CategoriesList />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(4);
  });

  it("renders categories in the correct order", () => {
    render(<CategoriesList />);

    const links = screen.getAllByRole("link");
    const texts = links.map((link) => link.textContent);

    expect(texts).toEqual([
      "TypeScript",
      "React",
      "Next.js",
      "Software Engineering",
    ]);
  });

  it("renders links with correct hrefs", () => {
    render(<CategoriesList />);

    const link = screen.getByText("Software Engineering");
    expect(link).toHaveAttribute("href", "/blog?category=software-engineering");
  });

  it("should call getCategories with the max property", () => {
    render(<CategoriesList max={2} />);
    expect(getCategories).toHaveBeenCalledWith(2);
  });
});
