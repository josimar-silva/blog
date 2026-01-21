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

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import { CodeBlock } from "./code-block";

// Mock clipboard API
const mockWriteText = jest.fn();
const originalClipboard = navigator.clipboard;

describe("CodeBlock", () => {
  beforeAll(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });
  });

  afterAll(() => {
    Object.assign(navigator, {
      clipboard: originalClipboard,
    });
  });

  beforeEach(() => {
    mockWriteText.mockClear();
    mockWriteText.mockResolvedValue(undefined);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders children inside a pre element", () => {
    render(
      <CodeBlock>
        <code>const x = 1;</code>
      </CodeBlock>,
    );

    expect(screen.getByText("const x = 1;")).toBeInTheDocument();
  });

  it("renders a copy button", () => {
    render(
      <CodeBlock>
        <code>const x = 1;</code>
      </CodeBlock>,
    );

    expect(
      screen.getByRole("button", { name: "Copy code" }),
    ).toBeInTheDocument();
  });

  it("copies code to clipboard when button is clicked", async () => {
    render(
      <CodeBlock>
        <code>const x = 1;</code>
      </CodeBlock>,
    );

    const copyButton = screen.getByRole("button", { name: "Copy code" });
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(mockWriteText).toHaveBeenCalledWith("const x = 1;");
    });
  });

  it("shows success state after copying", async () => {
    render(
      <CodeBlock>
        <code>const x = 1;</code>
      </CodeBlock>,
    );

    const copyButton = screen.getByRole("button", { name: "Copy code" });
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Copied!" }),
      ).toBeInTheDocument();
    });
  });

  it("resets to copy state after timeout", async () => {
    jest.useFakeTimers();

    render(
      <CodeBlock>
        <code>const x = 1;</code>
      </CodeBlock>,
    );

    const copyButton = screen.getByRole("button", { name: "Copy code" });
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Copied!" }),
      ).toBeInTheDocument();
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Copy code" }),
      ).toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  it("has proper accessibility attributes", () => {
    render(
      <CodeBlock>
        <code>const x = 1;</code>
      </CodeBlock>,
    );

    const copyButton = screen.getByRole("button", { name: "Copy code" });
    expect(copyButton).toHaveAttribute("aria-label", "Copy code");
    expect(copyButton).toHaveAttribute("title", "Copy code");
  });
});
