import sharp from "sharp";
import { readFileSync, mkdirSync } from "node:fs";
mkdirSync("public", { recursive: true });
const svg = readFileSync("scripts/icon.svg");
const out = [
  ["public/icon-512.png", 512],
  ["public/icon-192.png", 192],
  ["public/apple-touch-icon.png", 180],
  ["public/favicon-32.png", 32],
];
for (const [path, size] of out) {
  await sharp(svg, { density: 384 }).resize(size, size).png().toFile(path);
  console.log("wrote", path);
}
