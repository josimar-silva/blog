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

import { fireEvent, render, screen } from "@testing-library/react";

import { BookshelfList } from "./bookshelf-list";

const mockBooks = [
  {
    id: 1,
    title: "Newest Book",
    author: "Author 1",
    type: "Book" as const,
    category: "Category 1",
    dateRead: "2025-02-01",
    rating: 4,
    status: "Completed" as const,
    pages: 100,
    notes: "Notes for book 1...",
    keyTakeaways: ["Takeaway 1"],
    recommendedFor: "Everyone",
    slug: "book-1",
    links: {
      amazon: "https://amazon.com/book-1",
    },
  },
  {
    id: 2,
    title: "Oldest Book",
    author: "Author 2",
    type: "Paper" as const,
    category: "Category 2",
    dateRead: "2025-01-01",
    rating: 5,
    status: "Completed" as const,
    pages: 20,
    notes: "Notes for paper 1...",
    keyTakeaways: ["Takeaway 2"],
    recommendedFor: "Researchers",
    slug: "paper-1",
    links: {
      arxiv: "https://arxiv.org/abs/paper-1",
    },
  },
  {
    id: 3,
    title: "Another Book",
    author: "Author 3",
    type: "Book" as const,
    category: "Category 1",
    dateRead: "2025-01-15",
    rating: 3,
    status: "In Progress" as const,
    pages: 300,
    notes: "Notes for book 2...",
    keyTakeaways: ["Takeaway 3"],
    recommendedFor: "Developers",
    slug: "book-2",
    links: {
      goodreads: "https://goodreads.com/book-2",
    },
  },
];

describe("BookshelfList", () => {
  it("renders all books by default, sorted by date", () => {
    render(<BookshelfList books={mockBooks} />);
    const bookTitles = screen.getAllByRole("heading", { level: 2 });
    expect(bookTitles).toHaveLength(3);
    expect(bookTitles[0]).toHaveTextContent("Newest Book");
    expect(bookTitles[1]).toHaveTextContent("Another Book");
    expect(bookTitles[2]).toHaveTextContent("Oldest Book");
  });

  it("filters books when a category is clicked", () => {
    render(<BookshelfList books={mockBooks} />);
    fireEvent.click(screen.getByTestId("category-filter-Category 1"));
    const bookTitles = screen.getAllByRole("heading", { level: 2 });
    expect(bookTitles).toHaveLength(2);
    expect(screen.getByText("Newest Book")).toBeInTheDocument();
    expect(screen.getByText("Another Book")).toBeInTheDocument();
    expect(screen.queryByText("Oldest Book")).not.toBeInTheDocument();
  });

  it('shows all books when "All" category is clicked after a filter', () => {
    render(<BookshelfList books={mockBooks} />);
    fireEvent.click(screen.getByTestId("category-filter-Category 1"));
    fireEvent.click(screen.getByTestId("category-filter-All"));
    const bookTitles = screen.getAllByRole("heading", { level: 2 });
    expect(bookTitles).toHaveLength(3);
  });

  it("displays the correct count for each category", () => {
    render(<BookshelfList books={mockBooks} />);
    expect(screen.getByTestId("category-filter-All")).toHaveTextContent("(3)");
    expect(screen.getByTestId("category-filter-Category 1")).toHaveTextContent(
      "(2)",
    );
    expect(screen.getByTestId("category-filter-Category 2")).toHaveTextContent(
      "(1)",
    );
  });

  it("renders a link to the full review", () => {
    render(<BookshelfList books={mockBooks} />);
    const reviewLinks = screen.getAllByRole("link", {
      name: /Read Full Review/i,
    });
    expect(reviewLinks[0]).toHaveAttribute("href", "/bookshelf/book-1");
  });
});
