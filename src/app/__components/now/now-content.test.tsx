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

import { NowContent } from "./now-content";

describe("NowContent", () => {
  it("renders the main sections", () => {
    render(<NowContent />);

    expect(
      screen.getByRole("heading", { name: /Work/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Learning/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Current Projects/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Reading/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Life/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Goals for 2025/i, level: 2 }),
    ).toBeInTheDocument();
  });

  it("renders the last updated date", () => {
    render(<NowContent />);
    expect(
      screen.getByText(/This page was last updated in/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/January 2025/i)).toBeInTheDocument();
  });

  it("renders the link to the now page movement", () => {
    render(<NowContent />);
    const link = screen.getByRole("link", {
      name: /Derek Sivers' now page movement/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://nownownow.com/about");
  });
});
