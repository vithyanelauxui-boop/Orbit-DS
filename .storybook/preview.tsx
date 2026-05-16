import type { Preview } from "@storybook/nextjs-vite"
// @ts-ignore: side-effect import of CSS without type declarations
import "../packages/orbit-ds/src/styles/globals.css"

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <div
        className={[
          "flex justify-center px-6",
          context.viewMode === "docs"
            ? "items-start py-4"
            : "min-h-[20vh] items-center",
        ].join(" ")}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
}

export default preview
