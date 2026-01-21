const transpilePackages = [
  "react-markdown",
  "remark-.*",
  "rehype-.*",
  "unified",
  "bail",
  "is-plain-obj",
  "trough",
  "vfile.*",
  "unist-.*",
  "mdast-.*",
  "micromark.*",
  "decode-named-character-reference",
  "character-entities.*",
  "property-information",
  "hast-.*",
  "space-separated-tokens",
  "comma-separated-tokens",
  "zwitch",
  "html-void-elements",
  "ccount",
  "escape-string-regexp",
  "markdown-table",
  "devlop",
  "trim-lines",
  "longest-streak",
  "estree-util-.*",
  "html-url-attributes",
  "stringify-entities",
  "style-to-object",
  "inline-style-parser",
  "hastscript",
  "parse5",
  "web-namespaces",
  "micromark-extension-frontmatter",
  "fault",
  "sugar-high",
];

module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/e2e-tests/"],
  testMatch: ["<rootDir>/src/(app|hooks|interfaces|lib)/**/*.test.(ts|tsx)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [
    `node_modules/(?!(${transpilePackages.join("|")})/)`,
  ],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};
