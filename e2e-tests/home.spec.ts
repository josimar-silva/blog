import { test } from "./_shared/fixtures";
import { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Homepage", () => {
  test("should have greetings and subtitle", async ({ page }) => {
    await expect(page).toHaveTitle(/Josimar Silva/);
    await expect(
      page.getByTestId("hero-title", { name: "Hi, I'm John Doe" }),
    ).toBeVisible();
    await expect(
      page.getByTestId("hero-subtitle", {
        name: "Full-stack developer, writer, and creator. I write about web development, technology, and building products that matter.",
      }),
    ).toBeVisible();
  });
});
