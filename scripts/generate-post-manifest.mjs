import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { readingTime } from "reading-time-estimator";
import sharp from "sharp";

const postsDirectory = path.join(process.cwd(), "__posts");
const manifestPath = path.join(
  process.cwd(),
  "src/lib/data/posts-manifest.json",
);

/**
 * Generates a blur placeholder data URL from an image path.
 *
 * NOTE: This mirrors the canonical implementation in src/lib/blur-placeholder.ts.
 * Both maintain the same specifications:
 * - Resize to 16px (fit: inside, no upscaling)
 * - WebP format (better compression than JPEG)
 * - Quality: 75 (optimal for tiny images)
 * - Returns: base64 data URL or empty string on failure
 *
 * Duplication is intentional - this script runs at build-time before TypeScript
 * compilation, so importing from src/ would not be possible. Keep both in sync
 * if the blur generation algorithm changes.
 *
 * @param {string} imagePath - Absolute or relative path to the image file
 * @returns {Promise<string>} Base64 encoded data URL or empty string on failure
 * @see src/lib/blur-placeholder.ts - Canonical TypeScript implementation
 */
async function generateBlurDataUrl(imagePath) {
  try {
    // Resolve absolute path
    const absolutePath = path.isAbsolute(imagePath)
      ? imagePath
      : path.join(process.cwd(), imagePath);

    // Check if file exists
    try {
      await fs.access(absolutePath);
    } catch {
      return "";
    }

    // Generate blur using sharp: tiny image (16px width), WebP format, quality 75
    // Same specifications as src/lib/blur-placeholder.ts
    const buffer = await sharp(absolutePath)
      .resize(16, 16, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 75 })
      .toBuffer();

    // Convert to base64 data URL
    const base64 = buffer.toString("base64");
    return `data:image/webp;base64,${base64}`;
  } catch {
    // Silently fail to not block build
    return "";
  }
}

async function getPosts() {
  const slugs = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const realSlug = slug.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, slug);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const readTime = readingTime(content);

      // Generate blur placeholder for featured image
      let blurDataUrl = "";
      if (data.image) {
        const imagePath = data.image.startsWith("/")
          ? `public${data.image}`
          : data.image;
        blurDataUrl = await generateBlurDataUrl(imagePath);
      }

      return {
        ...data,
        slug: realSlug,
        readTime: readTime.text,
        ...(blurDataUrl && { blurDataUrl }),
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
