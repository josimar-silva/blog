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

import { render, screen, within } from "@testing-library/react";
import React from "react";

import BlogPostContent from "./blog-post-content";

// Mock useSyncExternalStore to always return mounted=true in tests
jest.spyOn(React, "useSyncExternalStore").mockImplementation(() => true);

describe("BlogPostContent", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("renders basic markdown content", () => {
    const content = "Hello **world**";
    render(<BlogPostContent content={content} />);

    expect(screen.getByText(/Hello/)).toBeInTheDocument();
    expect(screen.getByText(/world/)).toBeInTheDocument();
  });

  it("renders markdown headings", () => {
    const content = "## Test Heading";
    render(<BlogPostContent content={content} />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Test Heading" }),
    ).toBeInTheDocument();
  });

  it("renders code blocks with syntax highlighting", () => {
    const content = "```javascript\nconst x = 1;\n```";
    const { container } = render(<BlogPostContent content={content} />);

    const preElement = container.querySelector("pre");
    expect(preElement).toBeInTheDocument();

    const codeElement = preElement?.querySelector("code");
    expect(codeElement).toBeInTheDocument();

    const highlightSpans = codeElement?.querySelectorAll("span");
    expect(highlightSpans && highlightSpans.length > 0).toBe(true);
  });

  it("renders inline code without language specifier", () => {
    const content = "Use the `console.log` function";
    render(<BlogPostContent content={content} />);

    const inlineCode = screen.getByText("console.log");
    expect(inlineCode.tagName.toLowerCase()).toBe("code");
  });

  it("applies prose styling classes", () => {
    const content = "Test content";
    const { container } = render(<BlogPostContent content={content} />);

    const markdownDiv = (container.firstChild as HTMLElement)?.querySelector(
      "div",
    );
    expect(markdownDiv).toHaveClass("prose");
    expect(markdownDiv).toHaveClass("prose-gray");
    expect(markdownDiv).toHaveClass("dark:prose-invert");
  });

  it("renders GitHub Flavored Markdown tables", () => {
    const content = `
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
`;
    render(<BlogPostContent content={content} />);
    const table = screen.getByRole("table");
    const tableHeader = within(table).getByRole("columnheader", {
      name: /Header 1/i,
    });
    const tableCell = within(table).getByRole("cell", { name: /Cell 1/i });

    expect(table).toBeInTheDocument();
    expect(tableHeader).toBeInTheDocument();
    expect(tableCell).toBeInTheDocument();
  });

  it("renders links correctly", () => {
    const content = "[Click here](https://example.com)";
    render(<BlogPostContent content={content} />);

    const link = screen.getByRole("link", { name: "Click here" });
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("renders blockquotes", () => {
    const content = "> This is a quote";
    render(<BlogPostContent content={content} />);

    const quoteText = screen.getByText("This is a quote");
    const blockquoteElement = quoteText.closest("blockquote");
    expect(blockquoteElement).toBeInTheDocument();
  });

  it("renders lists correctly", () => {
    const content = `
- Item 1
- Item 2
- Item 3
`;
    render(<BlogPostContent content={content} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

    const listItems = within(listElement).getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent("Item 1");
    expect(listItems[1]).toHaveTextContent("Item 2");
    expect(listItems[2]).toHaveTextContent("Item 3");
  });
});
