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

import { fireEvent, render, screen, within } from "@testing-library/react";

import { BlogList } from "./blog-list";

const mockPosts = [
  {
    id: 1,
    title: "Post 1",
    excerpt: "Excerpt 1",
    category: "Category A",
    date: "2025-01-01",
    readTime: "5 min read",
    slug: "post-1",
  },
  {
    id: 2,
    title: "Post 2",
    excerpt: "Excerpt 2",
    category: "Category B",
    date: "2025-01-02",
    readTime: "7 min read",
    slug: "post-2",
  },
  {
    id: 3,
    title: "Post 3",
    excerpt: "Excerpt 3",
    category: "Category A",
    date: "2025-01-03",
    readTime: "3 min read",
    slug: "post-3",
  },
];

jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: () => null,
  }),
}));

jest.mock("@/lib/categories", () => ({
  getCategories: () => [
    { key: "category-a", name: "Category A", count: 2 },
    { key: "category-b", name: "Category B", count: 1 },
    { key: "category-c", name: "Category C", count: 0 },
  ],
}));

describe("BlogList", () => {
  it("renders all posts by default", () => {
    render(<BlogList posts={mockPosts} />);
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
    expect(screen.getByText("Post 3")).toBeInTheDocument();
    expect(
      screen.getByText(`Showing all ${mockPosts.length} articles`),
    ).toBeInTheDocument();
  });

  it("filters posts by category when a category badge is clicked", () => {
    render(<BlogList posts={mockPosts} />);

    fireEvent.click(
      screen.getByText("Category A", { selector: "div.inline-flex" }),
    );

    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 3")).toBeInTheDocument();
    expect(screen.queryByText("Post 2")).not.toBeInTheDocument();
    expect(
      screen.getByText(`Showing 2 articles in "Category A"`),
    ).toBeInTheDocument();
  });

  it("displays 'No posts found' message when a category has no posts", () => {
    render(<BlogList posts={mockPosts} />);

    fireEvent.click(
      screen.getByText("Category B", { selector: "div.inline-flex" }),
    );
    fireEvent.click(
      screen.getByText("Category A", { selector: "div.inline-flex" }),
    ); // Click back to Category A to ensure it works
    fireEvent.click(
      screen.getByText("Category B", { selector: "div.inline-flex" }),
    ); // Click Category B again

    expect(screen.getByText("Post 2")).toBeInTheDocument();
    expect(screen.queryByText("Post 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Post 3")).not.toBeInTheDocument();
    expect(
      screen.getByText(`Showing 1 article in "Category B"`),
    ).toBeInTheDocument();
  });

  it("displays 'No posts found' message when initially no posts are provided", () => {
    render(<BlogList posts={[]} />);
    expect(
      screen.getByText('No posts found in the "All" category.'),
    ).toBeInTheDocument();
  });

  it("displays correct category counts", () => {
    render(<BlogList posts={mockPosts} />);

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("(3)")).toBeInTheDocument(); // All posts

    expect(
      screen.getByText("Category A", { selector: "div.inline-flex" }),
    ).toBeInTheDocument();
    expect(screen.getByText("(2)")).toBeInTheDocument(); // Category A posts

    expect(
      screen.getByText("Category B", { selector: "div.inline-flex" }),
    ).toBeInTheDocument();
    expect(screen.getByText("(1)")).toBeInTheDocument(); // Category B posts
  });

  it("displays correct post details", () => {
    render(<BlogList posts={mockPosts} />);

    const post1Title = screen.getByText("Post 1");
    const post1Article = post1Title.closest("article");
    expect(post1Title).toBeInTheDocument();
    expect(within(post1Article).getByText("Excerpt 1")).toBeInTheDocument();
    expect(
      within(post1Article).getByText("January 1, 2025"),
    ).toBeInTheDocument();
    expect(
      within(post1Article).getByText("Category A", { selector: "span" }),
    ).toBeInTheDocument();
    expect(within(post1Article).getByText("5 min read")).toBeInTheDocument();

    const post2Title = screen.getByText("Post 2");
    const post2Article = post2Title.closest("article");
    expect(post2Title).toBeInTheDocument();
    expect(within(post2Article).getByText("Excerpt 2")).toBeInTheDocument();
    expect(
      within(post2Article).getByText("January 2, 2025"),
    ).toBeInTheDocument();
    expect(
      within(post2Article).getByText("Category B", { selector: "span" }),
    ).toBeInTheDocument();
    expect(within(post2Article).getByText("7 min read")).toBeInTheDocument();
  });

  it("filters posts by category from URL", () => {
    jest.spyOn(require("next/navigation"), "useSearchParams").mockReturnValue({
      get: () => "category-a",
    });
    render(<BlogList posts={mockPosts} />);
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 3")).toBeInTheDocument();
    expect(screen.queryByText("Post 2")).not.toBeInTheDocument();
    expect(
      screen.getByText(`Showing 2 articles in "Category A"`),
    ).toBeInTheDocument();
  });

  it('shows all posts after clicking "View all posts"', () => {
    render(<BlogList posts={mockPosts} />);

    // Click on a category with no posts
    fireEvent.click(screen.getByText("Category C"));

    // Check that the "no posts" message is shown
    expect(
      screen.getByText('No posts found in the "Category C" category.'),
    ).toBeInTheDocument();

    // Click the "View all posts" button
    fireEvent.click(screen.getByText("View all posts"));

    // Check that all posts are shown again
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
    expect(screen.getByText("Post 3")).toBeInTheDocument();
    expect(
      screen.getByText(`Showing all ${mockPosts.length} articles`),
    ).toBeInTheDocument();
  });
});
