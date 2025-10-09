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

async function getSharePopupFor(label: string, page: Page) {
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByLabel(label).click(),
  ]);
  return popup;
}

function getUrlParam(url: string, name: string) {
  const params = new URLSearchParams(new URL(url).search);
  return params.get(name);
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

    const popup = await getSharePopupFor("Share on Twitter", page);

    expect(popup.url()).toContain("x.com/intent/tweet?url=");
    expect(popup.url()).toContain(`${encodeURIComponent(blogPostTitle)}`);
    expect(popup.url()).toContain(`${encodeURIComponent(blogPostUrl)}`);
  });

  test("should share on Telegram", async ({ page }) => {
    await openShareModal(page);

    const popup = await getSharePopupFor("Share on Telegram", page);

    expect(popup.url()).toContain("telegram.me/share/url?url=");
    expect(popup.url()).toContain(`${encodeURIComponent(blogPostTitle)}`);
    expect(popup.url()).toContain(`${encodeURIComponent(blogPostUrl)}`);
  });

  test("should share on LinkedIn", async ({ page }) => {
    await openShareModal(page);

    const popup = await getSharePopupFor("Share on LinkedIn", page);

    const sessionRedirect = getUrlParam(popup.url(), "session_redirect");
    expect(sessionRedirect).not.toBeNull();

    const decodedRedirectUrl = decodeURIComponent(sessionRedirect as string);

    expect(decodedRedirectUrl).toContain("linkedin.com/shareArticle");
    expect(decodedRedirectUrl).toContain(blogPostTitle);
    expect(decodedRedirectUrl).toContain(blogPostUrl);
  });

  test("should share on WhatsApp", async ({ page }) => {
    await openShareModal(page);

    const popup = await getSharePopupFor("Share on WhatsApp", page);

    expect(popup.url()).toContain("whatsapp.com/send");
    expect(popup.url()).toContain(`${encodeURIComponent(blogPostTitle)}`);
    expect(popup.url()).toContain(`${encodeURIComponent(blogPostUrl)}`);
  });
});
