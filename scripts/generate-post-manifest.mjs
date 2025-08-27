import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "__posts");
const manifestPath = path.join(
  process.cwd(),
  "src/lib/data/posts-manifest.json",
);

async function getPosts() {
  const slugs = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const realSlug = slug.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, slug);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        ...data,
        slug: realSlug,
      };
    }),
  );
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export async function generateManifest() {
  try {
    console.log("Generating posts manifest...");
    const posts = await getPosts();

    const postsWithNavigation = posts.map((post, index) => {
      const nextPost =
        index > 0
          ? { slug: posts[index - 1].slug, title: posts[index - 1].title }
          : null;
      const previousPost =
        index < posts.length - 1
          ? { slug: posts[index + 1].slug, title: posts[index + 1].title }
          : null;
      return {
        ...post,
        nextPost,
        previousPost,
      };
    });

    await fs.writeFile(
      manifestPath,
      JSON.stringify(postsWithNavigation, null, 2),
    );
    console.log(`Manifest generated successfully at ${manifestPath}`);
  } catch (error) {
    console.error("Error generating posts manifest:", error);
    process.exit(1);
  }
}
