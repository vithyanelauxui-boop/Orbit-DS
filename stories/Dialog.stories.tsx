import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@orbit-ds"

const meta = {
  title: "Orbit DS/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use dialogs for focused tasks, confirmations, settings forms, and interruption-worthy flows that deserve a modal surface.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

function DialogShell({
  trigger,
  title,
  description,
  contentClassName,
  compact = false,
}: {
  trigger: string
  title: string
  description: string
  contentClassName?: string
  compact?: boolean
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{trigger}</Button>
      </DialogTrigger>
      <DialogContent className={contentClassName}>
        <DialogHeader className={compact ? "gap-1" : undefined}>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const Basic: Story = {
  render: () => (
    <DialogShell
      trigger="Open dialog"
      title="Invite teammates"
      description="Share a secure workspace link so your team can review components and release notes."
    />
  ),
}

export const Small: Story = {
  render: () => (
    <DialogShell
      trigger="Open small dialog"
      title="Save draft?"
      description="Your changes will remain private until you publish."
      contentClassName="sm:max-w-xs"
      compact
    />
  ),
}

export const Responsive: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open responsive dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Share release update</DialogTitle>
          <DialogDescription>
            Send a quick summary to reviewers before the release moves to
            published.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <div className="rounded-lg border p-3">
            <div className="font-medium text-foreground">Audience</div>
            <div>Design, engineering, and QA reviewers</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="font-medium text-foreground">Timing</div>
            <div>Send immediately or schedule for tomorrow morning</div>
          </div>
        </div>
        <DialogFooter showCloseButton>
          <Button>Send update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Delete project?</DialogTitle>
          <DialogDescription>
            This action permanently removes the project, drafts, and activity
            history.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
