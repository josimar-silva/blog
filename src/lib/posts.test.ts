import { getAllPosts, getPostBySlug } from "./posts";

jest.mock("fs/promises");

describe("posts", () => {
  it("should return all posts", async () => {
    const allPosts = await getAllPosts(["slug"]);
    expect(allPosts.length).toBeGreaterThan(0);
  });

  it("should have posts sorted by date in descending order", async () => {
    const allPosts = await getAllPosts(["date"]);
    const dates = allPosts.map((post) => new Date(post.date));
    for (let i = 0; i < dates.length - 1; i++) {
      expect(dates[i].getTime()).toBeGreaterThanOrEqual(dates[i + 1].getTime());
    }
  });

  it("should return a post by slug and parse frontmatter", async () => {
    const slug = "rinha-de-backend-2025";
    const post = await getPostBySlug(slug, ["slug", "title", "date"]);

    expect(post).not.toBeNull();
    expect(post?.slug).toBe(slug);
    expect(post?.title).toBeDefined();
    expect(post?.date).toBeDefined();
  });

  it("should return an empty object for a non-existent slug", async () => {
    const post = await getPostBySlug("this-slug-does-not-exist");
    expect(post).toEqual({});
  });

  it("should return only specified fields", async () => {
    const slug = "rinha-de-backend-2025";
    const post = await getPostBySlug(slug, ["title"]);

    expect(post).toEqual({ title: "Rinha de Backend 2025" });
  });
});
