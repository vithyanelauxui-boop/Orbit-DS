import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button, Separator } from "@orbit-ds"

const meta = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Use separators to create visual rhythm between related content, actions, or navigation items.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="max-w-md space-y-4 rounded-xl border p-4">
      <div className="space-y-1">
        <div className="text-sm font-medium">Workspace settings</div>
        <p className="text-sm text-muted-foreground">
          Manage members, billing, and deployment preferences.
        </p>
      </div>
      <Separator />
      <div className="space-y-1">
        <div className="text-sm font-medium">Danger zone</div>
        <p className="text-sm text-muted-foreground">
          Review destructive actions before continuing.
        </p>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center rounded-xl border px-4">
      <Button variant="ghost" size="sm">Overview</Button>
      <Separator orientation="vertical" className="mx-2" />
      <Button variant="ghost" size="sm">Usage</Button>
      <Separator orientation="vertical" className="mx-2" />
      <Button variant="ghost" size="sm">Members</Button>
    </div>
  ),
}
