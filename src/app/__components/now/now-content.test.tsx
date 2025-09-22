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
  it("should render the last updated date", () => {
    render(<NowContent />);
    const lastUpdatedText = screen.getByText(/This page was last updated in/i);
    expect(lastUpdatedText).toBeInTheDocument();
    expect(screen.getByText("January 2025")).toBeInTheDocument();
  });

  it("should render the work content", () => {
    render(<NowContent />);
    expect(
      screen.getByText(
        /I'm currently working as a Senior Full-Stack Developer at TechCorp/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the learning content", () => {
    render(<NowContent />);
    expect(
      screen.getByText(
        /I'm diving deep into Rust after participating in the Rinha de Backend challenge/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the projects content", () => {
    render(<NowContent />);
    expect(
      screen.getByText(
        /Working on a new open-source rate limiting library for Node.js/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the reading content", () => {
    render(<NowContent />);
    expect(
      screen.getByText(/Currently reading "Designing Data-Intensive Applications"/i),
    ).toBeInTheDocument();
  });

  it("should render the life content", () => {
    render(<NowContent />);
    expect(
      screen.getByText(
        /Living in San Francisco and really enjoying the tech community here/i,
      ),
    ).toBeInTheDocument();
  });
});