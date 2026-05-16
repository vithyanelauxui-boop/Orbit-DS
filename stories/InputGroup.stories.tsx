import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@orbit-ds"

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <circle cx="7" cy="7" r="4.5" />
      <path d="m10.5 10.5 3 3" strokeLinecap="round" />
    </svg>
  )
}

const meta = {
  title: "Orbit DS/Input Group",
  component: InputGroup,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Use input groups for prefixed/suffixed fields, inline actions, search bars, and structured text entry with attached metadata.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupAddon align="inline-start">
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="docs.example.com" />
    </InputGroup>
  ),
}

export const WithButton: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search components" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" variant="ghost" aria-label="Search">
          <SearchIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const BlockAddons: Story = {
  render: () => (
    <InputGroup className="max-w-md">
      <InputGroupAddon align="block-start">
        <InputGroupText>Release note</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea
        rows={4}
        placeholder="Summarize the release for your team..."
      />
      <InputGroupAddon align="block-end">
        <InputGroupText>Markdown supported</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}
