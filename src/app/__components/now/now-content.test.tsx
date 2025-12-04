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
    expect(screen.getByText("December 2025")).toBeInTheDocument();
  });

  it("should render the work content", () => {
    render(<NowContent />);
    expect(
      screen.getByText(
        /Working as a Staff Software Engineer at FRIDAY Insurance in Berlin/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the learning content", () => {
    render(<NowContent />);
    expect(
      screen.getByText(
        /Refreshing Data Structures and Algorithms as part of my Kaizen Journal project/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the projects content", () => {
    render(<NowContent />);
    expect(
      screen.getByText(
        /Maintaining my Kubernetes homelab built with Talos OS/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the reading content", () => {
    render(<NowContent />);
    expect(
      screen.getByText(
        /Actively following the latest developments in Kubernetes/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the life content", () => {
    render(<NowContent />);
    expect(
      screen.getByText(
        /Improving my German proficiency to apply for German citizenship/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the goals content", () => {
    render(<NowContent />);
    expect(screen.getByText(/Read 12 books in 2025/i)).toBeInTheDocument();
  });
});
