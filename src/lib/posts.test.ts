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
