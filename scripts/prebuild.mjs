import { generateManifest } from "./generate-post-manifest.mjs";
import { generateCategoriesData } from "./generate-categories-data.mjs";
import { generateBooksManifest } from "./generate-books-manifest.mjs";

console.log("Starting prebuild process...");
try {
  await Promise.all([
    generateManifest(),
    generateCategoriesData(),
    generateBooksManifest(),
  ]);
  console.log("Finished prebuild process...");
} catch (err) {
  console.error("Prebuild failed:", err);
  process.exit(1);
}
