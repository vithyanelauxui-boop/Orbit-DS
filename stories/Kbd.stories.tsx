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
  title: "Components/Kbd",
  component: Shortcut,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use keyboard tokens to display textual user input from the keyboard in inline copy, buttons, tooltips, badges, and compact control groups.
        `,
      },
    },
  },
  tags: ["autodocs"],

  argTypes: {
    modifier: {
      control: "text",
      description: "Modifier key label",
    },
    keyLabel: {
      control: "text",
      description: "Primary key label",
    },
    showPlus: {
      control: "boolean",
      description: "Show separator between keys",
    },
  },

  args: {
    modifier: "Ctrl",
    keyLabel: "B",
    showPlus: true,
  },
} satisfies Meta<typeof Shortcut>

export default meta

type Story = StoryObj<typeof meta>

function Shortcut({
  modifier = "Ctrl",
  keyLabel,
  showPlus = true,
}: {
  modifier?: string
  keyLabel: string
  showPlus?: boolean
}) {
  return (
    <KbdGroup>
      <Kbd>{modifier}</Kbd>

      {showPlus && <span>+</span>}

      <Kbd>{keyLabel}</Kbd>
    </KbdGroup>
  )
}

export const Basic: Story = {
  args: {
    modifier: "alt",
  },
  argTypes: {
    modifier: {
      control: false,
    },
    keyLabel: {
      control: false,
    },
  },

  render: () => <Kbd>Ctrl</Kbd>,
}

export const Playground: Story = {
  render: ({ modifier, keyLabel, showPlus }) => (
    <Shortcut modifier={modifier} keyLabel={keyLabel} showPlus={showPlus} />
  ),
}

export const GroupInText: Story = {
  render: ({ modifier, keyLabel, showPlus }) => (
    <p className="text-sm text-muted-foreground">
      Use{" "}
      <Shortcut modifier={modifier} keyLabel={keyLabel} showPlus={showPlus} />{" "}
      to open the command palette.
    </p>
  ),
}

export const WithBadge: Story = {
  render: ({ modifier, keyLabel, showPlus }) => (
    <Badge variant="secondary" className="gap-2">
      Command palette
      <Shortcut modifier={modifier} keyLabel={keyLabel} showPlus={showPlus} />
    </Badge>
  ),
}

export const InButton: Story = {
  render: ({ modifier, keyLabel, showPlus }) => (
    <Button variant="outline" className="gap-2">
      Open palette
      <Shortcut modifier={modifier} keyLabel={keyLabel} showPlus={showPlus} />
    </Button>
  ),
}

export const InTooltip: Story = {
  render: ({ modifier, keyLabel, showPlus }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Hover for shortcut</Button>
        </TooltipTrigger>

        <TooltipContent className="gap-2">
          Press{" "}
          <Shortcut
            modifier={modifier}
            keyLabel={keyLabel}
            showPlus={showPlus}
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const InInputGroup: Story = {
  render: ({ modifier, keyLabel, showPlus }) => (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search components" />

      <InputGroupAddon align="inline-end">
        <InputGroupText>
          <Shortcut
            modifier={modifier}
            keyLabel={keyLabel}
            showPlus={showPlus}
          />
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}
