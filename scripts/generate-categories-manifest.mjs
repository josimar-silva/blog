import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "__posts");
const manifestPath = path.join(
  process.cwd(),
  "src/lib/data/categories-manifest.json",
);

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

export async function generateCategoriesManifest() {
  try {
    console.log("Generating categories manifest...");
    const posts = await getPosts();
    const categories = posts.reduce((acc, post) => {
      if (post.category) {
        acc[post.category] = (acc[post.category] || 0) + 1;
      }
      return acc;
    }, {});

    const categoriesWithCount = Object.entries(categories).map(
      ([name, count]) => ({
        name,
        count,
      }),
    );

    await fs.writeFile(
      manifestPath,
      JSON.stringify(categoriesWithCount, null, 2),
    );
    console.log(`Manifest generated successfully at ${manifestPath}`);
  } catch (error) {
    console.error("Error generating categories manifest:", error);
    process.exit(1);
  }
}
