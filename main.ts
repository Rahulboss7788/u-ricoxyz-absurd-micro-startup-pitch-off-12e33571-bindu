import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "Sorry-as-a-Service apologises to rate-limited APIs for lazy AI agents that hammered them at 3am, selling tiered sorries — Polite Nudge, Grovel Pro and Full Kneel — at $0.10 per apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read back and enforce the competition gate: 1–200 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TEXT) throw new Error("entry.txt does not match the pitch text");
if (back.length < 1 || back.length > 200) {
  throw new Error(`entry length ${back.length} is outside the 1–200 character gate`);
}
if (back.trim().length === 0) throw new Error("entry is only whitespace");
console.log(`Wrote ${TEXT.length} characters to /output/entry.txt`);
