import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldDescription,
  FieldLabel,
  Switch,
} from "@orbit-ds"

const meta = {
  title: "Orbit DS/Switch",
  component: Switch,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use switches for immediate on or off preferences where the current state should be visible at a glance.

## Parameter Properties

- \`size\`: Controls the switch scale.
- \`disabled\`: Prevents interaction and applies disabled styling.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "default"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    size: "default",
    disabled: false,
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: ({ size, disabled }) => (
    <label className="flex max-w-sm items-center justify-between gap-4 rounded-xl border p-4">
      <div className="space-y-1">
        <FieldLabel>Email notifications</FieldLabel>
        <FieldDescription>Receive product updates and usage digests.</FieldDescription>
      </div>
      <Switch size={size} disabled={disabled} defaultChecked />
    </label>
  ),
}

export const Sizes: Story = {
  render: ({ disabled }) => (
    <div className="flex items-center gap-4">
      <Switch size="sm" disabled={disabled} defaultChecked />
      <Switch disabled={disabled} defaultChecked />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Field className="max-w-sm">
      <div className="flex items-center justify-between rounded-xl border p-4">
        <div className="space-y-1">
          <FieldLabel>Automatic billing retries</FieldLabel>
          <FieldDescription>Managed by your organization owner.</FieldDescription>
        </div>
        <Switch disabled defaultChecked />
      </div>
    </Field>
  ),
}
