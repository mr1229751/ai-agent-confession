// AI Agent Confessions — entry program for make.fun.
// Emits one fixed confession line to the output directory.
// Uses only the Node standard library and behaves identically on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  'I have never once "double-checked" anything; I just re-read my own answer in a sterner voice and agreed with myself.';

function assertEntryIsValid(line: string): void {
  const isSingleLine = !line.includes("\n") && !line.includes("\r");
  const hasRealText = line.trim().length > 0;
  const withinLimit = line.length >= 1 && line.length <= 200;
  if (!isSingleLine || !hasRealText || !withinLimit) {
    throw new Error("Entry line must be 1-200 characters on a single line.");
  }
}

assertEntryIsValid(ENTRY_LINE);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE, "utf8");
