import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  Button,
  Icon,
} from "@orbit-ds"

const alertIcons = [
  "info",
  "warning",
  "warning-diamond",
  "check-circle",
  "bell",
  "x-circle",
] as const

const colorPresets = {
  primary: {
    container:
      "border-[color:var(--color-primary)]/25 bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]",
    icon: "text-[color:var(--color-primary)]",
    description: "text-[color:var(--color-primary)]/90",
  },
  red: {
    container:
      "border-red-200 bg-red-50 text-red-900 dark:border-red-950/60 dark:bg-red-950/40 dark:text-red-100",
    icon: "text-red-600 dark:text-red-300",
    description: "text-red-800 dark:text-red-200",
  },
  green: {
    container:
      "border-green-200 bg-green-50 text-green-900 dark:border-green-950/60 dark:bg-green-950/40 dark:text-green-100",
    icon: "text-green-600 dark:text-green-300",
    description: "text-green-800 dark:text-green-200",
  },
  amber: {
    container:
      "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-950/60 dark:bg-amber-950/40 dark:text-amber-100",
    icon: "text-amber-600 dark:text-amber-300",
    description: "text-amber-800 dark:text-amber-200",
  },
} as const

type AlertStoryArgs = {
  variant?: "default" | "destructive"
  showIcon?: boolean
  icon?: (typeof alertIcons)[number]
  title?: string
  description?: string
  showAction?: boolean
  actionLabel?: string
  colorPreset?: keyof typeof colorPresets
}

function AlertPreview({
  variant = "default",
  showIcon = true,
  icon = "info",
  title = "Heads up",
  description = "Your account is active and ready to use. Review your settings anytime from the dashboard.",
  showAction = false,
  actionLabel = "View",
  colorPreset,
}: AlertStoryArgs) {
  const preset = colorPreset
    ? colorPresets[colorPreset]
    : null

  return (
    <Alert
      variant={variant}
      className={`max-w-xl ${preset?.container ?? ""}`}
    >
      {showIcon ? (
        <Icon
          name={icon}
          variant="regular"
          className={preset?.icon}
        />
      ) : null}

      <AlertTitle>{title}</AlertTitle>

      <AlertDescription className={preset?.description}>
        {description}
      </AlertDescription>

      {showAction ? (
        <AlertAction>
          <Button size="xs" variant="outline">
            {actionLabel}
          </Button>
        </AlertAction>
      ) : null}
    </Alert>
  )
}

const meta = {
  title: "Components/Alert",
  component: AlertPreview,
  subcomponents: {
    AlertTitle,
    AlertDescription,
    AlertAction,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use alerts to communicate contextual information, confirmations, warnings, and inline status updates.

## Composition

\`\`\`text
Alert
|-- Icon
|-- AlertTitle
|-- AlertDescription
\`-- AlertAction
\`\`\`

## Parameters

- \`variant\`: Switches between the default informational treatment and the destructive warning style.
- \`className\`: Extends the alert container with custom spacing, borders, and colors.
- \`AlertTitle\`: Renders the short heading for the message.
- \`AlertDescription\`: Renders supporting text, links, or richer inline content.
- \`AlertAction\`: Positions a trailing action such as a button or link.
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
      control: "inline-radio",
      options: ["default", "destructive"],
      description:
        "Controls the semantic styling of the alert container.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    icon: {
      control: "select",
      options: alertIcons,
      description:
        "Selects the leading icon shown before the alert text.",
    },
    showIcon: {
      control: "boolean",
      description:
        "Shows or hides the leading icon in the alert preview.",
    },
    title: {
      control: "text",
      description:
        "Sets the short heading displayed inside `AlertTitle`.",
    },
    description: {
      control: "text",
      description:
        "Sets the supporting body copy displayed inside `AlertDescription`.",
    },
    showAction: {
      control: "boolean",
      description:
        "Shows or hides the trailing `AlertAction` button.",
    },
    actionLabel: {
      control: "text",
      description:
        "Sets the text label used by the optional action button.",
    },
    colorPreset: {
      control: "inline-radio",
      options: Object.keys(colorPresets),
      description:
        "Applies custom shadcn-inspired alert colors for the custom color example.",
    },
  },
} satisfies Meta<AlertStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    variant: "default",
    showIcon: true,
    icon: "info",
    title: "Heads up",
    description:
      "Your account is active and ready to use. Review your settings anytime from the dashboard.",
  },
  render: (args) => <AlertPreview {...args} />,
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    showIcon: true,
    icon: "warning-diamond",
    title: "Action required",
    description:
      "We could not save your changes. Please retry or restore the previous version before leaving this page.",
  },
  argTypes: {
    colorPreset: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: (args) => <AlertPreview {...args} />,
}

export const Action: Story = {
  args: {
    variant: "default",
    showIcon: true,
    icon: "check-circle",
    title: "Changes published",
    description:
      "The latest version is live and visible to your team.",
    showAction: true,
    actionLabel: "View",
  },
  render: (args) => <AlertPreview {...args} />,
}

export const CustomColors: Story = {
  args: {
    variant: "default",
    showIcon: true,
    icon: "check-circle",
    title: "Deployment complete",
    description:
      "Orbit DS has been deployed successfully with zero downtime across your preview environment.",
    colorPreset: "green",
  },
  argTypes: {
    variant: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: (args) => <AlertPreview {...args} />,
}
