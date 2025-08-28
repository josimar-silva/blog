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

import { TermsOfService } from "./terms-of-service";

describe("TermsOfService", () => {
  it("renders the main heading and key sections", () => {
    render(<TermsOfService />);

    expect(
      screen.getByRole("heading", { name: /Terms of Service/i, level: 1 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Content Licensing/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Code Licensing/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Disclaimer/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Limitations/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /Changes to These Terms/i,
        level: 2,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Contact Information/i, level: 2 }),
    ).toBeInTheDocument();
  });

  it("renders the last updated date", () => {
    render(<TermsOfService />);
    expect(
      screen.getByText(/Last updated: August 28, 2025/i),
    ).toBeInTheDocument();
  });
});
