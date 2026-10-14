// Renders scripts/og/og.html to public/og/en.jpg and public/og/es.jpg
// (1200x630, drawn at 2x and scaled down so text stays sharp). Needs Playwright
// with Chromium.
//
// Usage: node scripts/og/render.mjs <path-to-playwright-package>
//   e.g. node scripts/og/render.mjs ~/Desktop/MemberDev/OMR/qbank/plugin/memberdev-qbank/node_modules/playwright
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const pkg = path.resolve(process.argv[2] ?? "node_modules/playwright");
const { chromium } = await import(pathToFileURL(path.join(pkg, "index.mjs")).href);

const out = path.join(here, "..", "..", "public", "og");
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
for (const lang of ["en", "es"]) {
  const url = pathToFileURL(path.join(here, "og.html"));
  url.search = `?lang=${lang}`;
  await page.goto(url.href);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  const file = path.join(out, `${lang}.jpg`);
  await page.screenshot({ path: file, type: "jpeg", quality: 88, scale: "css" });
  console.log("rendered", file, fs.statSync(file).size, "bytes");
}
await browser.close();
