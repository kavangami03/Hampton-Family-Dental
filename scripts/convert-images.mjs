// One-off: convert referenced PNGs in public/images to WebP (visually identical, ~10x smaller).
// Run: node scripts/convert-images.mjs
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const DIR = path.join(process.cwd(), "public", "images");

// Only convert the files actually referenced in the app.
const FILES = [
  "about_storytelling_1779858491119.png",
  "clinic_interior_1779858062605.png",
  "cosmetic_smile_1779858128482.png",
  "dental_technology_1779858148872.png",
  "dentist_portrait_1779858109259.png",
  "family_dental_1779858082600.png",
  "patient_testimonial_1_1779858256371.png",
  "patient_testimonial_2_1779858279502.png",
  "patient_testimonial_3_1779858302817.png",
  "reception_area_1779858343255.png",
  "service_general_1779858374972.png",
  "service_invisalign_1779858394769.png",
  "service_pediatric_1779858442754.png",
  "service_veneers_1779858461216.png",
  "service_whitening_1779858413749.png",
  "smile_before_after_1779858325738.png",
];

let before = 0;
let after = 0;
for (const file of FILES) {
  const src = path.join(DIR, file);
  const out = src.replace(/\.png$/, ".webp");
  const { size: inSize } = await stat(src);
  await sharp(src).webp({ quality: 82 }).toFile(out);
  const { size: outSize } = await stat(out);
  before += inSize;
  after += outSize;
  console.log(
    `${file}: ${(inSize / 1024).toFixed(0)}KB -> ${(outSize / 1024).toFixed(0)}KB`
  );
}
console.log(
  `\nTotal: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`
);
