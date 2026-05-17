import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Badge,
  Button,
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Spinner,
} from "@orbit-ds"

type SpinnerStoryArgs = {
  className?: string
  context?: "standalone" | "badge" | "input-group" | "empty"
}

function SpinnerPreview({
  className = "size-5",
  context = "standalone",
}: SpinnerStoryArgs) {
  if (context === "badge") {
    return (
      <Badge variant="secondary" className="gap-2 px-3 py-1">
        <Spinner className={className} />
        Syncing
      </Badge>
    )
  }

  if (context === "input-group") {
    return (
      <InputGroup className="max-w-sm">
        <InputGroupInput placeholder="Search components" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>
            <Spinner className={className} />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    )
  }

  if (context === "empty") {
    return (
      <Empty className="max-w-sm rounded-xl border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner className={className} />
          </EmptyMedia>
          <EmptyTitle>Preparing results</EmptyTitle>
          <EmptyDescription>
            We are loading the latest workspace activity for you.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  }

  return <Spinner className={className} />
}

const meta = {
  title: "Orbit DS/Spinner",
  component: SpinnerPreview,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use spinners for compact loading indicators inside buttons, panels, and status rows.

## Parameter Properties

- \`className\`: Adjusts the spinner sizing in story controls where applicable.
- \`context\`: Chooses whether the spinner appears alone, in a badge, in an input group, or in an empty state.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "inline-radio",
      options: ["size-4", "size-5", "size-6"],
    },
    context: {
      control: "select",
      options: ["standalone", "badge", "input-group", "empty"],
    },
  },
  args: {
    className: "size-5",
    context: "standalone",
  },
} satisfies Meta<SpinnerStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    controls: {
      include: ["className", "context"],
    },
  },
  render: (args) => <SpinnerPreview {...args} />,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-4" />
      <Spinner className="size-5" />
      <Spinner className="size-6" />
    </div>
  ),
}

export const InButton: Story = {
  render: ({ className }) => (
    <Button disabled className="gap-2">
      <Spinner className={className} />
      Saving changes
    </Button>
  ),
}
