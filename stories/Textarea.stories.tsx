import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  Textarea,
} from "@orbit-ds"

type TextareaStoryArgs = {
  withLabel?: boolean
}

function TextareaStoryPreview({
  withLabel = true,
}: TextareaStoryArgs) {
  return (
    <Field className="max-w-lg">
      {withLabel ? <FieldLabel>Project summary</FieldLabel> : null}
      <Textarea placeholder="Describe the goal, audience, and release plan." />
    </Field>
  )
}

const meta = {
  title: "Components/Textarea",
  component: TextareaStoryPreview,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use textareas for multi-line input such as descriptions, notes, and longer feedback.

## Parameter Properties

- \`withLabel\`: Toggles the field label in the basic textarea example.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    withLabel: {
      control: "boolean",
    },
  },
  args: {
    withLabel: true,
  },
} satisfies Meta<typeof TextareaStoryPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    controls: {
      include: ["withLabel"],
    },
  },
  render: (args) => <TextareaStoryPreview {...args} />,
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
