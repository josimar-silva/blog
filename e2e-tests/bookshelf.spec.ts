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

test.describe("Bookshelf", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/bookshelf");
  });

  test("should display the list of books", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Bookshelf" }),
    ).toBeVisible();

    const books = await page.getByTestId("book-card").all();
    expect(books.length).toBe(3);

    await expect(
      page.getByRole("heading", {
        name: "Designing Data-Intensive Applications",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "The Pragmatic Programmer" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Attention Is All You Need" }),
    ).toBeVisible();
  });

  test("should navigate to a book review page and display its content", async ({
    page,
  }) => {
    const bookCard = page
      .getByTestId("book-card")
      .filter({ hasText: "Designing Data-Intensive Applications" });
    await bookCard.getByRole("link", { name: "Read Full Review" }).click();

    await page.waitForURL("**/bookshelf/designing-data-intensive-applications");

    await expect(page).toHaveURL(
      "/bookshelf/designing-data-intensive-applications",
    );
    await expect(
      page.getByRole("heading", {
        name: "Designing Data-Intensive Applications",
      }),
    ).toBeVisible();

    const notesContent =
      "An exceptional deep dive into the fundamentals of distributed systems";
    await expect(page.locator("article")).toContainText(notesContent);
  });

  test("should return 404 for a book that does not exist", async ({ page }) => {
    await page.goto("/bookshelf/non-existent-book");
    await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
    await expect(page.getByText("This page could not be found.")).toBeVisible();
  });
});
