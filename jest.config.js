module.exports = {
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/ui-tests/"],
  testMatch: ["<rootDir>/src/(app|hooks|interfaces|lib)/**/*.test.(ts|tsx)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\.(ts|tsx)$": [
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
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};
