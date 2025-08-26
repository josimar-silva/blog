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

import { fireEvent, render, screen } from "@testing-library/react";

import { Header } from "./header";

// Mock next-themes
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("Header", () => {
  beforeEach(() => {
    const { useTheme } = require("next-themes");
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: jest.fn(),
    });
  });

  it("renders the logo and name", () => {
    render(<Header />);
    expect(screen.getByText("JS")).toBeInTheDocument();
    expect(screen.getByText("Josimar Silva")).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /Home/i })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: /About/i })).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByRole("link", { name: /Blog/i })).toHaveAttribute(
      "href",
      "/blog",
    );
    expect(screen.getByRole("link", { name: /Projects/i })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByRole("link", { name: /Bookshelf/i })).toHaveAttribute(
      "href",
      "/bookshelf",
    );
    expect(screen.getByRole("link", { name: /Now/i })).toHaveAttribute(
      "href",
      "/now",
    );
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("toggles search bar visibility", () => {
    render(<Header />);
    const searchButton = screen.getByRole("button", { name: /Search/i });
    fireEvent.click(searchButton);
    expect(screen.getByPlaceholderText(/Search posts.../i)).toBeInTheDocument();
    fireEvent.click(searchButton);
    expect(
      screen.queryByPlaceholderText(/Search posts.../i),
    ).not.toBeInTheDocument();
  });

  it("toggles theme", () => {
    const { useTheme } = require("next-themes");
    const setThemeMock = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    });
    render(<Header />);
    const themeToggleButton = screen.getByRole("button", {
      name: /Toggle theme/i,
    });
    fireEvent.click(themeToggleButton);
    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });

  it("opens mobile menu", () => {
    render(<Header />);
    const menuButton = screen.getByRole("button", { name: /Menu/i });
    fireEvent.click(menuButton);
    // Assuming SheetContent makes the navigation links visible
    expect(screen.getByRole("link", { name: /Home/i })).toBeVisible();
  });
});
