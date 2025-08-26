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

import { Education } from "./education";

describe("Education", () => {
  it("renders the main heading", () => {
    render(<Education />);
    expect(
      screen.getByRole("heading", {
        name: /Education & Certifications/i,
        level: 2,
      }),
    ).toBeInTheDocument();
  });

  it("renders education details", () => {
    render(<Education />);
    expect(
      screen.getByText(/University of California, Berkeley/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Bachelor of Science in Computer Science/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Best Capstone Project Award/i),
    ).toBeInTheDocument();
  });

  it("renders certification details", () => {
    render(<Education />);
    expect(
      screen.getByText(/AWS Certified Developer - Associate/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/React Developer Certification/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Google Analytics Certified/i)).toBeInTheDocument();
  });
});
