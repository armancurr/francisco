import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, "..", "dist");
if (!existsSync(distDir)) {
  await mkdir(distDir, { recursive: true });
}

const fontsSource = path.join(__dirname, "..", "fonts");
const fontsDest = path.join(distDir, "..", "fonts");

async function copyDir(src: string, dest: string): Promise<void> {
  if (!existsSync(dest)) {
    await mkdir(dest, { recursive: true });
  }

  const files = await readdir(src);

  for (const file of files) {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    const stats = await stat(srcFile);
    if (stats.isDirectory()) {
      await copyDir(srcFile, destFile);
    } else {
      const sourceFile = Bun.file(srcFile);
      await Bun.write(destFile, sourceFile);
    }
  }
}

if (existsSync(fontsSource)) {
  await copyDir(fontsSource, fontsDest);
  console.log("Fonts copied successfully using Bun's optimized file I/O");
} else {
  console.warn("Fonts directory not found");
}
