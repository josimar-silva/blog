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

import { BookReview } from "./book-review";

const mockBook = {
  title: "Sample Book",
  author: "Josimar Silva",
  type: "Book" as const,
  category: "Software Engineering",
  dateRead: "2025-08-15T00:00:00.000Z",
  rating: 4,
  status: "Completed" as const,
  pages: 350,
  isbn: "978-3-16-148410-0",
  publisher: "O'Reilly",
  yearPublished: 2022,
  notes:
    "This is a great book about system design.\n\nIt covers a lot of topics.",
  keyTakeaways: [
    "Scalability is important.",
    "Think about trade-offs.",
    "Design for failure.",
  ],
  difficulty: "Intermediate",
  timeToRead: "2 weeks",
  links: {
    amazon: "https://amazon.com/sample-book",
    goodreads: "https://goodreads.com/sample-book",
    publisher: "https://oreilly.com/sample-book",
  },
  relatedBooks: ["Another Design Book"],
  quotes: ["A famous quote from the book."],
};

const mockPaper = {
  title: "Attention is All You Need",
  author: "Ashish Vaswani et al.",
  type: "Paper" as const,
  category: "Machine Learning",
  dateRead: "2025-07-20T00:00:00.000Z",
  rating: 5,
  status: "Completed" as const,
  pages: 15,
  venue: "NeurIPS 2017",
  citations: "100000+",
  notes: "The original Transformer paper.",
  keyTakeaways: ["Self-attention mechanism.", "Positional encodings."],
  difficulty: "Advanced",
  timeToRead: "3 days",
  links: {
    arxiv: "https://arxiv.org/abs/1706.03762",
    paperswithcode:
      "https://paperswithcode.com/paper/attention-is-all-you-need",
    github: "https://github.com/tensorflow/tensor2tensor",
    online: "https://research.google/pubs/pub46201/",
  },
  relatedPapers: ["BERT: Pre-training of Deep Bidirectional Transformers"],
};

describe("BookReview", () => {
  describe("when displaying a book", () => {
    beforeEach(() => {
      render(<BookReview book={mockBook} />);
    });

    it("renders book title and author", () => {
      expect(
        screen.getByRole("heading", { name: "Sample Book" }),
      ).toBeInTheDocument();
      expect(screen.getByText("by Josimar Silva")).toBeInTheDocument();
    });

    it("renders book-specific metadata", () => {
      expect(screen.getByText("Book")).toBeInTheDocument();
      expect(screen.getByText("350 pages")).toBeInTheDocument();
      expect(
        screen.getByText(/Published by O'Reilly in 2022/),
      ).toBeInTheDocument();
      expect(screen.getByText(/ISBN: 978-3-16-148410-0/)).toBeInTheDocument();
    });

    it("renders the rating", () => {
      expect(screen.getByText("4/5")).toBeInTheDocument();
    });

    it("renders external links for the book", () => {
      expect(screen.getByRole("link", { name: /Amazon/i })).toHaveAttribute(
        "href",
        mockBook.links.amazon,
      );
      expect(screen.getByRole("link", { name: /Goodreads/i })).toHaveAttribute(
        "href",
        mockBook.links.goodreads,
      );
      expect(screen.getByRole("link", { name: /Publisher/i })).toHaveAttribute(
        "href",
        mockBook.links.publisher,
      );
    });

    it("renders the review notes and key takeaways", () => {
      expect(
        screen.getByText("This is a great book about system design."),
      ).toBeInTheDocument();
      expect(
        screen.getByText("It covers a lot of topics."),
      ).toBeInTheDocument();
      expect(screen.getByText("Scalability is important.")).toBeInTheDocument();
    });

    it("renders related books", () => {
      expect(screen.getByText("Related Reading")).toBeInTheDocument();
      expect(screen.getByText("• Another Design Book")).toBeInTheDocument();
    });
  });

  describe("when displaying a paper", () => {
    beforeEach(() => {
      render(<BookReview book={mockPaper} />);
    });

    it("renders paper title and author", () => {
      expect(
        screen.getByRole("heading", { name: "Attention is All You Need" }),
      ).toBeInTheDocument();
      expect(screen.getByText("by Ashish Vaswani et al.")).toBeInTheDocument();
    });

    it("renders paper-specific metadata", () => {
      expect(screen.getByText("Paper")).toBeInTheDocument();
      expect(screen.getByText("15 pages")).toBeInTheDocument();
      expect(screen.getByText(/Published in NeurIPS 2017/)).toBeInTheDocument();
      expect(screen.getByText(/• 100000\+ citations/)).toBeInTheDocument();
    });

    it("renders external links for the paper", () => {
      expect(screen.getByRole("link", { name: /arXiv/i })).toHaveAttribute(
        "href",
        mockPaper.links.arxiv,
      );
      expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
        "href",
        mockPaper.links.github,
      );
      expect(
        screen.getByRole("link", { name: /Read Online/i }),
      ).toHaveAttribute("href", mockPaper.links.online);
    });

    it("renders related papers", () => {
      expect(screen.getByText("Related Reading")).toBeInTheDocument();
      expect(
        screen.getByText(
          "• BERT: Pre-training of Deep Bidirectional Transformers",
        ),
      ).toBeInTheDocument();
    });
  });

  it("has a back to bookshelf link", () => {
    render(<BookReview book={mockBook} />);
    const backLink = screen.getByRole("link", { name: /Back to Bookshelf/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/bookshelf");
  });

  describe("when rendering markdown notes", () => {
    it("should render markdown bold text", () => {
      const bookWithMarkdown = {
        ...mockBook,
        notes: "This is **bold** text",
      };
      render(<BookReview book={bookWithMarkdown} />);
      const boldElement = screen.getByText("bold");
      expect(boldElement.tagName).toBe("STRONG");
    });

    it("should render markdown italic text", () => {
      const bookWithMarkdown = {
        ...mockBook,
        notes: "This is _italic_ text",
      };
      render(<BookReview book={bookWithMarkdown} />);
      const italicElement = screen.getByText("italic");
      expect(italicElement.tagName).toBe("EM");
    });

    it("should render markdown links with proper attributes", () => {
      const bookWithMarkdown = {
        ...mockBook,
        notes: "Check out [this link](https://example.com) for more info",
      };
      render(<BookReview book={bookWithMarkdown} />);
      const link = screen.getByRole("link", { name: "this link" });
      expect(link).toHaveAttribute("href", "https://example.com");
    });

    it("should render markdown headings", () => {
      const bookWithMarkdown = {
        ...mockBook,
        notes: "## Section Title\n\nSome content here",
      };
      render(<BookReview book={bookWithMarkdown} />);
      expect(
        screen.getByRole("heading", { name: "Section Title", level: 2 }),
      ).toBeInTheDocument();
    });

    it("should render markdown unordered lists", () => {
      const bookWithMarkdown = {
        ...mockBook,
        notes: "Key points:\n\n- First point\n- Second point\n- Third point",
      };
      render(<BookReview book={bookWithMarkdown} />);
      // Check that list items are rendered
      expect(screen.getByText("First point")).toBeInTheDocument();
      expect(screen.getByText("Second point")).toBeInTheDocument();
      expect(screen.getByText("Third point")).toBeInTheDocument();
      // Verify there are lists (including key takeaways)
      expect(screen.getAllByRole("list").length).toBeGreaterThanOrEqual(1);
    });

    it("should render markdown code inline", () => {
      const bookWithMarkdown = {
        ...mockBook,
        notes: "Use the `useState` hook for state management",
      };
      render(<BookReview book={bookWithMarkdown} />);
      const code = screen.getByText("useState");
      expect(code.tagName).toBe("CODE");
    });

    it("should render markdown code blocks", () => {
      const bookWithMarkdown = {
        ...mockBook,
        notes:
          "Example code:\n\n```javascript\nconst greeting = 'Hello';\nconsole.log(greeting);\n```",
      };
      render(<BookReview book={bookWithMarkdown} />);
      const codeElement = screen.getByRole("code");
      expect(codeElement).toHaveTextContent(/const greeting = 'Hello';/);
      expect(codeElement).toHaveTextContent(/console\.log\(greeting\);/);
    });

    it("should render markdown blockquotes", () => {
      const bookWithMarkdown = {
        ...mockBook,
        notes: "> This is a quote from the book",
      };
      render(<BookReview book={bookWithMarkdown} />);
      const quote = screen.getByText("This is a quote from the book");
      expect(quote.closest("blockquote")).toBeInTheDocument();
    });

    it("should handle complex markdown with multiple elements", () => {
      const bookWithMarkdown = {
        ...mockBook,
        notes:
          "# Introduction\n\nThis book covers **important** topics:\n\n- Design patterns\n- Best practices\n\nLearn more at [official site](https://example.com).",
      };
      render(<BookReview book={bookWithMarkdown} />);
      expect(
        screen.getByRole("heading", { name: "Introduction" }),
      ).toBeInTheDocument();
      expect(screen.getByText("important").tagName).toBe("STRONG");
      expect(screen.getByText("Design patterns")).toBeInTheDocument();
      expect(screen.getByText("Best practices")).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "official site" }),
      ).toHaveAttribute("href", "https://example.com");
    });
  });
});
