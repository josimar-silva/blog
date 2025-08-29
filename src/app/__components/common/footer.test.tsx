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
import Link from "next/link";
import React from "react";

import { Footer } from "./footer";

jest.mock("next/link", () => {
  const MockLink = ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

jest.mock("@/app/__components/common/categories-list", () => {
  const MockCategoriesList = () => (
    <ul>
      <li>
        <Link
          href="/blog/category/react"
          className="text-muted-foreground hover:text-foreground"
        >
          React
        </Link>
      </li>
      <li>
        <Link
          href="/blog/category/next.js"
          className="text-muted-foreground hover:text-foreground"
        >
          Next.js
        </Link>
      </li>
    </ul>
  );
  MockCategoriesList.displayName = "MockCategoriesList";
  return MockCategoriesList;
});

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("should contain copyright text", () => {
    expect(
      screen.getByText(/josimar silva\. all rights reserved\./i),
    ).toBeInTheDocument();
  });

  it("should contain navigation links", () => {
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
  });

  it("should contain social media links", () => {
    expect(screen.getByTestId("github-link")).toHaveAttribute(
      "href",
      "https://github.com/josimar-silva",
    );
    expect(screen.getByTestId("linkedin-link")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/josimar-silvx",
    );
    expect(screen.getByTestId("mail-link")).toHaveAttribute(
      "href",
      "mailto:me@josimar-silva.com",
    );
  });

  it("should contain category links", () => {
    expect(screen.getByRole("link", { name: /react/i })).toHaveAttribute(
      "href",
      "/blog/category/react",
    );
    expect(screen.getByRole("link", { name: /next\.js/i })).toHaveAttribute(
      "href",
      "/blog/category/next.js",
    );
  });

  it("should contain legal links", () => {
    expect(
      screen.getByRole("link", { name: /privacy policy/i }),
    ).toHaveAttribute("href", "/privacy");
    expect(
      screen.getByRole("link", { name: /terms of service/i }),
    ).toHaveAttribute("href", "/terms");
  });

  it("should contain rss feed link", () => {
    expect(screen.getByRole("link", { name: /rss feed/i })).toHaveAttribute(
      "href",
      "/rss",
    );
  });
});
