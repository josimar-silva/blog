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

import { Education } from "./education";

jest.mock("@/lib/me", () => ({
  __esModule: true,
  default: {
    education: {
      degrees: [
        {
          institution: "Test University",
          degree: "Master of Science",
          description: "Test description",
          location: "Test Location",
          period: "2020-2022",
        },
      ],
      certifications: [
        {
          name: "Test Certification",
          issuer: "Test Issuer",
          date: "2023",
          link: "https://example.com/credential",
        },
        {
          name: "Another Test Certification",
          issuer: "Another Test Issuer",
          date: "2024",
        },
      ],
    },
  },
}));

describe("Education", () => {
  it("should render the education section with correct content", () => {
    render(<Education />);

    expect(
      screen.getByRole("heading", { name: /Education & Certifications/i }),
    ).toBeInTheDocument();

    expect(screen.getByText("Master of Science")).toBeInTheDocument();
    expect(screen.getByText("Test University")).toBeInTheDocument();

    expect(screen.getByText("Test Certification")).toBeInTheDocument();
    expect(screen.getByText("Test Issuer")).toBeInTheDocument();

    const credentialLink = screen.getByRole("link", {
      name: /Show credential/i,
    });
    expect(credentialLink).toBeInTheDocument();
    expect(credentialLink).toHaveAttribute(
      "href",
      "https://example.com/credential",
    );
  });
});
