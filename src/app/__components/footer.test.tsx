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
