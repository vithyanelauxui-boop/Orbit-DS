import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldDescription,
  FieldLabel,
  Switch,
} from "@orbit-ds"

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use switches for immediate on or off preferences where the current state should be visible at a glance.

## Parameter Properties

- \`size\`: Controls the switch scale.
- \`checked\`: Controls whether the switch is on or off.
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
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    size: "default",
    checked: true,
    disabled: false,
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: ({ size, checked, disabled }) => (
    <label className="flex max-w-sm items-center justify-between gap-4 rounded-xl border p-4">
      <div className="space-y-1">
        <FieldLabel>Email notifications</FieldLabel>
        <FieldDescription>Receive product updates and usage digests.</FieldDescription>
      </div>
      <Switch size={size} disabled={disabled} checked={checked} />
    </label>
  ),
}

export const Sizes: Story = {
  render: ({ checked, disabled }) => (
    <div className="flex items-center gap-4">
      <Switch size="sm" disabled={disabled} checked={checked} />
      <Switch disabled={disabled} checked={checked} />
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
