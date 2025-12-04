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

import { test, expect } from "./_shared/fixtures";

test.describe("Now Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/now");
  });

  test("should display all sections and content", async ({ page }) => {
    // Verify main headings
    await expect(page.getByRole("heading", { name: "Work" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Learning" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Current Projects" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Reading" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Life" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Goals for 2025" }),
    ).toBeVisible();

    // Verify content from each section
    await expect(
      page.getByText(
        /Working as a Staff Software Engineer at FRIDAY Insurance in Berlin/,
      ),
    ).toBeVisible();
    await expect(
      page.getByText(
        /Refreshing Data Structures and Algorithms as part of my Kaizen Journal project/,
      ),
    ).toBeVisible();
    await expect(
      page.getByText(/Maintaining my Kubernetes homelab built with Talos OS/),
    ).toBeVisible();
    await expect(
      page.getByText(
        /Actively following the latest developments in Kubernetes/,
      ),
    ).toBeVisible();
    await expect(
      page.getByText(
        /Improving my German proficiency to apply for German citizenship/,
      ),
    ).toBeVisible();
    await expect(page.getByText(/Read 12 books in 2025/)).toBeVisible();

    // Verify last updated date
    await expect(
      page.getByText(/This page was last updated in December 2025/),
    ).toBeVisible();
  });
});
