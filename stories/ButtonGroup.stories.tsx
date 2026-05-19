import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@orbit-ds"

const sizes = ["default", "sm", "xs"] as const
const orientations = ["horizontal", "vertical"] as const

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        d="M4 6.5 8 10l4-3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        d="M8 3.25v9.5M3.25 8h9.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ButtonGroupPreview({
  orientation = "horizontal",
  size = "default",
}: {
  orientation?: (typeof orientations)[number]
  size?: (typeof sizes)[number]
}) {
  return (
    <ButtonGroup orientation={orientation}>
      <Button variant="outline" size={size}>
        Day
      </Button>
      <Button variant="outline" size={size}>
        Week
      </Button>
      <Button variant="outline" size={size}>
        Month
      </Button>
    </ButtonGroup>
  )
}

const meta = {
  title: "Components/Button Group",
  component: ButtonGroupPreview,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use button groups to present tightly related actions, segmented choices, compact toolbars, and split-button patterns.

## Composition

\`\`\`text
ButtonGroup
|-- Button
|-- Button
\`-- Button
\`\`\`

## Parameter Properties

- \`orientation\`: Demonstrates horizontal and vertical button group layouts.
- \`size\`: Demonstrates compatible button sizing inside the group.
- \`ButtonGroupSeparator\`: Adds separation between adjacent action clusters.
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
    orientation: {
      control: "inline-radio",
      options: orientations,
      description:
        "Switches the group between horizontal and vertical layouts.",
      table: {
        defaultValue: { summary: "horizontal" },
      },
    },
    size: {
      control: "select",
      options: sizes,
      description:
        "Adjusts the button size used inside the group preview.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
  },
  args: {
    orientation: "horizontal",
    size: "default",
  },
} satisfies Meta<typeof ButtonGroupPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Orientation: Story = {
  render: (args) => <ButtonGroupPreview {...args} />,
}

export const Sizes: Story = {
  argTypes: {
    size: { control: false },
    orientation: { control: false },
  },
  render: () => (
    <div className="grid gap-4">
      {sizes.map((size) => (
        <div
          key={size}
          className="flex items-center gap-4"
        >
          <div className="w-16 text-sm text-muted-foreground">
            {size}
          </div>
          <ButtonGroupPreview
            size={size}
            orientation="horizontal"
          />
        </div>
      ))}
    </div>
  ),
}

export const Nested: Story = {
  argTypes: {
    size: { control: false },
    orientation: {
      control: "inline-radio",
      options: orientations,
    },
  },
  render: ({ orientation = "horizontal" }) => (
    <div
      className={[
        "rounded-xl border p-3",
        orientation === "vertical"
          ? "flex flex-col items-start gap-3"
          : "flex flex-wrap items-center gap-3",
      ].join(" ")}
    >
      <ButtonGroup orientation={orientation}>
        <Button variant="outline" size="sm">
          Preview
        </Button>
        <Button variant="outline" size="sm">
          Publish
        </Button>
      </ButtonGroup>
      <ButtonGroup orientation={orientation}>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Add block"
        >
          <PlusIcon />
        </Button>
        <Button variant="outline" size="sm">
          Add block
        </Button>
      </ButtonGroup>
      <Button variant="default" size="sm">
        Save changes
      </Button>
    </div>
  ),
}

export const Separator: Story = {
  argTypes: {
    size: { control: false },
    orientation: {
      control: "inline-radio",
      options: orientations,
    },
  },
  render: ({ orientation = "horizontal" }) => (
    <div
      className={[
        "rounded-xl border p-1",
        orientation === "vertical"
          ? "flex flex-col items-start"
          : "flex flex-wrap items-center",
      ].join(" ")}
    >
      <ButtonGroup orientation={orientation}>
        <Button variant="ghost" size="sm">
          Undo
        </Button>
        <Button variant="ghost" size="sm">
          Redo
        </Button>
      </ButtonGroup>
      <ButtonGroupSeparator
        orientation={
          orientation === "horizontal"
            ? "vertical"
            : "horizontal"
        }
      />
      <ButtonGroup orientation={orientation}>
        <Button variant="ghost" size="sm">
          Left
        </Button>
        <Button variant="ghost" size="sm">
          Center
        </Button>
        <Button variant="ghost" size="sm">
          Right
        </Button>
      </ButtonGroup>
      <ButtonGroupSeparator
        orientation={
          orientation === "horizontal"
            ? "vertical"
            : "horizontal"
        }
      />
      <Button variant="ghost" size="sm">
        Share
      </Button>
    </div>
  ),
}

export const Split: Story = {
  argTypes: {
    size: { control: false },
    orientation: {
      control: "inline-radio",
      options: orientations,
    },
  },
  render: ({ orientation = "horizontal" }) => (
    <Popover>
      <ButtonGroup orientation={orientation}>
        <Button>Schedule send</Button>
        <PopoverTrigger asChild>
          <Button aria-label="More schedule options">
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
      </ButtonGroup>
      <PopoverContent className="w-56">
        <div className="grid gap-1">
          <Button variant="ghost" className="justify-start">
            Send now
          </Button>
          <Button variant="ghost" className="justify-start">
            Tomorrow, 9:00 AM
          </Button>
          <Button variant="ghost" className="justify-start">
            Next Monday, 8:30 AM
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
