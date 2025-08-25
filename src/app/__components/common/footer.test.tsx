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

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Footer } from "./footer";

describe("Footer", () => {
  it("should render the footer with correct content and links", () => {
    render(<Footer />);

    // Check copyright text
    expect(
      screen.getByText(/josimar silva\. all rights reserved\./i),
    ).toBeInTheDocument();

    // Check navigation links
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByRole("link", { name: /blog/i })).toHaveAttribute(
      "href",
      "/blog",
    );
    expect(screen.getByRole("link", { name: /bookshelf/i })).toHaveAttribute(
      "href",
      "/bookshelf",
    );
    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute(
      "href",
      "/contact",
    );

    // Check social media links
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com",
    );
    expect(screen.getByRole("link", { name: /twitter/i })).toHaveAttribute(
      "href",
      "https://twitter.com",
    );
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://linkedin.com",
    );
    expect(screen.getByRole("link", { name: /mail/i })).toHaveAttribute(
      "href",
      "mailto:hello@johndoe.com",
    );

    // Check category links (sample a few)
    expect(screen.getByRole("link", { name: /react/i })).toHaveAttribute(
      "href",
      "/blog/category/react",
    );
    expect(screen.getByRole("link", { name: /next\.js/i })).toHaveAttribute(
      "href",
      "/blog/category/nextjs",
    );

    // Check legal links
    expect(
      screen.getByRole("link", { name: /privacy policy/i }),
    ).toHaveAttribute("href", "/privacy");
    expect(
      screen.getByRole("link", { name: /terms of service/i }),
    ).toHaveAttribute("href", "/terms");
    expect(screen.getByRole("link", { name: /rss feed/i })).toHaveAttribute(
      "href",
      "/rss",
    );
  });
});
