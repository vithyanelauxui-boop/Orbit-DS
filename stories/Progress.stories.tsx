import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Progress } from "@orbit-ds"

const meta = {
  title: "Orbit DS/Progress",
  component: Progress,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use progress indicators for uploads, setup flows, processing states, and completion tracking.

## Parameter Properties

- \`value\`: Controls the current progress percentage.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
  args: {
    value: 60,
  },
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => <Progress {...args} className="max-w-md" />,
}

export const Sizes: Story = {
  render: ({ value }) => (
    <div className="grid max-w-md gap-4">
      <Progress value={value} className="h-1" />
      <Progress value={value} className="h-2" />
      <Progress value={value} className="h-3" />
    </div>
  ),
}

export const AnimatedExample: Story = {
  render: () => {
    const [value, setValue] = React.useState(12)

    React.useEffect(() => {
      const id = window.setInterval(() => {
        setValue((current) => (current >= 96 ? 12 : current + 12))
      }, 900)

      return () => window.clearInterval(id)
    }, [])

    return <Progress value={value} className="max-w-md" />
  },
}
