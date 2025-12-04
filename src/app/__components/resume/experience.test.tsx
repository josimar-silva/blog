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

import { Experience } from "./experience";

describe("Experience", () => {
  it("renders the main heading", () => {
    render(<Experience />);
    expect(
      screen.getByRole("heading", { name: /Work Experience/i, level: 2 }),
    ).toBeInTheDocument();
  });

  it("renders all experience entries", () => {
    render(<Experience />);
    expect(screen.getAllByText(/FRIDAY Insurance/i).length).toBe(2);
    expect(screen.getByText(/Youse Insurances/i)).toBeInTheDocument();
    expect(screen.getByText(/Abaco Consultores/i)).toBeInTheDocument();
  });

  it("renders key achievements for an experience entry", () => {
    render(<Experience />);
    expect(
      screen.getAllByText(
        /Delivered FRIDAY's first French insurance product with high-availability, high-performance APIs/i,
      ).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(
        /Implemented BiPRO standard integration to exchange documents with third parties for German insurance products/i,
      ).length,
    ).toBeGreaterThan(0);
  });
});
