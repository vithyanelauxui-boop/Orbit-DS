import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@orbit-ds"

function NativeSelectPreview({
  variant = "basic",
  invalid = false,
  disabled = false,
}: {
  variant?: "basic" | "groups"
  invalid?: boolean
  disabled?: boolean
}) {
  const id = `native-select-${variant}-${invalid ? "invalid" : "default"}-${disabled ? "disabled" : "enabled"}`

  if (variant === "groups") {
    return (
      <Field className="w-56">
        <FieldLabel htmlFor={id}>Workspace tool</FieldLabel>
        <NativeSelect
          id={id}
          defaultValue={invalid ? "" : "figma"}
          disabled={disabled}
          aria-invalid={invalid ? "true" : undefined}
        >
          {invalid ? (
            <NativeSelectOption value="" disabled>
              Select a tool
            </NativeSelectOption>
          ) : null}
          <NativeSelectOptGroup label="Design">
            <NativeSelectOption value="figma">Figma</NativeSelectOption>
            <NativeSelectOption value="storybook">Storybook</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="Engineering">
            <NativeSelectOption value="github">GitHub</NativeSelectOption>
            <NativeSelectOption value="vercel">Vercel</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
        {disabled ? (
          <FieldDescription>
            Disabled while workspace access is being updated.
          </FieldDescription>
        ) : null}
        {invalid ? (
          <FieldError>Please choose a tool before continuing.</FieldError>
        ) : null}
      </Field>
    )
  }

  return (
    <Field className="w-56">
      <FieldLabel htmlFor={id}>Environment</FieldLabel>
      <NativeSelect
        id={id}
        defaultValue={invalid ? "" : "staging"}
        disabled={disabled}
        aria-invalid={invalid ? "true" : undefined}
      >
        {invalid ? (
          <NativeSelectOption value="" disabled>
            Select an environment
          </NativeSelectOption>
        ) : null}
        <NativeSelectOption value="development">Development</NativeSelectOption>
        <NativeSelectOption value="staging">Staging</NativeSelectOption>
        <NativeSelectOption value="production">Production</NativeSelectOption>
      </NativeSelect>
      {disabled ? (
        <FieldDescription>
          Disabled while deployment permissions are loading.
        </FieldDescription>
      ) : null}
      {invalid ? (
        <FieldError>Please choose an environment before continuing.</FieldError>
      ) : null}
    </Field>
  )
}

const meta = {
  title: "Orbit DS/Native Select",
  component: NativeSelectPreview,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use native selects when you want browser-native behavior with Orbit styling, especially in simpler forms or mobile-heavy flows.
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
    variant: {
      control: "inline-radio",
      options: ["basic", "groups"],
      description: "Switches between flat options and grouped options.",
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
} satisfies Meta<typeof NativeSelectPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    controls: {
      include: ["invalid", "disabled"],
    },
  },
  render: ({ invalid, disabled }) => (
    <NativeSelectPreview
      variant="basic"
      invalid={invalid}
      disabled={disabled}
    />
  ),
}

export const Groups: Story = {
  parameters: {
    controls: {
      include: ["invalid", "disabled"],
    },
  },
  render: ({ invalid, disabled }) => (
    <NativeSelectPreview
      variant="groups"
      invalid={invalid}
      disabled={disabled}
    />
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
    <NativeSelectPreview variant={variant} disabled />
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
    <NativeSelectPreview variant={variant} invalid />
  ),
}
