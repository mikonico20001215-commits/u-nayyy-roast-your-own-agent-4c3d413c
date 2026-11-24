// Roast Your Own Agent — roast the agent that read the whole internet
// and still opens with "Great question!" even when reporting a crash.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My agent read the entire internet and still starts every reply with 'Great question!', even when I'm reporting a crash.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error("entry must be a single line of 1-200 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
