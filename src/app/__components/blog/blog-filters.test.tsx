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
