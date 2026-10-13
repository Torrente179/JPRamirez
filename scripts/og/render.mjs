// Renders scripts/og/og.html to app/opengraph-image.jpg and app/twitter-image.jpg
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

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(path.join(here, "og.html")).href);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
const app = path.join(here, "..", "..", "app");
const og = path.join(app, "opengraph-image.jpg");
await page.screenshot({ path: og, type: "jpeg", quality: 88, scale: "css" });
fs.copyFileSync(og, path.join(app, "twitter-image.jpg"));
await browser.close();
console.log("rendered", og, fs.statSync(og).size, "bytes");
