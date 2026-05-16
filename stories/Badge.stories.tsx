import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge, Icon } from "@orbit-ds"

const variants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
] as const

type BadgeStoryArgs = {
  variant?: (typeof variants)[number]
  label?: string
  showIcon?: boolean
  iconPosition?: "left" | "right"
  className?: string
}

function BadgePreview({
  variant = "default",
  label = "Badge",
  showIcon = false,
  iconPosition = "left",
  className,
}: BadgeStoryArgs) {
  const iconElement = (
    <Icon
      name="check-fat"
      variant="fill"
      className="size-3.5 shrink-0"
    />
  )

  return (
    <Badge
      variant={variant}
      className={className}
      data-icon={
        showIcon
          ? iconPosition === "left"
            ? "inline-start"
            : "inline-end"
          : undefined
      }
    >
      {showIcon && iconPosition === "left"
        ? iconElement
        : null}
      {label}
      {showIcon && iconPosition === "right"
        ? iconElement
        : null}
    </Badge>
  )
}

const meta = {
  title: "Orbit DS/Badge",
  component: BadgePreview,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use badges for status, category labels, counters, metadata, and lightweight inline emphasis.

## Composition

\`\`\`text
Badge
\`\`\`

## Parameters

- \`variant\`: Chooses the badge visual style.
- \`children\`: Sets the visible badge label or inline content.
- \`className\`: Extends the badge surface with custom colors or borders.
- \`asChild\`: Renders badge styles onto a child element instead of a native \`span\`.
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
      description: "Chooses the badge visual style.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    label: {
      control: "text",
      description: "Visible label displayed inside the badge.",
    },
    showIcon: {
      control: "boolean",
      description:
        "Shows or hides the icon inside the badge preview.",
    },
    iconPosition: {
      control: "inline-radio",
      options: ["left", "right"],
      description:
        "Places the optional icon before or after the badge label.",
    },
    className: {
      control: "text",
      description:
        "Adds custom classes to the badge root for custom color examples.",
    },
  },
  args: {
    label: "Badge",
    variant: "default",
    showIcon: false,
    iconPosition: "left",
  },
} satisfies Meta<BadgeStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <BadgePreview {...args} />,
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary",
  },
  render: (args) => <BadgePreview {...args} />,
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    label: "Destructive",
  },
  render: (args) => <BadgePreview {...args} />,
}

export const Outline: Story = {
  args: {
    variant: "outline",
    label: "Outline",
  },
  render: (args) => <BadgePreview {...args} />,
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Ghost",
  },
  render: (args) => <BadgePreview {...args} />,
}

export const CustomColors: Story = {
  args: {
    label: "Success",
    showIcon: true,
    className:
      "border-emerald-300 bg-emerald-100 text-emerald-900",
  },
  render: (args) => <BadgePreview {...args} />,
}
