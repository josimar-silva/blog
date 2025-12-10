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

import { FormattedDate } from "./formatted-date";

describe("FormattedDate", () => {
  it("should render semantic time element", () => {
    render(<FormattedDate date="2025-01-15" />);
    const timeElement = screen.getByText("15/01/2025");
    expect(timeElement.tagName).toBe("TIME");
  });

  it("should display formatted date using formatDate utility", () => {
    render(<FormattedDate date="2025-01-15" />);
    expect(screen.getByText("15/01/2025")).toBeInTheDocument();
  });

  it("should have correct datetime attribute in ISO format", () => {
    render(<FormattedDate date="2025-01-15" />);
    const timeElement = screen.getByText("15/01/2025");
    expect(timeElement).toHaveAttribute("dateTime", "2025-01-15");
  });

  it("should accept Date object", () => {
    const date = new Date("2025-12-31T12:00:00Z");
    render(<FormattedDate date={date} />);
    expect(screen.getByText("31/12/2025")).toBeInTheDocument();
  });

  it("should apply custom className if provided", () => {
    render(<FormattedDate date="2025-01-15" className="custom-class" />);
    const timeElement = screen.getByText("15/01/2025");
    expect(timeElement).toHaveClass("custom-class");
  });

  it("should handle ISO 8601 datetime strings", () => {
    render(<FormattedDate date="2025-06-15T14:30:00Z" />);
    expect(screen.getByText("15/06/2025")).toBeInTheDocument();
    const timeElement = screen.getByText("15/06/2025");
    expect(timeElement).toHaveAttribute("dateTime", "2025-06-15");
  });
});
