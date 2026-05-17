import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@orbit-ds"

function SelectPreview({
  variant = "basic",
  invalid = false,
  disabled = false,
}: {
  variant?: "basic" | "grouped" | "withSeparator"
  invalid?: boolean
  disabled?: boolean
}) {
  const trigger = (
    <SelectTrigger
      className="w-56"
      aria-invalid={invalid ? "true" : undefined}
    >
      <SelectValue
        placeholder={
          variant === "basic"
            ? "Select a view"
            : variant === "grouped"
              ? "Select a tool"
              : "Filter"
        }
      />
    </SelectTrigger>
  )

  const content =
    variant === "basic" ? (
      <SelectContent>
        <SelectItem value="team">Team activity</SelectItem>
        <SelectItem value="mentions">Mentions</SelectItem>
        <SelectItem value="bookmarks">Bookmarks</SelectItem>
      </SelectContent>
    ) : variant === "grouped" ? (
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Design</SelectLabel>
          <SelectItem value="figma">Figma</SelectItem>
          <SelectItem value="storybook">Storybook</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Engineering</SelectLabel>
          <SelectItem value="github">GitHub</SelectItem>
          <SelectItem value="vercel">Vercel</SelectItem>
        </SelectGroup>
      </SelectContent>
    ) : (
      <SelectContent>
        <SelectItem value="all">All updates</SelectItem>
        <SelectItem value="assigned">Assigned to me</SelectItem>
        <SelectSeparator />
        <SelectItem value="archived">Archived</SelectItem>
      </SelectContent>
    )

  const defaultValue =
    variant === "basic"
      ? "team"
      : variant === "grouped"
        ? "figma"
        : "all"

  if (invalid || disabled) {
    return (
      <Field className="w-56">
        <FieldLabel>
          {variant === "basic"
            ? "View"
            : variant === "grouped"
              ? "Tool"
              : "Filter"}
        </FieldLabel>
        <Select
          disabled={disabled}
          defaultValue={invalid ? undefined : defaultValue}
        >
          {trigger}
          {content}
        </Select>
        {invalid ? (
          <FieldError>Please choose an option.</FieldError>
        ) : null}
        {disabled ? (
          <FieldDescription>
            Selection is unavailable right now.
          </FieldDescription>
        ) : null}
      </Field>
    )
  }

  return (
    <Select defaultValue={defaultValue}>
      {trigger}
      {content}
    </Select>
  )
}

const meta = {
  title: "Orbit DS/Select",
  component: SelectPreview,
  parameters: {
    docs: {
      layout: "centered",
      description: {
        component:
          "Use custom selects when you need richer menu content, grouping, and consistent overlay behavior beyond native browser selects.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["basic", "grouped", "withSeparator"],
      description: "Switches between flat, grouped, and separated option lists.",
      table: {
        defaultValue: { summary: "basic" },
      },
    },
    invalid: {
      control: "boolean",
      description: "Shows the invalid state and error messaging.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disables interaction and shows supporting helper text.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  args: {
    variant: "basic",
    invalid: false,
    disabled: false,
  },
} satisfies Meta<typeof SelectPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    controls: {
      include: ["invalid", "disabled"],
    },
  },
  render: ({ invalid, disabled }) => (
    <SelectPreview
      variant="basic"
      invalid={invalid}
      disabled={disabled}
    />
  ),
}

export const Grouped: Story = {
  parameters: {
    controls: {
      include: ["invalid", "disabled"],
    },
  },
  render: ({ invalid, disabled }) => (
    <SelectPreview
      variant="grouped"
      invalid={invalid}
      disabled={disabled}
    />
  ),
}

export const WithSeparator: Story = {
  parameters: {
    controls: {
      include: ["invalid", "disabled"],
    },
  },
  render: ({ invalid, disabled }) => (
    <SelectPreview
      variant="withSeparator"
      invalid={invalid}
      disabled={disabled}
    />
  ),
}

export const Invalid: Story = {
  args: {
    variant: "basic",
    invalid: true,
  },
  parameters: {
    controls: {
      include: ["variant"],
    },
  },
  render: ({ variant }) => (
    <SelectPreview variant={variant} invalid />
  ),
}

export const Disabled: Story = {
  args: {
    variant: "basic",
    disabled: true,
  },
  parameters: {
    controls: {
      include: ["variant"],
    },
  },
  render: ({ variant }) => (
    <SelectPreview variant={variant} disabled />
  ),
}
