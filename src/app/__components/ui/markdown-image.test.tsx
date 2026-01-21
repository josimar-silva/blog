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

import { MarkdownImage } from "./markdown-image";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe("MarkdownImage", () => {
  it("should render image with required props", () => {
    render(
      <MarkdownImage
        src="/assets/blog/posts/test-image.png"
        alt="Test image"
      />,
    );

    const img = screen.getByAltText("Test image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/blog/posts/test-image.png");
  });

  it("should preserve alt text from markdown", () => {
    render(
      <MarkdownImage
        src="/assets/image.png"
        alt="Important image description"
      />,
    );

    expect(
      screen.getByAltText("Important image description"),
    ).toBeInTheDocument();
  });

  it("should set responsive sizes attribute", () => {
    render(<MarkdownImage src="/assets/image.png" alt="Test" />);

    const img = screen.getByAltText("Test");
    expect(img).toHaveAttribute(
      "sizes",
      "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px",
    );
  });

  it("should apply article image classes", () => {
    render(<MarkdownImage src="/assets/image.png" alt="Test" />);

    const img = screen.getByAltText("Test");
    expect(img).toHaveClass("rounded-lg", "object-cover");
  });

  it("should handle missing alt text gracefully", () => {
    const { container } = render(<MarkdownImage src="/assets/image.png" />);

    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
  });

  it("should support title attribute", () => {
    render(
      <MarkdownImage src="/assets/image.png" alt="Test" title="Image title" />,
    );

    const img = screen.getByAltText("Test");
    expect(img).toHaveAttribute("title", "Image title");
  });

  it("should set default width and height for aspect ratio", () => {
    render(<MarkdownImage src="/assets/image.png" alt="Test" />);

    const img = screen.getByAltText("Test");
    expect(img).toHaveAttribute("width");
    expect(img).toHaveAttribute("height");
  });

  it("should use custom width and height if provided", () => {
    render(
      <MarkdownImage
        src="/assets/image.png"
        alt="Test"
        width="800"
        height="400"
      />,
    );

    const img = screen.getByAltText("Test");
    expect(img).toHaveAttribute("width", "800");
    expect(img).toHaveAttribute("height", "400");
  });

  it("should set quality prop for Next.js Image", () => {
    render(<MarkdownImage src="/assets/image.png" alt="Test" />);

    const img = screen.getByAltText("Test");
    expect(img).toHaveAttribute("quality", "80");
  });

  it("should support blur placeholder via blurDataUrl prop", () => {
    const blurDataUrl = "data:image/webp;base64,ABC123";
    // Suppress React warning about blurDataURL on DOM element (expected in mock)
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(
      <MarkdownImage
        src="/assets/image.png"
        alt="Test"
        blurDataUrl={blurDataUrl}
      />,
    );

    const img = screen.getByAltText("Test");
    expect(img).toHaveAttribute("blurDataURL", blurDataUrl);

    consoleErrorSpy.mockRestore();
  });

  it("should handle relative image paths", () => {
    render(<MarkdownImage src="/assets/blog/posts/image.png" alt="Test" />);

    const img = screen.getByAltText("Test");
    expect(img).toHaveAttribute("src", "/assets/blog/posts/image.png");
  });

  it("should apply loading lazy by default", () => {
    render(<MarkdownImage src="/assets/image.png" alt="Test" />);

    const img = screen.getByAltText("Test");
    expect(img).toHaveAttribute("loading", "lazy");
  });

  it("should allow overriding loading strategy", () => {
    render(
      <MarkdownImage src="/assets/image.png" alt="Test" loading="eager" />,
    );

    const img = screen.getByAltText("Test");
    expect(img).toHaveAttribute("loading", "eager");
  });

  it("should be wrapped in figure with figcaption if provided", () => {
    const { container } = render(
      <MarkdownImage
        src="/assets/image.png"
        alt="Test image"
        figcaption="Image caption"
      />,
    );

    const figure = container.querySelector("figure");
    expect(figure).toBeInTheDocument();

    const figcaption = container.querySelector("figcaption");
    expect(figcaption).toHaveTextContent("Image caption");
  });

  it("should maintain aspect ratio with responsive width", () => {
    render(<MarkdownImage src="/assets/image.png" alt="Test" />);

    const img = screen.getByAltText("Test");
    const width = parseInt(img.getAttribute("width") || "0", 10);
    const height = parseInt(img.getAttribute("height") || "0", 10);

    // Should maintain 16:9 aspect ratio (default)
    expect(width / height).toBeCloseTo(16 / 9, 1);
  });
});
