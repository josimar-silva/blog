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
import React from "react";

import { BlogPost } from "./blog-post";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={props.alt || ""} {...props} />;
  },
}));

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

// Mock BlogPostContent as it's a separate component
jest.mock("./blog-post-content", () => ({
  __esModule: true,
  default: ({ content }: { content: string }) => (
    <div data-testid="blog-post-content">{content}</div>
  ),
}));

const mockPost = {
  slug: "test-blog-post-title",
  title: "Test Blog Post Title",
  content: "This is the content of the test blog post.",
  date: "2025-08-25T10:00:00Z",
  readTime: "10 min read",
  category: "Technology",
  author: "Josimar Silva",
  image: "/assets/test-image.jpg",
  tags: ["React", "Next.js", "Testing"],
};

describe("BlogPost", () => {
  it("renders blog post details correctly", () => {
    render(<BlogPost post={mockPost} />);

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.author)).toBeInTheDocument();
    expect(screen.getByText("Author")).toBeInTheDocument();
    expect(screen.getByText("Technology")).toBeInTheDocument(); // Category badge
    expect(screen.getByText("React")).toBeInTheDocument(); // Tag badge
    expect(screen.getByText("Next.js")).toBeInTheDocument(); // Tag badge
    expect(screen.getByText("Testing")).toBeInTheDocument(); // Tag badge
    expect(screen.getByText("25/08/2025")).toBeInTheDocument(); // Formatted date
    expect(screen.getByText(mockPost.readTime)).toBeInTheDocument();

    const postImage = screen.getByAltText(mockPost.title);
    expect(postImage).toBeInTheDocument();
    expect(postImage).toHaveAttribute("src", mockPost.image);

    const authorImage = screen.getByAltText(mockPost.author);
    expect(authorImage).toBeInTheDocument();
    expect(authorImage).toHaveAttribute("src", "/assets/placeholder.svg");
    expect(authorImage).toHaveAttribute("height", "40");
    expect(authorImage).toHaveAttribute("width", "40");

    expect(screen.getByTestId("blog-post-content")).toHaveTextContent(
      mockPost.content,
    );
  });

  it("navigates back to blog page when 'Back to Blog' button is clicked", () => {
    render(<BlogPost post={mockPost} />);

    const backButton = screen.getByRole("link", { name: /Back to Blog/i });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute("href", "/blog");
  });

  it("displays the ShareModal button", () => {
    render(<BlogPost post={mockPost} />);

    const shareModalButton = screen.getByRole("button", { name: /share/i });
    expect(shareModalButton).toBeInTheDocument();
  });
});
