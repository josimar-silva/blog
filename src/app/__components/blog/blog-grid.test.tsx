import { render, screen } from "@testing-library/react";
import React from "react";

import { BlogGrid } from "./blog-grid";

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

// Mock lucide-react icons
jest.mock("lucide-react", () => ({
  Star: () => <svg data-testid="star-icon" />,
  Calendar: () => <svg data-testid="calendar-icon" />,
  Clock: () => <svg data-testid="clock-icon" />,
}));

// Mock UI components
jest.mock("@/app/__components/ui/badge", () => ({
  Badge: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    variant?: string;
    className?: string;
  }) => (
    <span data-testid="badge" {...props}>
      {children}
    </span>
  ),
}));

jest.mock("@/app/__components/ui/card", () => ({
  Card: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div data-testid="card" {...props}>
      {children}
    </div>
  ),
  CardHeader: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card-header">{children}</div>
  ),
  CardContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card-content">{children}</div>
  ),
}));

const mockFeaturedPosts = [
  {
    id: 1,
    title: "Featured Post 1",
    excerpt: "Excerpt for featured post 1.",
    image: "/assets/featured-1.jpg",
    category: "Technology",
    tags: ["AI", "Machine Learning"],
    date: "2025-01-15T10:00:00Z",
    readTime: "8 min read",
    slug: "featured-post-1",
    featured: true,
  },
];

const mockRegularPosts = [
  {
    id: 2,
    title: "Regular Post 1",
    excerpt: "Excerpt for regular post 1.",
    image: "/assets/regular-1.jpg",
    category: "Science",
    tags: ["Physics", "Quantum"],
    date: "2025-02-20T10:00:00Z",
    readTime: "5 min read",
    slug: "regular-post-1",
    featured: false,
  },
  {
    id: 3,
    title: "Regular Post 2",
    excerpt: "Excerpt for regular post 2.",
    image: "/assets/regular-2.jpg",
    category: "History",
    tags: ["Ancient", "Rome"],
    date: "2025-03-10T10:00:00Z",
    readTime: "12 min read",
    slug: "regular-post-2",
    featured: false,
  },
];

describe("BlogGrid", () => {
  it("renders featured posts section correctly", () => {
    render(
      <BlogGrid
        featuredPosts={mockFeaturedPosts}
        regularPosts={mockRegularPosts}
      />,
    );

    expect(screen.getByText("Featured Posts")).toBeInTheDocument();
    expect(screen.getByTestId("star-icon")).toBeInTheDocument();

    // Check featured post details
    expect(screen.getByText("Featured Post 1")).toBeInTheDocument();
    expect(
      screen.getByText("Excerpt for featured post 1."),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Featured Post 1")).toHaveAttribute(
      "src",
      mockFeaturedPosts[0].image,
    );
    expect(screen.getByText("Technology")).toBeInTheDocument();
    expect(screen.getByText("AI")).toBeInTheDocument();
    expect(screen.getByText("Machine Learning")).toBeInTheDocument();
    expect(screen.getByText("1/15/2025")).toBeInTheDocument();
    expect(screen.getByText("8 min read")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });

  it("renders regular posts section correctly", () => {
    render(
      <BlogGrid
        featuredPosts={mockFeaturedPosts}
        regularPosts={mockRegularPosts}
      />,
    );

    expect(screen.getByText("All Posts")).toBeInTheDocument();

    // Check regular post 1 details
    expect(screen.getByText("Regular Post 1")).toBeInTheDocument();
    expect(screen.getByText("Excerpt for regular post 1.")).toBeInTheDocument();
    expect(screen.getByAltText("Regular Post 1")).toHaveAttribute(
      "src",
      mockRegularPosts[0].image,
    );
    expect(screen.getByText("Science")).toBeInTheDocument();
    expect(screen.getByText("Physics")).toBeInTheDocument();
    expect(screen.getByText("Quantum")).toBeInTheDocument();
    expect(screen.getByText("2/20/2025")).toBeInTheDocument();
    expect(screen.getByText("5 min read")).toBeInTheDocument();

    // Check regular post 2 details
    expect(screen.getByText("Regular Post 2")).toBeInTheDocument();
    expect(screen.getByText("Excerpt for regular post 2.")).toBeInTheDocument();
    expect(screen.getByAltText("Regular Post 2")).toHaveAttribute(
      "src",
      mockRegularPosts[1].image,
    );
    expect(screen.getByText("History")).toBeInTheDocument();
    expect(screen.getByText("Ancient")).toBeInTheDocument();
    expect(screen.getByText("Rome")).toBeInTheDocument();
    expect(screen.getByText("3/10/2025")).toBeInTheDocument();
    expect(screen.getByText("12 min read")).toBeInTheDocument();
  });

  it("does not render featured posts section when featuredPosts is empty", () => {
    render(<BlogGrid featuredPosts={[]} regularPosts={mockRegularPosts} />);

    expect(screen.queryByText("Featured Posts")).not.toBeInTheDocument();
    expect(screen.queryByTestId("star-icon")).not.toBeInTheDocument();
    expect(screen.queryByText("Featured Post 1")).not.toBeInTheDocument();
  });

  it("renders All Posts section even when regularPosts is empty", () => {
    render(<BlogGrid featuredPosts={mockFeaturedPosts} regularPosts={[]} />);

    expect(screen.getByText("All Posts")).toBeInTheDocument();
    expect(screen.queryByText("Regular Post 1")).not.toBeInTheDocument();
  });

  it("navigates to correct blog post slug when clicking on featured post title or image", () => {
    render(
      <BlogGrid
        featuredPosts={mockFeaturedPosts}
        regularPosts={mockRegularPosts}
      />,
    );

    const featuredPostLink = screen
      .getByRole("heading", { name: /Featured Post 1/i })
      .closest("a");
    expect(featuredPostLink).toHaveAttribute("href", "/blog/featured-post-1");

    const featuredPostImageLink = screen
      .getByAltText("Featured Post 1")
      .closest("a");
    expect(featuredPostImageLink).toHaveAttribute(
      "href",
      "/blog/featured-post-1",
    );
  });

  it("navigates to correct blog post slug when clicking on regular post title or image", () => {
    render(
      <BlogGrid
        featuredPosts={mockFeaturedPosts}
        regularPosts={mockRegularPosts}
      />,
    );

    const regularPost1Link = screen
      .getByRole("heading", { name: /Regular Post 1/i })
      .closest("a");
    expect(regularPost1Link).toHaveAttribute("href", "/blog/regular-post-1");

    const regularPost1ImageLink = screen
      .getByAltText("Regular Post 1")
      .closest("a");
    expect(regularPost1ImageLink).toHaveAttribute(
      "href",
      "/blog/regular-post-1",
    );
  });
});
