import type { Meta, StoryObj } from "@storybook/react-vite"

import { Toggle } from "@orbit-ds"
import { TextAlignCenterIcon, TextBIcon } from "@phosphor-icons/react"

const meta = {
  title: "Orbit DS/Toggle",
  component: Toggle,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use toggles for independently pressed states such as formatting controls and compact view options.

## Parameter Properties

- \`variant\`: Chooses the toggle surface style.
- \`size\`: Controls the toggle scale and spacing.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "outline"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "default", "lg"],
    },
  },
  args: {
    variant: "default",
    size: "default",
  },
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: ({ variant, size }) => (
    <Toggle variant={variant} size={size} aria-label="Toggle bold">
      <TextBIcon />
    </Toggle>
  ),
}

export const Outline: Story = {
  render: ({ size }) => (
    <Toggle variant="outline" size={size} aria-label="Toggle centered alignment">
      <TextAlignCenterIcon />
      Center
    </Toggle>
  ),
}

export const Sizes: Story = {
  render: ({ variant }) => (
    <div className="flex items-center gap-3">
      <Toggle variant={variant} size="sm">Small</Toggle>
      <Toggle variant={variant}>Default</Toggle>
      <Toggle variant={variant} size="lg">Large</Toggle>
    </div>
  ),
}
