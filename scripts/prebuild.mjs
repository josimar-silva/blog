import { generateManifest } from "./generate-post-manifest.mjs";
import { generateCategoriesManifest } from "./generate-categories-manifest.mjs";

console.log("Starting prebuild process...");

Promise.all([generateManifest(), generateCategoriesManifest()]);

console.log("Finished prebuild process...");
