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
      className="size-4"
    >
      <circle cx="7" cy="7" r="4.5" />

      <path
        d="m10.5 10.5 3 3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function StoryFrame({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  )
}

const meta = {
  title: "Orbit DS/Input Group",

  component: InputGroup,

  parameters: {
    layout: "fullscreen",

    docs: {
      description: {
        component: `
Use input groups for attached actions,
inline metadata, prefixed/suffixed fields,
search bars, and structured compound inputs.

## Addon Alignment

- \`inline-start\` → leading inline addon
- \`inline-end\` → trailing inline addon
- \`block-start\` → top stacked addon
- \`block-end\` → bottom stacked addon
        `,
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>

export default meta

type Story = StoryObj<typeof meta>

export const InlineStart: Story = {
  render: () => (
    <StoryFrame>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            https://
          </InputGroupText>
        </InputGroupAddon>

        <InputGroupInput placeholder="docs.example.com" />
      </InputGroup>
    </StoryFrame>
  ),
}

export const InlineEnd: Story = {
  render: () => (
    <StoryFrame>
      <InputGroup>
        <InputGroupInput placeholder="Search components" />

        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            aria-label="Search"
          >
            <SearchIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </StoryFrame>
  ),
}

export const InlineBoth: Story = {
  render: () => (
    <StoryFrame>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            $
          </InputGroupText>
        </InputGroupAddon>

        <InputGroupInput placeholder="0.00" />

        <InputGroupAddon align="inline-end">
          <InputGroupText>
            USD
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </StoryFrame>
  ),
}

export const BlockStart: Story = {
  render: () => (
    <StoryFrame>
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>
            Release note
          </InputGroupText>
        </InputGroupAddon>

        <InputGroupTextarea
          rows={5}
          placeholder="Summarize the release for your team..."
        />
      </InputGroup>
    </StoryFrame>
  ),
}

export const BlockEnd: Story = {
  render: () => (
    <StoryFrame>
      <InputGroup>
        <InputGroupTextarea
          rows={5}
          placeholder="Write internal notes..."
        />

        <InputGroupAddon align="block-end">
          <InputGroupText>
            Markdown supported
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </StoryFrame>
  ),
}

export const BlockBoth: Story = {
  render: () => (
    <StoryFrame>
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>
            Release note
          </InputGroupText>
        </InputGroupAddon>

        <InputGroupTextarea
          rows={5}
          placeholder="Summarize the release for your team..."
        />

        <InputGroupAddon align="block-end">
          <InputGroupText>
            Markdown supported
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </StoryFrame>
  ),
}

export const MixedLayout: Story = {
  render: () => (
    <StoryFrame>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            https://
          </InputGroupText>
        </InputGroupAddon>

        <InputGroupInput placeholder="your-domain" />

        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            aria-label="Search"
          >
            <SearchIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </StoryFrame>
  ),
}