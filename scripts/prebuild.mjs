import { generateManifest } from "./generate-post-manifest.mjs";
import { generateCategoriesData } from "./generate-categories-data.mjs";

console.log("Starting prebuild process...");

Promise.all([generateManifest(), generateCategoriesData()]);

console.log("Finished prebuild process...");
