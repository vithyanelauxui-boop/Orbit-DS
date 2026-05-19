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
  invalid = false,
  label = "Email notifications",
  description,
  controlPlacement = "start",
}: {
  checked?: boolean
  disabled?: boolean
  invalid?: boolean
  label?: string
  description?: string
  controlPlacement?: "start" | "end"
}) {
  return (
    <Field
      orientation="horizontal"
      data-disabled={disabled || undefined}
      data-invalid={invalid || undefined}
      className={controlPlacement === "end" ? "flex-row-reverse" : undefined}
    >
      <Checkbox
        checked={checked}
        disabled={disabled}
        aria-invalid={invalid || undefined}
      />
      <FieldContent>
        <FieldTitle>{label}</FieldTitle>
        {description ? (
          <FieldDescription>{description}</FieldDescription>
        ) : null}
      </FieldContent>
    </Field>
  )
}

const meta = {
  title: "Components/Checkbox",

  component: CheckboxPreview,

  parameters: {
    layout: "centered",
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
    invalid: { control: "boolean" },
    label: { control: "text" },
    description: { control: "text" },
    controlPlacement: {
      control: "inline-radio",
      options: ["start", "end"],
    },
  },
  args: {
    checked: true,
    disabled: false,
    invalid: false,
    label: "Email notifications",
    description:
      "Receive release notes, approvals, and comment digests in your inbox.",
    controlPlacement: "start",
  },
} satisfies Meta<typeof CheckboxPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: "Accept terms and conditions",
    description: "",
    controlPlacement: "end",
  },
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

export const Invalid: Story = {
  args: {
    checked: false,
    invalid: true,
    label: "Accept publishing policy",
    description: "You must confirm this policy before continuing.",
  },
  render: (args) => <CheckboxPreview {...args} />,
}

export const Indeterminate: Story = {
  render: () => {
    const [items, setItems] = React.useState({
      comments: true,
      mentions: false,
      updates: true,
    })

    const values = Object.values(items)
    const allChecked = values.every(Boolean)
    const someChecked = values.some(Boolean)
    const checkedState: boolean | "indeterminate" = allChecked
      ? true
      : someChecked
        ? "indeterminate"
        : false

    function handleSelectAll(value: boolean | "indeterminate") {
      const nextChecked = value === true
      setItems({
        comments: nextChecked,
        mentions: nextChecked,
        updates: nextChecked,
      })
    }

    return (
      <FieldGroup className="w-fit min-w-[20rem]">
        <Field orientation="horizontal">
          <Checkbox
            id="all-projects"
            checked={checkedState}
            onCheckedChange={handleSelectAll}
          />
          <FieldContent>
            <FieldLabel htmlFor="all-projects">Select all projects</FieldLabel>
            <FieldDescription>
              Shows a partial state when only some project permissions are
              enabled.
            </FieldDescription>
          </FieldContent>
        </Field>

        <FieldSet className="w-full pl-6">
          <Field orientation="horizontal">
            <Checkbox
              id="project-comments"
              checked={items.comments}
              onCheckedChange={(value) =>
                setItems((current) => ({
                  ...current,
                  comments: value === true,
                }))
              }
            />
            <FieldLabel htmlFor="project-comments">Comments</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="project-mentions"
              checked={items.mentions}
              onCheckedChange={(value) =>
                setItems((current) => ({
                  ...current,
                  mentions: value === true,
                }))
              }
            />
            <FieldLabel htmlFor="project-mentions">Mentions</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="project-updates"
              checked={items.updates}
              onCheckedChange={(value) =>
                setItems((current) => ({
                  ...current,
                  updates: value === true,
                }))
              }
            />
            <FieldLabel htmlFor="project-updates">Product updates</FieldLabel>
          </Field>
        </FieldSet>
      </FieldGroup>
    )
  },
}

export const Grouped: Story = {
  args: {
    controlPlacement: "start",
  },
  parameters: {
    controls: {
      include: ["controlPlacement"],
    },
  },
  argTypes: {
    checked: {
      control: false,
      table: {
        disable: true,
      },
    },
    disabled: {
      control: false,
      table: {
        disable: true,
      },
    },
    invalid: {
      control: false,
      table: {
        disable: true,
      },
    },
    label: {
      control: false,
      table: {
        disable: true,
      },
    },
    description: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: ({ controlPlacement = "start" }) => (
    <FieldSet className="max-w-md">
      <Field
        orientation="horizontal"
        className={
          controlPlacement === "end"
            ? "flex-row-reverse"
            : undefined
        }
      >
        <Checkbox id="comments" defaultChecked />
        <FieldLabel htmlFor="comments">Comments</FieldLabel>
      </Field>
      <Field
        orientation="horizontal"
        className={
          controlPlacement === "end"
            ? "flex-row-reverse"
            : undefined
        }
      >
        <Checkbox id="mentions" defaultChecked />
        <FieldLabel htmlFor="mentions">Mentions</FieldLabel>
      </Field>
      <Field
        orientation="horizontal"
        className={
          controlPlacement === "end"
            ? "flex-row-reverse"
            : undefined
        }
      >
        <Checkbox id="marketing" />
        <FieldLabel htmlFor="marketing">Product updates</FieldLabel>
      </Field>
    </FieldSet>
  ),
}

