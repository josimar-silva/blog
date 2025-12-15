import { test, expect } from "@playwright/test";

test.describe("Sitemap", () => {
  test("should be accessible and have the correct content type", async ({
    request,
  }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("application/xml");
  });

  test("should contain the main pages", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    const sitemap = await response.text();
    expect(sitemap).toContain("<loc>https://josimar-silva.com/</loc>");
    expect(sitemap).toContain("<loc>https://josimar-silva.com/about</loc>");
    expect(sitemap).toContain("<loc>https://josimar-silva.com/blog</loc>");
    expect(sitemap).toContain("<loc>https://josimar-silva.com/bookshelf</loc>");
    expect(sitemap).toContain("<loc>https://josimar-silva.com/contact</loc>");
    expect(sitemap).toContain("<loc>https://josimar-silva.com/now</loc>");
    expect(sitemap).toContain("<loc>https://josimar-silva.com/privacy</loc>");
    expect(sitemap).toContain("<loc>https://josimar-silva.com/projects</loc>");
    expect(sitemap).toContain("<loc>https://josimar-silva.com/terms</loc>");
  });

  test("should contain blog posts", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    const sitemap = await response.text();
    expect(sitemap).toContain(
      "<loc>https://josimar-silva.com/blog/2025-08-21-rinha-de-backend-2025</loc>",
    );
  });

  test("should contain bookshelf notes", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    const sitemap = await response.text();
    expect(sitemap).toContain(
      "<loc>https://josimar-silva.com/bookshelf/the-staff-engineers-path</loc>",
    );
  });
});
