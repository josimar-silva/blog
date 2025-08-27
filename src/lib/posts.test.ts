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
  describe("getAllPosts", () => {
    it("should return all posts from the manifest", async () => {
      const allPosts = await getAllPosts();
      expect(allPosts.length).toBe(3);
    });

    it("should return only specified fields", async () => {
      const posts = await getAllPosts(["slug", "title"]);
      expect(posts[0]).toEqual({ slug: "post-c", title: "Post C" });
    });
  });

  describe("getPostBySlug", () => {
    it("should return a post with content and navigation", async () => {
      const slug = "post-a";
      const post = await getPostBySlug(slug);

      expect(post).not.toBeNull();
      expect(post.slug).toBe(slug);
      expect(post.title).toBe("Post A");
      expect(post.content).toBe("Content A");
      expect(post.nextPost.slug).toBe("post-c");
      expect(post.previousPost.slug).toBe("post-b");
    });

    it("should return an empty object for a non-existent slug", async () => {
      const post = await getPostBySlug("this-slug-does-not-exist");
      expect(post).toEqual({});
    });

    it("should return only specified fields", async () => {
      const post = await getPostBySlug("post-a", ["slug", "content"]);
      expect(post).toEqual({ slug: "post-a", content: "Content A" });
    });
  });
});
