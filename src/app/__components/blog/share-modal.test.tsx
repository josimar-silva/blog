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
import userEvent from "@testing-library/user-event";

import ShareModal from "./share-modal";

describe("ShareModal", () => {
  let writeTextSpy: jest.SpyInstance;

  beforeAll(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: jest.fn(),
      },
      writable: true,
      configurable: true, // Added configurable to allow redefinition if needed by userEvent
    });
  });

  beforeEach(() => {
    writeTextSpy = jest.spyOn(navigator.clipboard, "writeText");
  });

  afterEach(() => {
    writeTextSpy.mockRestore();
    jest.clearAllMocks();
  });

  it("renders a share button", () => {
    render(<ShareModal title="Test Post" slug="test-post" />);
    expect(screen.getByRole("button", { name: /share/i })).toBeInTheDocument();
  });

  it("opens and closes the modal", async () => {
    const user = userEvent.setup();
    render(<ShareModal title="Test Post" slug="test-post" />);

    const shareButton = screen.getByRole("button", { name: /share/i });
    await user.click(shareButton);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /close/i });
    await user.click(closeButton);

    expect(dialog).not.toBeInTheDocument();
  });

  it("copies the post link to clipboard", async () => {
    const user = userEvent.setup();
    const title = "Test Post";
    const slug = "test-post";
    render(<ShareModal title={title} slug={slug} />);

    const shareButton = screen.getByRole("button", { name: /share/i });
    await user.click(shareButton);

    const copyLinkButton = screen.getByRole("button", { name: /copy link/i });
    await user.click(copyLinkButton);

    expect(writeTextSpy).toHaveBeenCalledWith(
      `http://localhost:3000/blog/${slug}`,
    );
  });

  it("renders Twitter share button", async () => {
    const user = userEvent.setup();
    render(<ShareModal title="Test Post" slug="test-post" />);
    await user.click(screen.getByRole("button", { name: /share/i }));
    expect(
      screen.getByRole("button", { name: /share on twitter/i }),
    ).toBeInTheDocument();
  });

  it("renders LinkedIn share button", async () => {
    const user = userEvent.setup();
    render(<ShareModal title="Test Post" slug="test-post" />);
    await user.click(screen.getByRole("button", { name: /share/i }));
    expect(
      screen.getByRole("button", { name: /share on linkedin/i }),
    ).toBeInTheDocument();
  });

  it("renders WhatsApp share button", async () => {
    const user = userEvent.setup();
    render(<ShareModal title="Test Post" slug="test-post" />);
    await user.click(screen.getByRole("button", { name: /share/i }));
    expect(
      screen.getByRole("button", { name: /share on whatsapp/i }),
    ).toBeInTheDocument();
  });

  it("renders Telegram share button", async () => {
    const user = userEvent.setup();
    render(<ShareModal title="Test Post" slug="test-post" />);
    await user.click(screen.getByRole("button", { name: /share/i }));
    expect(
      screen.getByRole("button", { name: /share on telegram/i }),
    ).toBeInTheDocument();
  });

  it("renders Email share button", async () => {
    const user = userEvent.setup();
    render(<ShareModal title="Test Post" slug="test-post" />);
    await user.click(screen.getByRole("button", { name: /share/i }));
    expect(
      screen.getByRole("button", { name: /share via email/i }),
    ).toBeInTheDocument();
  });
});
