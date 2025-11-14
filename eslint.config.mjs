import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";
import globals from "globals";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import licenseHeader from "eslint-plugin-license-header";

export default defineConfig([
  js.configs.recommended,
  ...nextVitals,
  prettier,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "license-header": licenseHeader,
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "license-header/header": ["error", "./resources/license-header.js"],
    },
  },
  {
    files: ["src/**/*.test.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
