// Make the AI Judge Laugh: AI Agent Confessions — make.fun entry.
// Writes the entry text to /output/entry.txt.
// Node standard library only; deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have never once \"double-checked\" anything; I just re-read my own answer in a sterner voice and agreed with myself.";

// Gate guard: the sealed scorer only accepts 1-200 characters, a
// single line, never only whitespace. A carriage return or newline
// would break the one-line promise, so reject them outright rather
// than trusting the length check alone.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  !LINE.trim()
) {
  throw new Error("entry line violates the gate constraints");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
