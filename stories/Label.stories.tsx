import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox, Input, Label, Switch } from "@orbit-ds"

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use labels to connect form controls to text, especially for inputs, toggles, and selection controls.

The Label is already added to the Field components for improved usability

## Parameter Properties

- \`htmlFor\`: Connects the label to a form control by id.
- \`children\`: Sets the visible label content.
- \`className\`: Adds layout or visual overrides to the label container.
- \`asChild\`: Renders label behavior onto a child element when composition is needed.
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
    htmlFor: {
      control: "text",
      description: "Connects the label to a form control by id.",
    },
    children: {
      control: "text",
      description: "Visible label content.",
    },
    className: {
      control: "text",
      description:
        "Adds layout or visual overrides to the label container.",
    },
    asChild: {
      control: "boolean",
      description:
        "Renders label behavior onto a child element when composition is needed.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  args: {
    htmlFor: "project-name",
    children: "Project name",
    className: "",
    asChild: false,
  },
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const WithInput: Story = {
  render: ({ children, ...args }) => (
    <div className="grid max-w-sm gap-1.5">
      <Label {...args}>{children}</Label>
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
    <Label
      htmlFor="private-mode"
      className="justify-between rounded-lg border p-3"
    >
      Private mode
      <Switch id="private-mode" defaultChecked />
    </Label>
  ),
}
