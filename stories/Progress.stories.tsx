import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@orbit-ds"
import { Progress } from "@orbit-ds"

function ProgressPreview({
  value = 60,
  withLabel = true,
  label = "Upload progress",
}: {
  value?: number
  withLabel?: boolean
  label?: string
}) {
  return (
    <div className="w-full space-y-2">
      {withLabel ? (
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium">{label}</span>

          <span className="text-sm text-muted-foreground">
            {value}%
          </span>
        </div>
      ) : null}

      <Progress value={value} />
    </div>
  )
}

const meta = {
  title: "Orbit DS/Progress",
  component: ProgressPreview,

  parameters: {
    docs: {
      description: {
        component: `
Use progress indicators for uploads, setup flows, processing states, and completion tracking.

## Parameter Properties

- \`value\`: Controls the current progress percentage.
- \`withLabel\`: Toggles the label and value row above the progress bar.
- \`label\`: Adds a visible text label for the current progress context.
        `,
      },
    },
  },

  decorators: [
    (Story, context) => (
      <div
        className={[
          "flex w-full items-center justify-center",
          context.viewMode === "docs"
            ? "min-h-[24vh] p-4"
            : "min-h-[50vh] p-6",
        ].join(" ")}
      >
        <div className="w-full max-w-4xl">
          <Story />
        </div>
      </div>
    ),
  ],

  tags: ["autodocs"],

  argTypes: {
    value: {
      description:
        "Controls the current progress percentage.",
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },

    withLabel: {
      control: "boolean",
      description:
        "Toggles the label and value row above the progress bar.",
      table: {
        defaultValue: { summary: "true" },
      },
    },

    label: {
      control: "text",
      description:
        "Visible label shown above the progress bar.",
    },
  },

  args: {
    value: 60,
    withLabel: true,
    label: "Upload progress",
  },
} satisfies Meta<typeof ProgressPreview>

export default meta

type Story = StoryObj<typeof meta>

export const WithLabel: Story = {
  parameters: {
    controls: {
      include: ["value", "withLabel", "label"],
    },
  },
  render: (args) => <ProgressPreview {...args} />,
}

export const Controlled: Story = {
  args: {
    value: 36,
    label: "Deployment progress",
  },

  parameters: {
    controls: {
      include: ["value", "withLabel", "label"],
    },
  },

  render: ({
    value: initialValue,
    withLabel,
    label,
  }) => {
    const [value, setValue] =
      React.useState(initialValue)

    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    return (
      <div className="w-full space-y-4">
        <ProgressPreview
          value={value}
          withLabel={withLabel}
          label={label}
        />

        <div className="flex gap-2">
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() =>
              setValue((current) =>
                Math.max(0, current - 10)
              )
            }
          >
            Decrease
          </Button>

          <Button
            type="button"
            size="sm"
            onClick={() =>
              setValue((current) =>
                Math.min(100, current + 10)
              )
            }
          >
            Increase
          </Button>

          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => setValue(initialValue)}
          >
            Reset
          </Button>
        </div>
      </div>
    )
  },
}
