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

import { ContactInfo } from "./contact-info";

describe("ContactInfo", () => {
  it("renders the email contact information", () => {
    render(<ContactInfo />);

    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /hello@johndoe.com/i }),
    ).toHaveAttribute("href", "mailto:hello@johndoe.com");
  });

  it("renders the location information", () => {
    render(<ContactInfo />);

    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    expect(screen.getByText(/San Francisco, CA/i)).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<ContactInfo />);

    expect(screen.getByText(/Find me on/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      "https://github.com/johndoe",
    );
    expect(screen.getByRole("link", { name: /Twitter/i })).toHaveAttribute(
      "href",
      "https://twitter.com/johndoe",
    );
    expect(screen.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/johndoe",
    );
  });
});
