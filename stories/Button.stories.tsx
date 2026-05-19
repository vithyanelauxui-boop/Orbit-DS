import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@orbit-ds"

const variants = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const

const sizes = ["xs", "sm", "default", "lg"] as const

const iconSizes = [
  "icon-xs",
  "icon-sm",
  "icon",
  "icon-lg",
] as const

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        d="M8 3.25v9.5M3.25 8h9.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use this button for primary actions, secondary actions, subtle actions, destructive actions, and text-style links.

## Composition

\`\`\`text
Button
\`\`\`

## Parameter Properties

- \`variant\`: Chooses the visual treatment for the button.
- \`size\`: Chooses the button height, padding, and icon sizing preset.
- \`asChild\`: Renders button styles onto a child element instead of a native \`button\`.
- \`disabled\`: Disables interaction and applies disabled styling.
- \`children\`: Sets the visible label or custom button content.
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
  argTypes: {
    variant: {
      control: "select",
      options: variants,
      description:
        "Chooses the visual treatment for the button.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: sizes,
      description:
        "Chooses the button height, padding, and icon sizing preset.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Renders the button styles onto a child element instead of a native `<button>`.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "Disables interaction and applies disabled styling.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description:
        "Visible label or custom button content.",
    },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
  },
}

export const Sizes: Story = {
  argTypes: {
    size: {
      control: false,
    },
  },
  render: ({ variant, disabled }) => (
    <div className="grid gap-4">
      {sizes.map((size) => (
        <div
          key={size}
          className="flex items-center gap-4"
        >
          <div className="w-24 text-sm text-muted-foreground">
            {size}
          </div>
          <Button
            variant={variant}
            size={size}
            disabled={disabled}
          >
            Button
          </Button>
        </div>
      ))}
    </div>
  ),
}

export const IconButton: Story = {
  args: {
    variant: "default",
    size: "icon",
    children: undefined,
    "aria-label": "Add item",
  },
  argTypes: {
    size: {
      control: "select",
      options: iconSizes,
      description:
        "Chooses the icon-button sizing preset.",
    },
  },
  render: (args) => (
    <Button {...args}>
      <PlusIcon />
    </Button>
  ),
}
