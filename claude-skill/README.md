# Orbit DS — Claude Code Skill

A Claude Code skill that gives Claude deep knowledge of the **Orbit Design System** so designers and developers can pick components, tokens, and icons with AI assistance — in any session, any project.

## What it does

When active, Claude knows:

- All **57 components** with their props, variants, and copy-paste usage examples
- All **design tokens** — colors (OKLch), typography, spacing, border radius (light + dark mode)
- All **1 514 Phosphor icons** and how to use them
- A component selection guide to pick the right component for any use case
- Import paths, do's and don'ts, and installation instructions

## Installation

### Option 1 — npm (recommended)

```bash
# From this repo directory:
npm run install-skill
```

### Option 2 — Node script

```bash
node scripts/install.js
```

### Option 3 — Shell script (Mac / Linux)

```bash
bash install.sh
```

### Option 4 — PowerShell (Windows)

```powershell
.\install.ps1
```

### Option 5 — Manual

Copy `skills/orbit-ds.md` to `~/.claude/skills/orbit-ds.md`.

---

After installing, **restart Claude Code** (or reload the window). The skill is now available globally in every session.

## Usage

In any Claude Code session, type:

```
/orbit-ds
```

Then ask anything about the design system:

```
/orbit-ds  I need a confirmation dialog before deleting a record
/orbit-ds  Show me how to build a settings sidebar layout
/orbit-ds  What token should I use for muted text?
/orbit-ds  Give me a data table with pagination
/orbit-ds  What icons work for notifications?
```

Claude will respond with component names, token values, and production-ready code using the Orbit DS library.

## Skill file location

After installation, the skill lives at:

| Platform | Path |
|---|---|
| Windows | `%USERPROFILE%\.claude\skills\orbit-ds.md` |
| Mac / Linux | `~/.claude/skills/orbit-ds.md` |

## Updating

To update when the design system changes:

```bash
git pull
npm run install-skill
```

## Design System reference

| Item | Detail |
|---|---|
| Source repo | [Kalyanim14/orbitDS](https://github.com/Kalyanim14/orbitDS) |
| Package | `orbit-ds` |
| Framework | React 19 + Next.js 16 + TailwindCSS v4 |
| Components | 57 |
| Icons | 1 514 (Phosphor) |
| Color space | OKLch CSS custom properties |
| Dark mode | `.dark` class via `next-themes` |
| Storybook | `npm run storybook` → localhost:6006 |
