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

import { getFeaturedPosts } from "@/lib/posts";

import { FeaturedPosts } from "./featured-posts";

// Mock the posts library
jest.mock("@/lib/posts");

const mockPosts = [
  {
    slug: "post-1",
    title: "Featured Post 1",
    image: "/path/to/image1.jpg",
    category: "Category 1",
    date: "2023-01-01",
    readTime: "5 min read",
    excerpt: "This is the first featured post.",
  },
  {
    slug: "post-2",
    title: "Featured Post 2",
    image: "/path/to/image2.jpg",
    category: "Category 2",
    date: "2023-01-02",
    readTime: "10 min read",
    excerpt: "This is the second featured post.",
  },
];

describe("FeaturedPosts", () => {
  beforeEach(() => {
    (getFeaturedPosts as jest.Mock).mockResolvedValue(mockPosts);
  });

  it("renders the heading and subheading", async () => {
    render(await FeaturedPosts());

    expect(screen.getByTestId("featured-posts-title")).toHaveTextContent(
      "Featured Posts",
    );
    expect(screen.getByTestId("featured-posts-subtitle")).toBeInTheDocument();
  });

  it("renders a list of featured posts", async () => {
    render(await FeaturedPosts());

    const postItems = screen.getAllByTestId("featured-post-item");
    expect(postItems).toHaveLength(2);

    expect(screen.getByText("Featured Post 1")).toBeInTheDocument();
    expect(screen.getByText("Featured Post 2")).toBeInTheDocument();
  });

  it("renders a link to each post", async () => {
    render(await FeaturedPosts());

    const postItems = screen.getAllByTestId("featured-post-item");
    const firstPost = postItems[0];

    const heading = within(firstPost).getByRole("heading", {
      name: /Featured Post 1/i,
    });
    expect(heading.closest("a")).toHaveAttribute("href", "/blog/post-1");

    const image = within(firstPost).getByAltText(/Featured Post 1/i);
    expect(image.closest("a")).toHaveAttribute("href", "/blog/post-1");
  });

  it("renders the 'View All Posts' button", async () => {
    render(await FeaturedPosts());

    const allPostsButton = screen.getByTestId("all-posts-button");
    expect(allPostsButton).toBeInTheDocument();
    const link = within(allPostsButton).getByRole("link", {
      name: /View All Posts/i,
    });
    expect(link).toHaveAttribute("href", "/blog");
  });

  it("renders correctly when there are no featured posts", async () => {
    (getFeaturedPosts as jest.Mock).mockResolvedValue([]);
    render(await FeaturedPosts());

    expect(screen.queryByTestId("featured-post-item")).not.toBeInTheDocument();
  });

  it("renders post images with responsive sizes for mobile optimization", async () => {
    render(await FeaturedPosts());

    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("sizes");
      const sizes = img.getAttribute("sizes");
      expect(sizes).toContain("100vw");
      expect(sizes).toContain("400px");
    });
  });
});
