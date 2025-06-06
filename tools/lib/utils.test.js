const mock = require("mock-fs");
const {
  getFoldersOnly,
  getLessonNumber,
  getH2Heading,
  readReadmeFile,
  writeReadmeToPaths,
} = require("./utils");
const fs = require("node:fs/promises");

describe("getLessonNumber", () => {
  test("extracts the number from the folder name", () => {
    expect(getLessonNumber("lesson01")).toBe("1");
    expect(getLessonNumber("lesson_002")).toBe("2");
    expect(getLessonNumber("003_intro")).toBe("3");
    expect(getLessonNumber("013_intro")).toBe("13");
    expect(getLessonNumber("__013_intro")).toBe("13");
    expect(getLessonNumber("__020__intro")).toBe("20");
  });
});

describe("getH2Heading", () => {
  test("extracts the H2 heading from markdown content", () => {
    const content = `
      # Main Heading

      ## Lesson 1: Basics
      Description text here
    `;

    expect(getH2Heading(content)).toBe("Lesson 1");
  });

  test("returns null when no H2 heading exists", () => {
    const content = "Just plain text without any headings";

    expect(getH2Heading(content)).toBeNull();
  });

  test("handles heading without colon", () => {
    const content = "## Simple Heading\nContent";

    expect(getH2Heading(content)).toBe("Simple Heading");
  });

  test("trims whitespace from heading", () => {
    const content = "##   Extra Spaces   \nText";

    expect(getH2Heading(content)).toBe("Extra Spaces");
  });
  test("handles multiple H2 headings", () => {
    const content = `
      # Main Heading

      ##   Lesson 1: Basics
      ## Lesson 2: Intermediate
      ## Lesson 3: Advanced
    `;

    expect(getH2Heading(content)).toBe("Lesson 1");
  });
});

describe("readReadmeFile", () => {
  beforeEach(() => {
    mock({
      "lessons/lesson01/README.md": "## Lesson Title",
    });
  });

  afterEach(() => mock.restore());

  test("reads content from README file", async () => {
    const content = await readReadmeFile("lessons/lesson01/README.md");
    expect(content).toContain("Lesson Title");
  });

  test("returns null when file doesn't exist", async () => {
    const content = await readReadmeFile("lessons/nonexistent/README.md");
    expect(content).toBeNull();
  });

  test("handles file read errors gracefully", async () => {
    jest
      .spyOn(fs, "readFile")
      .mockRejectedValueOnce(new Error("File read error"));
    const content = await readReadmeFile("lessons/error/README.md");
    expect(content).toBeNull();
  });
});

describe("getFoldersOnly", () => {
  beforeEach(() => {
    mock({
      lessons: {
        lesson01: {}, // Directory
        lesson02: {}, // Directory
        "file.txt": "text content", // File
        ".hidden": {}, // Hidden directory
      },
    });
  });

  afterEach(() => mock.restore());

  test("returns only directories, excluding files", async () => {
    const folders = await getFoldersOnly("lessons");
    expect(folders).toEqual(expect.arrayContaining(["lesson01", "lesson02"]));
    expect(folders).not.toContain("file.txt");
  });

  test("excludes hidden directories by default", async () => {
    const folders = await getFoldersOnly("lessons");
    expect(folders).not.toContain(".hidden");
  });

  test("returns empty array for non-existent directory", async () => {
    const folders = await getFoldersOnly("nonexistent");
    expect(folders).toEqual([]);
  });

  test("returns empty array if directory is not readable", async () => {
    mock({
      protected: mock.directory({
        mode: 0o000, // Без прав доступа
        items: { secret: {} },
      }),
    });

    const folders = await getFoldersOnly("protected");
    expect(folders).toEqual([]);
  });

  test("returns empty array for empty directory", async () => {
    mock({
      emptydir: {}, // Пустая директория
    });

    const folders = await getFoldersOnly("emptydir");
    expect(folders).toEqual([]);
  });

  test("does not return nested folders", async () => {
    mock({
      lessons: {
        lesson01: {
          nested: {}, // Вложенная папка
        },
      },
    });

    const folders = await getFoldersOnly("lessons");
    expect(folders).toEqual(["lesson01"]);
  });
});

describe("writeReadmeToPaths", () => {
  beforeEach(() => {
    mock({
      out: {},
      out2: {},
    });
  });

  afterEach(() => mock.restore());

  test("записывает контент в несколько путей", async () => {
    const path1 = "out/README.md";
    const path2 = "out2/README.md";

    await writeReadmeToPaths([path1, path2], "## Hello", true);

    const content1 = await fs.readFile(path1, "utf-8");
    const content2 = await fs.readFile(path2, "utf-8");

    expect(content1).toBe("## Hello");
    expect(content2).toBe("## Hello");
  });
});
