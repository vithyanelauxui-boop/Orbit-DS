import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@orbit-ds"

const variants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
] as const

const badgeSizes = ["sm", "default", "lg"] as const

const customColorPresets = {
  Blue: "border-blue-300 bg-blue-100 text-blue-900",
  Green: "border-emerald-300 bg-emerald-100 text-emerald-900",
  Sky: "border-sky-300 bg-sky-100 text-sky-900",
  Purple: "border-violet-300 bg-violet-100 text-violet-900",
  Red: "border-red-300 bg-red-100 text-red-900",
} as const

function BadgeCheckIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M5 8.2 7 10l4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  )
}

type BadgeStoryArgs = {
  variant?: (typeof variants)[number]
  size?: (typeof badgeSizes)[number]
  label?: string
  showIcon?: boolean
  iconPosition?: "left" | "right"
  className?: string
  colorPreset?: keyof typeof customColorPresets
}

function BadgePreview({
  variant = "default",
  size = "default",
  label = "Badge",
  showIcon = false,
  iconPosition = "left",
  className,
  colorPreset,
}: BadgeStoryArgs) {
  const sizeClassName =
    size === "sm"
      ? "h-4 px-1.5 text-[11px] [&>svg]:size-2.5!"
      : size === "lg"
        ? "h-6 px-2.5 text-sm [&>svg]:size-3.5!"
        : ""
  const colorClassName = colorPreset
    ? customColorPresets[colorPreset]
    : ""
  const iconColorClassName = colorPreset
    ? "text-current"
    : variant === "default"
      ? "text-primary-foreground"
      : variant === "secondary"
        ? "text-secondary-foreground"
        : variant === "destructive"
          ? "text-destructive"
          : "text-foreground"
  const iconElement = (
    <span
      className={[
        "inline-flex shrink-0 items-center justify-center",
        iconColorClassName,
      ].join(" ")}
    >
      <BadgeCheckIcon
        size={size === "sm" ? 10 : size === "lg" ? 14 : 12}
      />
    </span>
  )

  return (
    <Badge
      variant={variant}
      className={[sizeClassName, colorClassName, className]
        .filter(Boolean)
        .join(" ")}
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
    size: {
      control: "inline-radio",
      options: badgeSizes,
      description: "Adjusts the badge size for all variant examples.",
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
    colorPreset: {
      control: "select",
      options: Object.keys(customColorPresets),
      description:
        "Applies one of the preset custom color combinations for the custom color example.",
    },
  },
  args: {
    label: "Badge",
    variant: "default",
    size: "default",
    showIcon: true,
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
    showIcon: true,
  },
  render: (args) => <BadgePreview {...args} />,
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    label: "Destructive",
    showIcon: true,
  },
  render: (args) => <BadgePreview {...args} />,
}

export const Outline: Story = {
  args: {
    variant: "outline",
    label: "Outline",
    showIcon: true,
  },
  render: (args) => <BadgePreview {...args} />,
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Ghost",
    showIcon: true,
  },
  render: (args) => <BadgePreview {...args} />,
}

export const CustomColors: Story = {
  args: {
    label: "Custom",
    showIcon: true,
    colorPreset: "Blue",
  },
  render: (args) => <BadgePreview {...args} />,
}
