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

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import OfflinePage from "./page";

describe("OfflinePage", () => {
  beforeEach(() => {
    // Mock navigator.onLine
    Object.defineProperty(navigator, "onLine", {
      configurable: true,
      writable: true,
      value: false,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render the offline page with correct content", () => {
    render(<OfflinePage />);

    expect(screen.getByText("You're Offline")).toBeInTheDocument();
    expect(
      screen.getByText(
        /It looks like you've lost your internet connection. Please check your network settings and try again./i,
      ),
    ).toBeInTheDocument();
  });

  it("should display the WiFi off icon", () => {
    render(<OfflinePage />);

    const icon = document.querySelector(".h-24.w-24");
    expect(icon).toBeInTheDocument();
  });

  it("should render Go Home link button", () => {
    render(<OfflinePage />);

    const goHomeLink = screen.getByRole("link", { name: /Go Home/i });
    expect(goHomeLink).toBeInTheDocument();
    expect(goHomeLink).toHaveAttribute("href", "/");
  });

  it("should render Try Again button", () => {
    render(<OfflinePage />);

    const tryAgainButton = screen.getByRole("button", { name: /Try Again/i });
    expect(tryAgainButton).toBeInTheDocument();
  });

  it("should set waiting state when offline and Try Again is clicked", async () => {
    const user = userEvent.setup();
    render(<OfflinePage />);

    const tryAgainButton = screen.getByRole("button", { name: /Try Again/i });
    await user.click(tryAgainButton);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Waiting for connection.../i }),
      ).toBeInTheDocument();
    });
  });

  it("should register online event listener on mount", async () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    render(<OfflinePage />);

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "online",
      expect.any(Function),
    );
  });

  it("should cleanup event listener on unmount", async () => {
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = render(<OfflinePage />);
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "online",
      expect.any(Function),
    );
  });

  it("should show correct button text based on waiting state", async () => {
    const user = userEvent.setup();
    render(<OfflinePage />);

    // Initially shows "Try Again"
    expect(
      screen.getByRole("button", { name: /Try Again/i }),
    ).toBeInTheDocument();

    // Click Try Again while offline
    const tryAgainButton = screen.getByRole("button", { name: /Try Again/i });
    await user.click(tryAgainButton);

    // After clicking, should show "Waiting for connection..."
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Waiting for connection.../i }),
      ).toBeInTheDocument();
    });
  });
});
