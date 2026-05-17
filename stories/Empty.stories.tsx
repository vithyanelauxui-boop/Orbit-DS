import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
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
      <path d="m10.5 10.5 3 3" strokeLinecap="round" />
    </svg>
  )
}

type EmptyStoryArgs = {
  showMedia?: boolean
  showTitle?: boolean
  showDescription?: boolean
  title?: string
  description?: string
}

function EmptyPreview({
  showMedia = true,
  showTitle = true,
  showDescription = true,
  title = "No Projects Yet",
  description = "You haven't created any projects yet. Get started by creating your first project.",
  children,
}: EmptyStoryArgs & {
  children?: React.ReactNode
}) {
  return (
    <Empty className="max-w-lg rounded-xl border">
      <EmptyHeader>
        {showMedia ? (
          <EmptyMedia variant="icon">
            <SearchIcon />
          </EmptyMedia>
        ) : null}
        {showTitle ? <EmptyTitle>{title}</EmptyTitle> : null}
        {showDescription ? (
          <EmptyDescription>{description}</EmptyDescription>
        ) : null}
      </EmptyHeader>
      {children ? <EmptyContent>{children}</EmptyContent> : null}
    </Empty>
  )
}

const meta = {
  title: "Orbit DS/Empty",
  component: EmptyPreview,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Use empty states for no-results views, first-run experiences, onboarding nudges, and blank collection screens.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showMedia: {
      control: "boolean",
      description: "Shows or hides the empty-state media icon.",
    },
    showTitle: {
      control: "boolean",
      description: "Shows or hides the empty-state title.",
    },
    showDescription: {
      control: "boolean",
      description: "Shows or hides the supporting empty-state description.",
    },
    title: {
      control: "text",
      description: "Sets the empty-state title.",
    },
    description: {
      control: "text",
      description: "Sets the empty-state description.",
    },
  },
  args: {
    showMedia: true,
    showTitle: true,
    showDescription: true,
    title: "No Projects Yet",
    description:
      "You haven't created any projects yet. Get started by creating your first project.",
  },
} satisfies Meta<EmptyStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => <EmptyPreview {...args} />,
}

export const WithAction: Story = {
  args: {
    title: "No Projects Yet",
    description:
      "You haven't created any projects yet. Get started by creating your first project.",
  },
  render: (args) => (
    <EmptyPreview {...args}>
      <Button>Create Project</Button>
      <Button variant="outline">Import Project</Button>
    </EmptyPreview>
  ),
}

export const RichContent: Story = {
  args: {
    title: "Nothing scheduled",
    description:
      "Your calendar is clear for this week. Add a release review or planning session.",
  },
  render: (args) => (
    <EmptyPreview {...args}>
      <div className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
        Tip: invite teammates first so you can schedule collaborative reviews.
      </div>
      <Button variant="outline">Open Calendar</Button>
    </EmptyPreview>
  ),
}
