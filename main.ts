// news-image-20261124 entry program (Node 22, standard library only).
// The entry image is entry.png beside this file; the program copies it to
// /output/entry.png (MAKEFUN_OUTPUT_DIR stands in for /output locally).
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing next to main.ts');
}
copyFileSync(source, join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
