import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { BlogHero } from "./blog-hero";

describe("BlogHero", () => {
  it("renders the blog hero section with correct heading and description", () => {
    render(<BlogHero />);

    // Check if the main heading is rendered
    expect(screen.getByRole("heading", { name: /blog/i })).toBeInTheDocument();

    // Check if the descriptive paragraph is rendered
    expect(
      screen.getByText(
        /thoughts on web development, technology, and building great software./i,
      ),
    ).toBeInTheDocument();
  });
});
