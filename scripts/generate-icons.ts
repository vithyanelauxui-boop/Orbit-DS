import fs from "fs/promises"
import path from "path"
import fg from "fast-glob"
import { transform } from "@svgr/core"
import prettier from "prettier"

const ICONS_DIR = path.resolve("public/icons/SVGs")
const OUTPUT_DIR = path.resolve("packages/orbit-ds/src/icons")

const VARIANTS = ["regular", "fill", "bold", "duotone"] as const

type Variant = (typeof VARIANTS)[number]

function toPascalCase(str: string) {
  return str
    .replace(/\.svg$/, "")
    .split(/[-_\s]/g)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("")
}

async function extractSvgInnerContent(
  svgContent: string
): Promise<string> {
  const jsx = await transform(
    svgContent,
    {
      jsxRuntime: "automatic",
      typescript: true,
      icon: true,
      plugins: ["@svgr/plugin-jsx"],
    },
    { componentName: "TempIcon" }
  )

  const match = jsx.match(
    /<svg[^>]*>([\s\S]*?)<\/svg>/
  )

  return match?.[1]?.trim() || ""
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true })

  const files = await fg("**/*.svg", {
    cwd: ICONS_DIR,
    absolute: true,
  })

  const iconMap: Record<
    string,
    Partial<Record<Variant, string>>
  > = {}

  for (const file of files) {
    const relative = path.relative(ICONS_DIR, file)

    const parts = relative.split(path.sep)

    const variant = parts[0] as Variant

    if (!VARIANTS.includes(variant)) continue

    const rawName = path.basename(file, ".svg")

    const fileName = rawName
      .replace(/-bold$/, "")
      .replace(/-fill$/, "")
      .replace(/-duotone$/, "")

        if (!iconMap[fileName]) {
          iconMap[fileName] = {}
        }

        iconMap[fileName][variant] = file
      }

  const exports: string[] = []

  for (const [iconName, variants] of Object.entries(iconMap)) {
    const componentName =
      toPascalCase(iconName) + "Icon"

    const variantBlocks: string[] = []

    for (const variant of VARIANTS) {
      const filePath = variants[variant]

      if (!filePath) continue

      const svgContent = await fs.readFile(
        filePath,
        "utf-8"
      )

      const innerSvg =
        await extractSvgInnerContent(svgContent)

      variantBlocks.push(`
        case "${variant}":
          return (
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              ${innerSvg}
            </svg>
          )
      `)
    }

    const componentCode = `
      import * as React from "react"

      import type {
        IconProps,
      } from "./types"

      export function ${componentName}({
        variant = "regular",
        size = 24,
        ...props
      }: IconProps) {
        switch (variant) {
          ${variantBlocks.join("\n")}

          default:
            return null
        }
      }
    `

    const formatted = await prettier.format(
      componentCode,
      {
        parser: "typescript",
      }
    )

    await fs.writeFile(
      path.join(
        OUTPUT_DIR,
        `${componentName}.tsx`
      ),
      formatted
    )

    exports.push(
      `export * from "./${componentName}"`
    )
  }

  const indexContent = await prettier.format(
    exports.join("\n"),
    {
      parser: "typescript",
    }
  )

  await fs.writeFile(
    path.join(OUTPUT_DIR, "index.ts"),
    indexContent
  )

  console.log("✅ Icons generated successfully")
}

main().catch(console.error)