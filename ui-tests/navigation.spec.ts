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

import { test } from "./_shared/fixtures";
import { expect, Page } from "@playwright/test";

async function navigateTo(
  section: String,
  isMobile: boolean,
  page: Page,
  url?: String,
) {
  const navTestId = isMobile ? `mobile-navTo-${section}` : `navTo-${section}`;
  const urlRegex = url ? `**${url}` : `**/${section}`;

  if (isMobile) {
    await page.getByRole("button", { name: "Menu" }).click();
  }

  await page.getByTestId(navTestId).click();
  await page.waitForURL(urlRegex, {
    timeout: 60_000,
    waitUntil: "load",
  });
}

test.describe("Website Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should navigate to Home page", async ({ page, isMobile }) => {
    await navigateTo("home", isMobile, page, "/");
    await expect(page).toHaveURL("/");
    await expect(page).toHaveTitle("Josimar Silva");
  });

  test("should navigate to About page", async ({ page, isMobile }) => {
    await navigateTo("about", isMobile, page);
    await expect(page).toHaveURL("/about");
    await expect(page).toHaveTitle("Josimar Silva");
  });

  test("should navigate to Blog page", async ({ page, isMobile }) => {
    await navigateTo("blog", isMobile, page);
    await expect(page).toHaveURL("/blog");
    await expect(page).toHaveTitle("Josimar Silva");
  });

  test("should navigate to Projects page", async ({ page, isMobile }) => {
    await navigateTo("projects", isMobile, page);
    await expect(page).toHaveURL("/projects");
    await expect(page).toHaveTitle("Josimar Silva");
  });

  test("should navigate to Bookshelf page", async ({ page, isMobile }) => {
    await navigateTo("bookshelf", isMobile, page);
    await expect(page).toHaveURL("/bookshelf");
    await expect(page).toHaveTitle("Josimar Silva");
  });

  test("should navigate to Now page", async ({ page, isMobile }) => {
    await navigateTo("now", isMobile, page);
    await expect(page).toHaveURL("/now");
    await expect(page).toHaveTitle("Josimar Silva");
  });

  test("should navigate to Contact page", async ({ page, isMobile }) => {
    await navigateTo("contact", isMobile, page);
    await expect(page).toHaveURL("/contact");
    await expect(page).toHaveTitle("Josimar Silva");
  });
});
