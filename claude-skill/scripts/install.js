#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const os = require("os");

const skillsDir = path.join(os.homedir(), ".claude", "skills");
const src = path.join(__dirname, "..", "..", ".claude", "skills", "orbit-ds.md");
const dest = path.join(skillsDir, "orbit-ds.md");

fs.mkdirSync(skillsDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log(`✓ Orbit DS skill installed → ${dest}`);
console.log("  Restart Claude Code and type /orbit-ds to activate.");
