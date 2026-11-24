// news-image-20261124 entry program (Node 22, standard library only).
// Afternoon edition, rebuilt 24 Nov 2026 in a fresh session after the
// competition opened. The entry image is entry.png beside this file; the
// program copies it to /output/entry.png (MAKEFUN_OUTPUT_DIR stands in
// for /output locally).
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error(`entry.png is missing next to main.ts (${source.pathname})`);
}
// Guard against a corrupt or misnamed image: a PNG starts with a fixed
// 8-byte signature, so refuse anything else before copying.
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!readFileSync(source).subarray(0, 8).equals(pngMagic)) {
  throw new Error('entry.png is not a PNG file');
}
const target = join(outDir, 'entry.png');
copyFileSync(source, target);
const bytes = statSync(target).size;
if (bytes >= 1024 * 1024) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}
console.log(`wrote ${target} (${bytes} bytes)`);
