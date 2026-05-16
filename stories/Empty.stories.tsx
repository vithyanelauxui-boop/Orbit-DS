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
    >
      <circle cx="7" cy="7" r="4.5" />
      <path d="m10.5 10.5 3 3" strokeLinecap="round" />
    </svg>
  )
}

const meta = {
  title: "Orbit DS/Empty",
  component: Empty,
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
} satisfies Meta<typeof Empty>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Empty className="max-w-lg rounded-xl border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchIcon />
        </EmptyMedia>
        <EmptyTitle>No matching results</EmptyTitle>
        <EmptyDescription>
          Try a broader search term or clear one of the active filters.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Empty className="max-w-lg rounded-xl border">
      <EmptyHeader>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Create the first project to start sharing components, notes, and release plans.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create project</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const RichContent: Story = {
  render: () => (
    <Empty className="max-w-lg rounded-xl border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchIcon />
        </EmptyMedia>
        <EmptyTitle>Nothing scheduled</EmptyTitle>
        <EmptyDescription>
          Your calendar is clear for this week. Add a release review or planning session.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
          Tip: invite teammates first so you can schedule collaborative reviews.
        </div>
        <Button variant="outline">Open calendar</Button>
      </EmptyContent>
    </Empty>
  ),
}
