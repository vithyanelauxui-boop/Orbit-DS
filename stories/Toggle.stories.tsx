import type { Meta, StoryObj } from "@storybook/react-vite"

import { Toggle } from "@orbit-ds"
import { TextAlignCenterIcon, TextBIcon } from "@phosphor-icons/react"

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use toggles for independently pressed states such as formatting controls and compact view options.

## Parameter Properties

- \`variant\`: Chooses the toggle surface style.
- \`size\`: Controls the toggle scale and spacing.
- \`disabled\`: Prevents interaction and applies disabled styling.
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
    disabled: {
      control: "boolean",
    },
  },
  args: {
    variant: "default",
    size: "default",
    disabled: false,
  },
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: ({ variant, size, disabled }) => (
    <Toggle
      variant={variant}
      size={size}
      disabled={disabled}
      aria-label="Toggle bold"
    >
      <TextBIcon />
    </Toggle>
  ),
}

export const Outline: Story = {
  render: ({ size, disabled }) => (
    <Toggle
      variant="outline"
      size={size}
      disabled={disabled}
      aria-label="Toggle centered alignment"
    >
      <TextAlignCenterIcon />
      Center
    </Toggle>
  ),
}

export const Sizes: Story = {
  render: ({ variant, disabled }) => (
    <div className="flex items-center gap-3">
      <Toggle variant={variant} size="sm" disabled={disabled}>Small</Toggle>
      <Toggle variant={variant} disabled={disabled}>Default</Toggle>
      <Toggle variant={variant} size="lg" disabled={disabled}>Large</Toggle>
    </div>
  ),
}
