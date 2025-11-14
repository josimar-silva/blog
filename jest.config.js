module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/e2e-tests/"],
  testMatch: ["<rootDir>/src/(app|hooks|interfaces|lib)/**/*.test.(ts|tsx)"],
  moduleNameMapper: {
    "^@/app/__components/ui/markdown-content$":
      "<rootDir>/src/app/__components/ui/__mocks__/markdown-content.tsx",
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
    "node_modules/(?!(react-markdown|remark-.*|rehype-.*|unified|bail|is-plain-obj|trough|vfile|vfile-message|unist-.*|mdast-.*|micromark.*|decode-named-character-reference|character-entities|property-information|hast-.*|space-separated-tokens|comma-separated-tokens|zwitch|html-void-elements|ccount|escape-string-regexp|markdown-table|devlop|trim-lines|longest-streak)/)",
  ],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};
