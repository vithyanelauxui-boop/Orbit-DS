import type { Meta, StoryObj } from "@storybook/react-vite"

import { AspectRatio, Icon } from "@orbit-ds"

const squarePresets = {
  "1/1": 1 / 1,
} as const

const portraitPresets = {
  "9/16": 9 / 16,
} as const

type SquarePreset = keyof typeof squarePresets
type PortraitPreset = keyof typeof portraitPresets

type AspectRatioStoryArgs = {
  ratioPreset?: string
  title?: string
}

function RatioCard({
  ratioPreset = "1/1",
  title = "Square preview",
}: AspectRatioStoryArgs) {
  const ratio =
    squarePresets[ratioPreset as SquarePreset] ??
    portraitPresets[ratioPreset as PortraitPreset] ??
    1
  const frameWidth =
    ratioPreset === "9/16" ? "w-[220px]" : "w-[280px]"

  return (
    <div className="w-fit rounded-2xl border p-4">
      <AspectRatio ratio={ratio} className={frameWidth}>
        <div className="flex size-full items-center justify-center rounded-xl border bg-linear-to-br from-slate-100 via-white to-slate-200 text-slate-700 dark:from-slate-900 dark:via-slate-950 dark:to-slate-800 dark:text-slate-200">
          <div className="flex flex-col items-center gap-3 px-4 text-center">
            <Icon
              name="image"
              variant="regular"
              size={40}
            />

            <div className="space-y-1">
              <div className="text-sm font-medium">
                {title}
              </div>
              <div className="text-xs text-muted-foreground">
                Ratio {ratioPreset}
              </div>
            </div>
          </div>
        </div>
      </AspectRatio>
    </div>
  )
}

const meta = {
  title: "Orbit DS/Aspect Ratio",
  component: RatioCard,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use aspect ratio containers to preserve consistent media proportions for cards, banners, thumbnails, framed artwork, and responsive embeds.

## Composition

\`\`\`text
AspectRatio
\`-- Media
\`\`\`

## Parameters

- \`ratio\`: Sets the width-to-height relationship of the container.
- \`children\`: Accepts the media or content that should maintain the chosen ratio.
        `,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        className={[
          "flex justify-center px-6",
          context.viewMode === "docs"
            ? "items-start py-6"
            : "min-h-[70vh] items-center",
        ].join(" ")}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<AspectRatioStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Square: Story = {
  args: {
    ratioPreset: "1/1",
    title: "Square preview",
  },
  argTypes: {
    ratioPreset: {
      control: "select",
      options: Object.keys(squarePresets),
      description:
        "Shows only square aspect-ratio options for the square preview.",
    },
    title: {
      control: "text",
      description:
        "Sets the caption displayed inside the aspect ratio preview.",
    },
  },
  render: (args) => <RatioCard {...args} />,
}

export const Portrait: Story = {
  args: {
    ratioPreset: "9/16",
    title: "Portrait poster",
  },
  argTypes: {
    ratioPreset: {
      control: "select",
      options: Object.keys(portraitPresets),
      description:
        "Shows only portrait aspect-ratio options for the portrait preview.",
    },
    title: {
      control: "text",
      description:
        "Sets the caption displayed inside the aspect ratio preview.",
    },
  },
  render: (args) => <RatioCard {...args} />,
}
