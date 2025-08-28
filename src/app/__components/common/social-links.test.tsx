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

import { SocialLinks } from "./social-links";

describe("SocialLinks", () => {
  it("renders all social media links with correct attributes", () => {
    render(<SocialLinks />);

    // Check GitHub link
    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/josimar-silva",
    );
    expect(githubLink).toHaveAttribute("aria-label", "GitHub");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    // Check LinkedIn link
    const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/josimar-silvx",
    );
    expect(linkedinLink).toHaveAttribute("aria-label", "LinkedIn");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    // Check Goodreads link
    const goodreadsLink = screen.getByRole("link", { name: /Goodreads/i });
    expect(goodreadsLink).toBeInTheDocument();
    expect(goodreadsLink).toHaveAttribute(
      "href",
      "https://www.goodreads.com/josimar-silva",
    );
    expect(goodreadsLink).toHaveAttribute("aria-label", "Goodreads");
    expect(goodreadsLink).toHaveAttribute("target", "_blank");
    expect(goodreadsLink).toHaveAttribute("rel", "noopener noreferrer");

    // Check E-mail link
    const emailLink = screen.getByRole("link", { name: /Mail/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:me@josimar-silva.com");
    expect(emailLink).toHaveAttribute("aria-label", "Mail");
  });

  it("applies custom className", () => {
    render(<SocialLinks className="custom-class" />);
    const socialLinksContainer = screen.getByTestId("social-links");
    expect(socialLinksContainer).toHaveClass("custom-class");
  });
});
