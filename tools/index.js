const path = require("node:path");
//const { execSync } = require("node:child_process");
const { getFoldersOnly, getLessonNumber, getH2Heading, readReadmeFile, writeReadmeToPaths } = require("./lib/utils");

const LESSONS_DIR = "lessons";
const NAVIGATION_DIR = "lessons_navigation";
const README_NAME = "README.md";
const README_HEADER = `<a id="title"></a>\n\n## Lessons:\n`;

const projectRoot = path.join(__dirname, "..");

(async () => {
  const lessonsPath = path.join(projectRoot, LESSONS_DIR);
  const folders = await getFoldersOnly(lessonsPath);

  const lessons = [];

  for (const folder of folders) {
    const readmePath = path.join(lessonsPath, folder, README_NAME);
    const content = await readReadmeFile(readmePath);
    if (!content) continue;

    const title = getH2Heading(content) || "Untitled";
    const number = getLessonNumber(folder);
    lessons.push({ number: parseInt(number), title, folder });
  }

  lessons.sort((a, b) => a.number - b.number);

  const links = lessons.map(
    ({ number, title, folder }) => `- [${number}. ${title}](/${LESSONS_DIR}/${folder}/)`
  );

  const finalReadmeContent = `${README_HEADER}\n${links.join("\n")}\n`;

  const outputPaths = [
    path.join(projectRoot, NAVIGATION_DIR, README_NAME),
    path.join(projectRoot, LESSONS_DIR, README_NAME),
  ];

  await writeReadmeToPaths(outputPaths, finalReadmeContent);
})();

