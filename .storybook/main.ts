import type { StorybookConfig } from "@storybook/nextjs-vite"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp",
  ],

  framework: "@storybook/nextjs-vite",

  staticDirs: ["../public"],

  viteFinal: async (config) => {
    config.resolve = config.resolve || {}

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "../packages/orbit-ds/src"),
    }

    return config
  },
}

export default config
