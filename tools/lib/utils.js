const path = require("node:path");
const fs = require("node:fs/promises");
const { execSync } = require("node:child_process");

const getFoldersOnly = async (dirPath) => {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
};

const getLessonNumber = (folderName) =>
  folderName.replace(/\D+/gu, "").replace(/^0+/, "");

const getH2Heading = (content) => {
  const match = content.match(/^##\s*(.+?)(?:\s*:)?\s*$/m);
  return match ? match[1].trim() : null;
};

const readReadmeFile = async (filePath) => {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error(`Failed to read ${filePath}:`, error.message);
    return null;
  }
};

const writeReadmeToPaths = async (paths, content) => {
  for (const filePath of paths) {
    try {
      await fs.writeFile(filePath, content, "utf-8");
      console.log(`✅ README.md generated: ${filePath}`);
      execSync(`git add "${filePath}"`);
      console.log(`✅ README.md add ${filePath} to git index`);
    } catch (error) {
      console.error(`❌ Failed to write ${filePath}:`, error.message);
      console.error(`❌ Failed adding README.md:`, error.message);
      process.exit(1);
    }
  }
};

module.exports = {
  getFoldersOnly,
  getLessonNumber,
  getH2Heading,
  readReadmeFile,
  writeReadmeToPaths,
};
