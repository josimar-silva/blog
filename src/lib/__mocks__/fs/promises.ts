import { jest } from "@jest/globals";

const fs = jest.createMockFromModule("fs/promises");

const MOCK_FILE_INFO = {
  "rinha-de-backend-2025.md":
    "---\nslug: rinha-de-backend-2025\ntitle: Rinha de Backend 2025\ndate: 2025-01-22\n---",
};

async function readFile(path) {
  const file = path.split("/").pop();
  return MOCK_FILE_INFO[file] || "";
}

async function readdir() {
  return Object.keys(MOCK_FILE_INFO);
}

fs.readFile = readFile;
fs.readdir = readdir;

module.exports = fs;
