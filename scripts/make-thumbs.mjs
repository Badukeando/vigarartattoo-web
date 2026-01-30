import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Config
const ROOT = process.cwd();
const PORTFOLIO_DIR = path.join(ROOT, "public", "images", "portfolio");
const MAX = 800; // thumb size (px). 600–900 suele ir bien para grid.
const QUALITY_WEBP = 72;
const QUALITY_AVIF = 45; // AVIF suele verse muy bien con 35–55

const categories = ["featured", "fine-line", "blackwork", "color", "Studio", "varios"];

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}

function isJpeg(file) {
  const f = file.toLowerCase();
  return f.endsWith(".jpg") || f.endsWith(".jpeg");
}

async function makeThumbsForFile(file) {
  // Skip thumbs folder itself
  if (file.includes(`${path.sep}thumbs${path.sep}`)) return;

  const dir = path.dirname(file);
  const base = path.basename(file).replace(/\.(jpe?g)$/i, "");
  const thumbsDir = path.join(dir, "thumbs");

  await ensureDir(thumbsDir);

  const outWebp = path.join(thumbsDir, `${base}.webp`);
  const outAvif = path.join(thumbsDir, `${base}.avif`);

  // Si ya existen, no recalcular
  const hasWebp = await exists(outWebp);
  const hasAvif = await exists(outAvif);
  if (hasWebp && hasAvif) return;

  const img = sharp(file)
    .rotate()
    .resize(MAX, MAX, { fit: "cover" });

  if (!hasWebp) {
    await img.clone().webp({ quality: QUALITY_WEBP }).toFile(outWebp);
  }
  if (!hasAvif) {
    await img.clone().avif({ quality: QUALITY_AVIF }).toFile(outAvif);
  }

  console.log("OK:", file, "->", path.relative(ROOT, outAvif), path.relative(ROOT, outWebp));
}

async function main() {
  for (const cat of categories) {
    const dir = path.join(PORTFOLIO_DIR, cat);
    const files = (await walk(dir)).filter(isJpeg);
    for (const f of files) await makeThumbsForFile(f);
  }
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
