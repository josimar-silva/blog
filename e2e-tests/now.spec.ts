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
        /I'm currently working as a Senior Full-Stack Developer at TechCorp/,
      ),
    ).toBeVisible();
    await expect(
      page.getByText(
        /I'm diving deep into Rust after participating in the Rinha de Backend challenge/,
      ),
    ).toBeVisible();
    await expect(
      page.getByText(
        /Working on a new open-source rate limiting library for Node.js/,
      ),
    ).toBeVisible();
    await expect(
      page.getByText(
        /Currently reading "Designing Data-Intensive Applications" by Martin Kleppmann/,
      ),
    ).toBeVisible();
    await expect(
      page.getByText(
        /Living in San Francisco and really enjoying the tech community here/,
      ),
    ).toBeVisible();
    await expect(
      page.getByText(/Publish at least 12 technical blog posts/),
    ).toBeVisible();

    // Verify last updated date
    await expect(
      page.getByText(/This page was last updated in January 2025/),
    ).toBeVisible();
  });
});
