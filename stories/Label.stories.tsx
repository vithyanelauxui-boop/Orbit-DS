import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox, Input, Label, Switch } from "@orbit-ds"

const meta = {
  title: "Orbit DS/Label",
  component: Label,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Use labels to connect form controls to text, especially for inputs, toggles, and selection controls.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const WithInput: Story = {
  render: () => (
    <div className="grid max-w-sm gap-1.5">
      <Label htmlFor="project-name">Project name</Label>
      <Input id="project-name" placeholder="Orbit DS" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <Label htmlFor="terms">
      <Checkbox id="terms" />
      Accept terms and release policy
    </Label>
  ),
}

export const WithSwitch: Story = {
  render: () => (
    <Label htmlFor="private-mode" className="justify-between rounded-lg border p-3">
      Private mode
      <Switch id="private-mode" defaultChecked />
    </Label>
  ),
}
