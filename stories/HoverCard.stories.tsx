import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@orbit-ds"

const meta = {
  title: "Orbit DS/Hover Card",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use hover cards for lightweight profile previews, metadata tooltips, and richer contextual information on hover.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@ananya</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/80?img=32" alt="Ananya Rao" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="font-medium">Ananya Rao</div>
            <div className="text-sm text-muted-foreground">
              Product designer focused on design systems and publishing workflows.
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const RichContent: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Project details</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="grid gap-2">
          <div className="font-medium">Orbit DS migration</div>
          <div className="text-sm text-muted-foreground">
            Moving docs, tokens, and Storybook coverage into the shared library.
          </div>
          <div className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
            14 stories added this sprint
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
