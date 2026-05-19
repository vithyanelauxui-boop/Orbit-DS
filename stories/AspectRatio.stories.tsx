import type { Meta, StoryObj } from "@storybook/react-vite"

import { AspectRatio } from "@orbit-ds"

const ratioPresets = {
  "16/9": 16 / 9,
  "4/3": 4 / 3,
  "1/1": 1 / 1,
  "9/16": 9 / 16,
} as const

type RatioPreset = keyof typeof ratioPresets

type AspectRatioStoryArgs = {
  ratioPreset?: RatioPreset
}

function RatioCard({
  ratioPreset = "16/9",
}: AspectRatioStoryArgs) {
  return (
    <div className="w-[400px]">
      <AspectRatio
        ratio={ratioPresets[ratioPreset]}
        className="overflow-hidden rounded-md border bg-muted"
      >
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          {ratioPreset}
        </div>
      </AspectRatio>
    </div>
  )
}

const meta = {
  title: "Components/Aspect Ratio",
  component: RatioCard,

  parameters: {
    layout: "centered",

    docs: {
      description: {
        component: `
Displays content within a desired ratio.

## Composition

\`\`\`text
AspectRatio
\`-- Media
\`\`\`
        `,
      },
    },
  },

  tags: ["autodocs"],

  argTypes: {
    ratioPreset: {
      control: "select",
      options: Object.keys(ratioPresets),
      description: "Controls the aspect ratio of the container.",
    },
  },
} satisfies Meta<typeof RatioCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ratioPreset: "16/9",
  },
}

export const Square: Story = {
  args: {
    ratioPreset: "1/1",
  },
}

export const Portrait: Story = {
  args: {
    ratioPreset: "9/16",
  },
}
