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

import { test, expect } from "@playwright/test";

test.describe("Typography Optimization", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a blog post with content
    await page.goto("/blog/2025-08-21-rinha-de-backend-2025");
    // Wait for content to load
    await page.waitForSelector(".markdown-content");
  });

  test("should have prose content visible on page", async ({ page }) => {
    // Get the prose container
    const proseContainer = await page.locator(".prose").first();

    // Should be visible
    await expect(proseContainer).toBeVisible();

    // Should have content
    const textContent = await proseContainer.textContent();
    expect(textContent).toBeTruthy();
    expect(textContent?.length).toBeGreaterThan(100);
  });

  test("should have paragraphs with text content", async ({ page }) => {
    // Get paragraph elements
    const paragraphs = await page.locator(".prose p").all();

    // Should have paragraphs
    expect(paragraphs.length).toBeGreaterThan(0);

    const firstPara = paragraphs[0];

    // Should be visible
    await expect(firstPara).toBeVisible();

    // Should have text content
    const textContent = await firstPara.textContent();
    expect(textContent?.length).toBeGreaterThan(0);
  });

  test("should render blockquotes when present", async ({ page }) => {
    // Find blockquote if it exists
    const blockquoteCount = await page.locator(".prose blockquote").count();

    // Blockquotes are optional in content, but if present should be visible
    if (blockquoteCount > 0) {
      const blockquote = await page.locator(".prose blockquote").first();
      await expect(blockquote).toBeVisible();

      // Should have text content
      const text = await blockquote.textContent();
      expect(text?.length).toBeGreaterThan(0);
    }
  });

  test("should have heading elements in content", async ({ page }) => {
    // Check h2 elements
    const headings = await page.locator(".prose h2").all();

    if (headings.length > 0) {
      const h2 = headings[0];

      // Should be visible
      await expect(h2).toBeVisible();

      // Should have text content
      const text = await h2.textContent();
      expect(text?.length).toBeGreaterThan(0);
    }
  });

  test("should render code blocks when present", async ({ page }) => {
    // Find code block
    const codeBlockCount = await page.locator(".markdown-content pre").count();

    if (codeBlockCount > 0) {
      const codeBlock = await page.locator(".markdown-content pre").first();
      await expect(codeBlock).toBeVisible();

      // Should have code content
      const text = await codeBlock.textContent();
      expect(text?.length).toBeGreaterThan(0);
    }
  });

  test("should render list items when present", async ({ page }) => {
    // Find list items
    const listItems = await page.locator(".prose li").all();

    if (listItems.length > 0) {
      const firstItem = listItems[0];

      // Should be visible
      await expect(firstItem).toBeVisible();

      // Should have text content
      const text = await firstItem.textContent();
      expect(text?.length).toBeGreaterThan(0);
    }
  });

  test("should be responsive on mobile viewport", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Get prose container
    const proseContainer = await page.locator(".prose").first();

    // Should still be visible on mobile
    await expect(proseContainer).toBeVisible();

    // Get text content - should not be empty
    const textContent = await proseContainer.textContent();
    expect(textContent?.length).toBeGreaterThan(0);
  });

  test("should render tables responsively when present", async ({ page }) => {
    // Find table if it exists
    const tableCount = await page.locator(".prose table").count();

    if (tableCount > 0) {
      const table = await page.locator(".prose table").first();

      // Table should be in the DOM and visible
      await expect(table).toBeVisible();
    }
  });

  test("should be readable on desktop viewport", async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Get prose container
    const proseContainer = await page.locator(".prose").first();

    // Should be visible
    await expect(proseContainer).toBeVisible();

    // Should have content
    const textContent = await proseContainer.textContent();
    expect(textContent?.length).toBeGreaterThan(0);
  });

  test("should have proper dark mode support", async ({ page }) => {
    // Set dark theme
    await page.evaluate(() => {
      document.documentElement.classList.add("dark");
    });

    // Get prose container
    const proseContainer = await page.locator(".prose").first();

    // Should still be visible in dark mode
    await expect(proseContainer).toBeVisible();

    // Should have content
    const textContent = await proseContainer.textContent();
    expect(textContent?.length).toBeGreaterThan(0);
  });

  test("should maintain content visibility across viewport sizes", async ({
    page,
  }) => {
    // Test at multiple viewport widths
    const viewports = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1920, height: 1080 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);

      const proseContainer = await page.locator(".prose").first();

      // Should be visible at all sizes
      await expect(proseContainer).toBeVisible();

      // Should have content
      const textContent = await proseContainer.textContent();
      expect(textContent?.length).toBeGreaterThan(0);
    }
  });
});
