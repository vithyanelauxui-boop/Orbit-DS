import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@orbit-ds"

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use popovers for lightweight forms, helper panels, quick actions, and attached contextual content.

## Parameter Properties

- \`PopoverTrigger asChild\`: Lets the trigger behavior be applied to a child element such as a button.
- \`PopoverContent className\`: Adjusts the popover panel width and layout styling.
- \`PopoverTitle\` and \`PopoverDescription\`: Provide structured heading and supporting copy inside the panel.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Quick note</PopoverTitle>
          <PopoverDescription>
            Add a short note without leaving the current page.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}

export const Form: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Invite teammate</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Invite teammate</PopoverTitle>
          <PopoverDescription>
            Share access to docs, components, and releases.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2">
          <Input placeholder="name@example.com" />
          <Button size="sm">Send invite</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Narrow: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">More info</Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <PopoverDescription>
          This component is available in the shared workspace library.
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  ),
}
