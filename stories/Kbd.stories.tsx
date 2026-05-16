import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Badge,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Kbd,
  KbdGroup,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@orbit-ds"

const meta = {
  title: "Orbit DS/Kbd",
  component: Kbd,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Use keyboard tokens to display textual user input from the keyboard in inline copy, buttons, tooltips, badges, and compact control groups.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>

export default meta

type Story = StoryObj<typeof meta>

function Shortcut({
  modifier = "Ctrl",
  keyLabel,
}: {
  modifier?: string
  keyLabel: string
}) {
  return (
    <KbdGroup>
      <Kbd>{modifier}</Kbd>
      <span>+</span>
      <Kbd>{keyLabel}</Kbd>
    </KbdGroup>
  )
}

export const Basic: Story = {
  render: () => <Kbd>Ctrl</Kbd>,
}

export const GroupInText: Story = {
  render: () => (
    <p className="text-sm text-muted-foreground">
      Use <Shortcut keyLabel="B" /> to open the command palette.
    </p>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Badge variant="secondary" className="gap-2">
      Command palette
      <Shortcut keyLabel="B" />
    </Badge>
  ),
}

export const InButton: Story = {
  render: () => (
    <Button variant="outline" className="gap-2">
      Open palette
      <Shortcut keyLabel="B" />
    </Button>
  ),
}

export const InTooltip: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Hover for shortcut</Button>
        </TooltipTrigger>
        <TooltipContent className="gap-2">
          Press <Shortcut keyLabel="B" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const InInputGroup: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search components" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>
          <Shortcut keyLabel="K" />
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}
