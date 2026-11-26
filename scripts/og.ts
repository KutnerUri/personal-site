// Renders scripts/og.html to public/og.png (1200×630) with headless Chrome.
// Run: bun scripts/og.ts   (set CHROME=/path/to/chrome if it isn't found)
import { fileURLToPath } from 'node:url';

const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const src = new URL('./og.html', import.meta.url).href;
const out = fileURLToPath(new URL('../public/og.png', import.meta.url));

const proc = Bun.spawnSync([
  chrome, '--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1200,630', `--screenshot=${out}`, src,
]);
if (proc.exitCode !== 0) throw new Error(proc.stderr.toString());
console.log(`Wrote ${out}`);
