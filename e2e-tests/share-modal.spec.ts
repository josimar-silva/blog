import { test, expect } from "./_shared/fixtures";
import { Locator, Page } from "@playwright/test";

async function openShareModal(page: Page): Promise<Locator> {
  const shareButton = page.getByRole("button", { name: "Share" });

  await expect(shareButton).toBeVisible();
  await shareButton.click();

  const modal = page.getByRole("dialog");
  await expect(modal).toBeVisible();

  return modal;
}

/**
 * Captures the URL a share button passes to window.open without opening a
 * real popup. Hitting the actual share endpoints (x.com, linkedin.com, ...)
 * is flaky: branded browsers follow their redirects before the URL can be
 * asserted, and the external requests slow down or hang the suite.
 */
async function getSharedUrlFor(label: string, page: Page): Promise<string> {
  await page.evaluate(() => {
    window.open = (url?: string | URL) => {
      (window as unknown as { __sharedUrl?: string }).__sharedUrl = String(url);
      return null;
    };
  });

  await page.getByLabel(label).click();

  return page.evaluate(
    () => (window as unknown as { __sharedUrl?: string }).__sharedUrl ?? "",
  );
}

test.describe("ShareModal", () => {
  let blogPostUrl: string;
  let blogPostTitle: string;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    const blogPosts = page.getByTestId("featured-post-link");
    const firstBlogPost = blogPosts.first();

    blogPostUrl = (await firstBlogPost.getAttribute("href")) || "";

    await page.goto(blogPostUrl);

    blogPostTitle = await page.getByTestId("blog-post-title").textContent();
  });

  test("should open share modal and display share options", async ({
    page,
  }) => {
    await expect(
      page.getByRole("heading", { name: blogPostTitle }),
    ).toBeVisible();

    const modal = await openShareModal(page);

    await expect(modal.getByText("Share this post")).toBeVisible();
    await expect(
      modal.getByRole("button", { name: "Copy Link" }),
    ).toBeVisible();
    await expect(modal.getByLabel("Share via Email")).toBeVisible();
    await expect(modal.getByLabel("Share on Twitter")).toBeVisible();
    await expect(modal.getByLabel("Share on Telegram")).toBeVisible();
    await expect(modal.getByLabel("Share on LinkedIn")).toBeVisible();
    await expect(modal.getByLabel("Share on WhatsApp")).toBeVisible();
  });

  test("should copy the post link to clipboard", async ({ page }, testInfo) => {
    if (
      ["webkit", "mobile-chrome", "mobile-safari", "microsoft-edge"].includes(
        testInfo.project.name,
      )
    ) {
      test.skip();
    }

    await openShareModal(page);

    await page.getByRole("button", { name: "Copy Link" }).click();
    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText(),
    );
    expect(clipboardText).toContain(blogPostUrl);
  });

  test("should share on Email", async ({ page }) => {
    await openShareModal(page);

    const emailButton = page.getByLabel("Share via Email");
    await expect(emailButton).toBeVisible();
    await emailButton.click();
  });

  test("should share on Twitter", async ({ page }) => {
    await openShareModal(page);

    const sharedUrl = await getSharedUrlFor("Share on Twitter", page);

    expect(sharedUrl).toMatch(/(?:twitter|x)\.com\/intent\/tweet\?url=/);
    expect(sharedUrl).toContain(`${encodeURIComponent(blogPostTitle)}`);
    expect(sharedUrl).toContain(`${encodeURIComponent(blogPostUrl)}`);
  });

  test("should share on Telegram", async ({ page }) => {
    await openShareModal(page);

    const sharedUrl = await getSharedUrlFor("Share on Telegram", page);

    expect(sharedUrl).toContain("telegram.me/share/url?url=");
    expect(sharedUrl).toContain(`${encodeURIComponent(blogPostTitle)}`);
    expect(sharedUrl).toContain(`${encodeURIComponent(blogPostUrl)}`);
  });

  test("should share on LinkedIn", async ({ page }) => {
    await openShareModal(page);

    const sharedUrl = await getSharedUrlFor("Share on LinkedIn", page);
    const decodedSharedUrl = decodeURIComponent(sharedUrl);

    expect(decodedSharedUrl).toContain("linkedin.com/shareArticle");
    expect(decodedSharedUrl).toContain(blogPostTitle);
    expect(decodedSharedUrl).toContain(blogPostUrl);
  });

  test("should share on WhatsApp", async ({ page }) => {
    await openShareModal(page);

    const sharedUrl = await getSharedUrlFor("Share on WhatsApp", page);

    expect(sharedUrl).toContain("whatsapp.com/send");
    expect(sharedUrl).toContain(`${encodeURIComponent(blogPostTitle)}`);
    expect(sharedUrl).toContain(`${encodeURIComponent(blogPostUrl)}`);
  });
});
