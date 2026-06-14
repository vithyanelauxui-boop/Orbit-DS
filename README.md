# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```
### TO generate icons use the following command

```
npx tsx scripts/generate-icons.ts
npx tsx scripts/generate-exports.ts
```

---

## Claude Code Skill — Orbit DS AI Assistant

Install the `/orbit-ds` Claude skill to get AI assistance for picking components, tokens, and icons directly inside Claude Code.

### How teammates install the skill

```bash
git clone https://github.com/vithyanelauxui-boop/Orbit-DS.git
cd Orbit-DS/claude-skill
npm run install-skill
```

Restart Claude Code, then type `/orbit-ds` in any session:

```
/orbit-ds  I need a delete confirmation dialog
/orbit-ds  What token is the primary color?
/orbit-ds  Show me a sidebar layout with navigation
```

The skill works globally across all sessions once installed. See [`claude-skill/README.md`](claude-skill/README.md) for full details and alternative install methods (Windows, Mac/Linux scripts).