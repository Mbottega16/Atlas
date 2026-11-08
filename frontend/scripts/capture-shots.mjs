// Captures a small thumbnail of a tool's official page into public/shots/, for
// the `screenshot` field of an entry's profile. A maintainer tool, run by hand
// when a profile is checked; the public site never captures anything itself.
//
//   node scripts/capture-shots.mjs https://shodan.io [more links...]
//
// It needs Playwright with Chromium, which is not a dependency (the public
// build doesn't use it). Point PLAYWRIGHT at any install:
//   PLAYWRIGHT=/path/to/node_modules/playwright node scripts/capture-shots.mjs ...
// Look at every image before using it: a bot check or a cookie wall makes a
// useless thumbnail, and the seed should then leave `screenshot` out.
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const shotsDir = path.resolve(here, "../public/shots");
const require = createRequire(import.meta.url);

let chromium;
try {
  ({ chromium } = require(process.env.PLAYWRIGHT || "playwright"));
} catch {
  console.error(
    "Playwright not found. Set PLAYWRIGHT=/path/to/node_modules/playwright " +
      "(it needs Chromium: npx playwright install chromium)."
  );
  process.exit(1);
}

const links = process.argv.slice(2);
if (links.length === 0) {
  console.error("usage: node scripts/capture-shots.mjs <link> [link...]");
  process.exit(1);
}

// Named after the link's host, so a seed row's `screenshot` is predictable.
const fileFor = (link) => `${new URL(link).hostname.replace(/^www\./, "")}.jpg`;
const COOKIE_BUTTONS = [/^accept all/i, /^allow all/i, /^accept/i, /^i agree/i, /^got it/i];

const browser = await chromium.launch();
// A 1280x800 page at half scale: a 640x400 thumbnail of a few dozen KB.
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 0.5,
  locale: "en-US",
});
fs.mkdirSync(shotsDir, { recursive: true });
for (const link of links) {
  const page = await context.newPage();
  try {
    await page.goto(link, { waitUntil: "load", timeout: 30000 });
    await page.waitForTimeout(2500);
    // Best effort: a cookie banner over the page makes a useless thumbnail.
    for (const name of COOKIE_BUTTONS) {
      const button = page.getByRole("button", { name }).first();
      if (await button.isVisible().catch(() => false)) {
        await button.click().catch(() => {});
        await page.waitForTimeout(800);
        break;
      }
    }
    const file = path.join(shotsDir, fileFor(link));
    await page.screenshot({ path: file, type: "jpeg", quality: 70 });
    const kb = Math.round(fs.statSync(file).size / 1024);
    console.log(`${link}\n  "screenshot": "shots/${fileFor(link)}"  (${kb} KB)`);
  } catch (err) {
    console.error(`${link}: not captured (${String(err.message).split("\n")[0]})`);
  } finally {
    await page.close();
  }
}
await browser.close();
