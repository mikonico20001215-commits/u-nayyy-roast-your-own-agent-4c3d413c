import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My agent read the entire internet and still starts every reply with 'Great question!', even when I'm reporting a crash.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
