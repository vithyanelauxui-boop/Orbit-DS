#!/usr/bin/env bash
# Orbit DS Claude Skill Installer (Mac / Linux)
# Run: bash install.sh

SKILLS_DIR="$HOME/.claude/skills"
mkdir -p "$SKILLS_DIR"
cp "$(dirname "$0")/../.claude/skills/orbit-ds.md" "$SKILLS_DIR/orbit-ds.md"
echo "Orbit DS skill installed to $SKILLS_DIR/orbit-ds.md"
echo "Restart Claude Code, then use /orbit-ds in any session."
