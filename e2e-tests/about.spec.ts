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

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("should display work experience section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Work Experience" }),
    ).toBeVisible();
    await expect(page.getByText("Senior Full-Stack Developer")).toBeVisible();
    await expect(page.getByText("TechCorp Inc.")).toBeVisible();
  });

  test("should display skills section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Skills & Expertise" }),
    ).toBeVisible();
    await expect(page.getByText("Frontend Development")).toBeVisible();
    await expect(page.getByTestId("skill-name-react")).toBeVisible();
    await expect(page.getByTestId("skill-name-node.js")).toBeVisible();
    await expect(page.getByTestId("skill-name-git")).toBeVisible();
  });

  test("should display education and certifications section", async ({
    page,
  }) => {
    await expect(
      page.getByRole("heading", { name: "Education & Certifications" }),
    ).toBeVisible();
    await expect(
      page.getByText("University of California, Berkeley"),
    ).toBeVisible();
    await expect(
      page.getByText("AWS Certified Developer - Associate"),
    ).toBeVisible();
  });
});
