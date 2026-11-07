import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// GitHub Pages serves files directly, so create responsive variants at build time.
export const widths = [64, 128, 256, 384, 480, 768, 1024, 1440, 1920];
const sources = [
  'adarsh.png',
  'art/moon-hero.webp',
  'art/scenic-hero.webp',
  'art/developer-studio.webp',
  'previews/plant-disease.jpg',
  'previews/spo2-monitoring.jpg'
];

for (const source of sources) {
  const stem = source.replace(/\.[^.]+$/, '');
  const destination = path.join('public', 'optimized', stem);
  await mkdir(path.dirname(destination), { recursive: true });
  for (const width of widths) {
    await sharp(path.join('public', source))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(`${destination}-${width}.webp`);
  }
}

console.log(`Generated ${sources.length * widths.length} responsive WebP images.`);
