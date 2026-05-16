import fs from "fs/promises"
import path from "path"
import fg from "fast-glob"
import prettier from "prettier"

const COMPONENTS_DIR = path.resolve(
  "packages/orbit-ds/src/components/ui"
)

const ICONS_DIR = path.resolve(
  "packages/orbit-ds/src/icons"
)

const INDEX_FILE = path.resolve(
  "packages/orbit-ds/src/index.ts"
)

async function main() {
  const componentFiles = await fg("*.tsx", {
    cwd: COMPONENTS_DIR,
  })

  const iconFiles = await fg("*.tsx", {
    cwd: ICONS_DIR,
  })

  const exports: string[] = []

  for (const file of componentFiles) {
    const name = file.replace(".tsx", "")

    exports.push(
      `export * from "./components/ui/${name}"`
    )
  }

  if (iconFiles.length > 0) {
    exports.push(`export * from "./icons"`)
  }

  const content = await prettier.format(
    exports.join("\n"),
    {
      parser: "typescript",
    }
  )

  await fs.writeFile(INDEX_FILE, content)

  console.log("✅ index.ts generated")
}

main().catch(console.error)