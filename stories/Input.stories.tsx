import type { Meta, StoryObj } from "@storybook/react-vite"

import { Input } from "@orbit-ds"

const meta = {
  title: "Orbit DS/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use inputs for short-form text entry, search, email capture, numeric entry, and standard single-field forms.

## Parameter Properties

- \`type\`: Chooses the input type shown in the story.
- \`placeholder\`: Sets the placeholder text.
- \`disabled\`: Prevents interaction and applies disabled styling.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "number"],
    },
  },
  args: {
    type: "text",
    placeholder: "Enter a value",
    disabled: false,
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Read only state",
  },
}

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    value: "invalid value",
  },
}

export const Types: Story = {
  render: ({ placeholder }) => (
    <div className="grid max-w-sm gap-3">
      <Input type="text" placeholder={placeholder} />
      <Input type="email" placeholder="name@example.com" />
      <Input type="password" value="password" readOnly />
      <Input type="search" placeholder="Search components" />
      <Input type="number" placeholder="42" />
    </div>
  ),
}
