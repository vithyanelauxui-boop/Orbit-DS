import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  Textarea,
} from "@orbit-ds"

const meta = {
  title: "Orbit DS/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Use textareas for multi-line input such as descriptions, notes, and longer feedback.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Field className="max-w-lg">
      <FieldLabel>Project summary</FieldLabel>
      <Textarea placeholder="Describe the goal, audience, and release plan." />
    </Field>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Field className="max-w-lg">
      <FieldLabel>Release notes</FieldLabel>
      <Textarea defaultValue="Added grouped field stories and improved navigation coverage." />
      <FieldDescription>Markdown is supported in downstream publishing flows.</FieldDescription>
    </Field>
  ),
}

export const Invalid: Story = {
  render: () => (
    <Field className="max-w-lg">
      <FieldLabel>Support reason</FieldLabel>
      <Textarea aria-invalid="true" placeholder="Tell us what happened." />
      <FieldError>Please include a short description before submitting.</FieldError>
    </Field>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Field className="max-w-lg">
      <FieldLabel>Read-only transcript</FieldLabel>
      <Textarea
        disabled
        defaultValue="This conversation has been archived by your workspace administrator."
      />
    </Field>
  ),
}
