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

import type React from "react";

// Mock CSS imports
jest.mock("./globals.css", () => ({}));

// Mock the font loader to verify configuration
const mockInter = jest.fn(() => ({ className: "inter" }));
jest.mock("next/font/google", () => ({
  Inter: mockInter,
}));

// Mock ThemeProvider
jest.mock("@/app/__components/theme-provider", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

describe("RootLayout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("configures Inter font with display swap for performance", () => {
    // Import the layout to trigger font configuration
    require("./layout");

    expect(mockInter).toHaveBeenCalledWith(
      expect.objectContaining({
        subsets: ["latin"],
        display: "swap",
      }),
    );
  });

  it("exports metadata with preconnect hints for external resources", () => {
    const { metadata } = require("./layout");

    expect(metadata.other).toBeDefined();
    expect(metadata.other.preconnect).toContain("https://fonts.googleapis.com");
    expect(metadata.other.preconnect).toContain("https://fonts.gstatic.com");
  });

  it("exports metadata with image preload for LCP element", () => {
    const { metadata } = require("./layout");

    expect(metadata.other).toBeDefined();
    expect(metadata.other.imagePreload).toBeDefined();
    expect(metadata.other.imagePreload).toContain("/assets/me-300x300.jpeg");
  });
});
