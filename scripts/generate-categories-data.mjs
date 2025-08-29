import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "__posts");
const outputPath = path.join(process.cwd(), "src/lib/data/categories.ts");

async function getPosts() {
  const slugs = await fs.readdir(postsDirectory);
  return Promise.all(
    slugs.map(async (slug) => {
      const fullPath = path.join(postsDirectory, slug);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);
      return data;
    }),
  );
}

export async function generateCategoriesData() {
  try {
    console.log("Generating categories data...");
    const posts = await getPosts();
    const categories = posts.reduce((acc, post) => {
      if (post.category) {
        acc[post.category] = (acc[post.category] || 0) + 1;
      }
      return acc;
    }, {});

    const categoriesWithCount = Object.entries(categories).map(
      ([name, count]) => ({
        key: name.replace(/\s/g, "-").toLowerCase(),
        name,
        count,
      }),
    );

    const fileContent = `/**
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

import { Category } from "@/interfaces/category";

export const categories: Category[] = ${JSON.stringify(categoriesWithCount, null, 2)};
`;

    await fs.writeFile(outputPath, fileContent);
    console.log(`Categories data generated successfully at ${outputPath}`);
  } catch (error) {
    console.error("Error generating categories data:", error);
    process.exit(1);
  }
}
