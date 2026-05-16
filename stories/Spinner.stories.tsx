import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button, Spinner } from "@orbit-ds"

const meta = {
  title: "Orbit DS/Spinner",
  component: Spinner,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use spinners for compact loading indicators inside buttons, panels, and status rows.

## Parameter Properties

- \`className\`: Adjusts the spinner sizing in story controls where applicable.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "inline-radio",
      options: ["size-4", "size-5", "size-6"],
    },
  },
  args: {
    className: "size-5",
  },
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: ({ className }) => <Spinner className={className} />,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-4" />
      <Spinner className="size-5" />
      <Spinner className="size-6" />
    </div>
  ),
}

export const InButton: Story = {
  render: ({ className }) => (
    <Button disabled className="gap-2">
      <Spinner className={className} />
      Saving changes
    </Button>
  ),
}
