import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Kbd,
  KbdGroup,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@orbit-ds"

import { InfoIcon } from "@phosphor-icons/react"

type TooltipStoryArgs = {
  position?: "top" | "right" | "bottom" | "left"
  withShortcut?: boolean
}

function StoryWrap({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[280px] items-center justify-center p-6">
      {children}
    </div>
  )
}

function TooltipPreview({
  position = "top",
  withShortcut = false,
}: TooltipStoryArgs) {
  return (
    <TooltipProvider>
      <Tooltip
        key={`${position}-${withShortcut}`}
      >
        <TooltipTrigger asChild>
          <Button
            variant={
              withShortcut
                ? "ghost"
                : "outline"
            }
          >
            {withShortcut
              ? "Command palette"
              : "Hover me"}
          </Button>
        </TooltipTrigger>

        <TooltipContent side={position}>
          {withShortcut
            ? "Open palette"
            : "Review the latest changes."}

          {withShortcut ? (
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span>+</span>
              <Kbd>K</Kbd>
            </KbdGroup>
          ) : null}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const meta = {
  title: "Components/Tooltip",
  component: TooltipPreview,

  parameters: {
    layout: "centered",

    docs: {
      description: {
        component: `
Use tooltips for short contextual hints, shortcuts, and labels that should appear on hover or focus.

## Parameter Properties

- \`position\`: Controls which side of the trigger the tooltip appears on.
- \`withShortcut\`: Toggles shortcut content inside the tooltip.
        `,
      },
    },
  },

  tags: ["autodocs"],

  argTypes: {
    position: {
      control: "inline-radio",

      options: [
        "top",
        "right",
        "bottom",
        "left",
      ],

      description:
        "Controls tooltip placement relative to the trigger.",
    },

    withShortcut: {
      control: "boolean",

      description:
        "Toggles keyboard shortcut content inside the tooltip.",
    },
  },

  args: {
    position: "top",
    withShortcut: false,
  },
} satisfies Meta<TooltipStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    controls: {
      include: [
        "position",
        "withShortcut",
      ],
    },
  },

  render: (args) => (
    <StoryWrap>
      <TooltipPreview {...args} />
    </StoryWrap>
  ),
}

export const WithShortcut: Story = {
  args: {
    withShortcut: true,
  },

  parameters: {
    controls: {
      include: ["position"],
    },
  },

  render: (args) => (
    <StoryWrap>
      <TooltipPreview {...args} />
    </StoryWrap>
  ),
}

export const Positions: Story = {
  parameters: {
    controls: {
      include: ["withShortcut"],
    },
  },

  args: {
    withShortcut: false,
  },

  render: (args) => (
    <StoryWrap>
      <TooltipProvider>
        <div className="grid grid-cols-2 gap-4">
          {(
            [
              "top",
              "right",
              "bottom",
              "left",
            ] as const
          ).map((side) => (
            <Tooltip
              key={`${side}-${args.withShortcut}`}
            >
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon-sm"
                  aria-label={side}
                >
                  <InfoIcon />
                </Button>
              </TooltipTrigger>

              <TooltipContent side={side}>
                {args.withShortcut ? (
                  <div className="flex items-center gap-2">
                    <span>
                      Open palette
                    </span>

                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <span>+</span>
                      <Kbd>K</Kbd>
                    </KbdGroup>
                  </div>
                ) : (
                  side
                )}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </StoryWrap>
  ),
}
