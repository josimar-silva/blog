import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BlogFilters } from "./blog-filters";

describe("BlogFilters", () => {
  it("should render all filter elements correctly", () => {
    render(<BlogFilters />);

    // Check category filters
    expect(screen.getByText("Filter by Category")).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();

    // Check sort select
    expect(screen.getByText("Newest First")).toBeInTheDocument(); // Default value

    // Check view mode buttons
    expect(
      screen.getByRole("button", { name: /grid view/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /list view/i }),
    ).toBeInTheDocument();
  });

  it("should change selected category when a badge is clicked", async () => {
    const user = userEvent.setup();
    render(<BlogFilters />);

    const reactBadge = screen.getByText("React");
    await user.click(reactBadge);

    expect(reactBadge).toHaveClass("bg-primary"); // Assuming 'default' variant applies this class
    expect(screen.getByText("All")).toHaveClass("bg-secondary"); // Assuming 'secondary' variant applies this class
  });

  it("should change view mode when buttons are clicked", async () => {
    const user = userEvent.setup();
    render(<BlogFilters />);

    const listButton = screen.getByRole("button", { name: /list view/i });
    await user.click(listButton);

    expect(listButton).toHaveClass("bg-primary"); // Assuming 'default' variant applies this class
    expect(screen.getByRole("button", { name: /grid view/i })).not.toHaveClass(
      "bg-primary",
    ); // Ensure default variant is removed
    expect(screen.getByRole("button", { name: /grid view/i })).toHaveClass(
      "hover:bg-accent",
    ); // Check for ghost variant class
  });
});
