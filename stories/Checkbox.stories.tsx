import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@orbit-ds"

function CheckboxPreview({
  checked = true,
  disabled = false,
  label = "Email notifications",
  controlPlacement = "start",
}: {
  checked?: boolean
  disabled?: boolean
  label?: string
  controlPlacement?: "start" | "end"
}) {
  return (
    <Field
      orientation="horizontal"
      data-disabled={disabled || undefined}
      className={controlPlacement === "end" ? "flex-row-reverse" : undefined}
    >
      <Checkbox checked={checked} disabled={disabled} />
      <FieldContent>
        <FieldTitle>{label}</FieldTitle>
        <FieldDescription>
          Receive release notes, approvals, and comment digests in your inbox.
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}

const meta = {
  title: "Orbit DS/Checkbox",
  component: CheckboxPreview,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use checkboxes for binary choices, permission lists, consent prompts, and multi-select settings groups.

## Parameter Properties

- \`checked\`: Controls whether the checkbox is selected.
- \`disabled\`: Prevents interaction and applies disabled styling.
- \`FieldLabel\` and \`FieldDescription\`: Pair the checkbox with accessible labels and supporting text.
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
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    controlPlacement: {
      control: "inline-radio",
      options: ["start", "end"],
    },
  },
  args: {
    checked: true,
    disabled: false,
    label: "Email notifications",
    controlPlacement: "start",
  },
} satisfies Meta<typeof CheckboxPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => <CheckboxPreview {...args} />,
}

export const WithDescription: Story = {
  render: () => (
    <Field orientation="horizontal">
      <Checkbox id="weekly-summary" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="weekly-summary">Weekly summary</FieldLabel>
        <FieldDescription>
          Get a Friday recap of launches, approvals, and unresolved tasks.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => <CheckboxPreview {...args} />,
}

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean | "indeterminate">(
      "indeterminate"
    )

    return (
      <FieldGroup className="max-w-md">
        <Field orientation="horizontal">
          <Checkbox
            id="all-projects"
            checked={checked}
            onCheckedChange={(value) => setChecked(value)}
          />
          <FieldContent>
            <FieldLabel htmlFor="all-projects">Select all projects</FieldLabel>
            <FieldDescription>
              Shows a partial state when only some project permissions are
              enabled.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    )
  },
}

export const Grouped: Story = {
  render: () => (
    <FieldSet className="max-w-md">
      <Field orientation="horizontal">
        <Checkbox id="comments" defaultChecked />
        <FieldLabel htmlFor="comments">Comments</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="mentions" defaultChecked />
        <FieldLabel htmlFor="mentions">Mentions</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="marketing" />
        <FieldLabel htmlFor="marketing">Product updates</FieldLabel>
      </Field>
    </FieldSet>
  ),
}
