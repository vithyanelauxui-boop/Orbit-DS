import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Icon,
} from "@orbit-ds"

const dialogSizes = {
  small: "sm:max-w-xs",
  default: "sm:max-w-sm",
  medium: "sm:max-w-md",
} as const

const mediaIcons = [
  "image",
  "info",
  "warning-diamond",
  "check-circle",
  "bell",
] as const

const cancelIcons = [
  "arrow-left",
  "arrow-right",
  "x-circle",
  "warning-circle",
  "info",
] as const

type AlertDialogStoryArgs = {
  triggerText?: string
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
  showMediaIcon?: boolean
  media?: boolean
  mediaIcon?: (typeof mediaIcons)[number]
  cancelIcon?: (typeof cancelIcons)[number]
  cancelIconPosition?: "left" | "right"
  destructive?: boolean
  compact?: boolean
  dialogSize?: keyof typeof dialogSizes
}

function CancelButton({
  label,
  icon,
  position,
}: {
  label: string
  icon: (typeof cancelIcons)[number]
  position: "left" | "right"
}) {
  const iconElement = (
    <Icon
      name={icon}
      variant="regular"
      className="size-4"
    />
  )

  return (
    <DialogClose asChild>
      <Button variant="outline">
        {position === "left" ? iconElement : null}
        {label}
        {position === "right" ? iconElement : null}
      </Button>
    </DialogClose>
  )
}

function DialogShell({
  triggerText = "Open dialog",
  title = "Invite teammates",
  description = "Send secure invite links so your team can review components, tokens, and usage guidance.",
  confirmText = "Send invites",
  cancelText = "Cancel",
  showMediaIcon = true,
  media = false,
  mediaIcon = "image",
  cancelIcon = "arrow-left",
  cancelIconPosition = "left",
  destructive = false,
  compact = false,
  dialogSize = "default",
}: AlertDialogStoryArgs) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={destructive ? "destructive" : "default"}
        >
          {triggerText}
        </Button>
      </DialogTrigger>

      <DialogContent className={dialogSizes[dialogSize]}>
        {media && showMediaIcon ? (
          <div className="-mx-4 -mt-4 overflow-hidden rounded-t-xl border-b">
            <div className="flex h-40 items-center justify-center bg-linear-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
              <Icon
                name={mediaIcon}
                variant={
                  destructive
                    ? "fill"
                    : "regular"
                }
                size={56}
                className={
                  destructive
                    ? "text-destructive"
                    : "text-muted-foreground"
                }
              />
            </div>
          </div>
        ) : null}

        <DialogHeader className={compact ? "gap-1" : undefined}>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <CancelButton
            label={cancelText}
            icon={cancelIcon}
            position={cancelIconPosition}
          />

          <Button
            variant={destructive ? "destructive" : "default"}
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const meta = {
  title: "Orbit DS/Alert Dialog",
  component: DialogShell,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use alert dialogs for high-importance confirmations, destructive actions, and focused decision-making moments.

## Composition

\`\`\`text
Dialog
|-- DialogTrigger
\`-- DialogContent
    |-- DialogHeader
    |   |-- DialogTitle
    |   \`-- DialogDescription
    \`-- DialogFooter
\`\`\`

## Parameters

- \`DialogTrigger\`: Opens the modal and usually wraps the initiating button.
- \`DialogContent\`: Defines the modal surface, width, spacing, and close affordances.
- \`DialogTitle\`: Supplies the primary question or confirmation heading.
- \`DialogDescription\`: Supplies the supporting context and consequence text.
- \`DialogFooter\`: Holds the confirm and cancel actions.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    triggerText: {
      control: "text",
      description:
        "Sets the button label used to open the alert dialog.",
    },
    title: {
      control: "text",
      description:
        "Sets the main confirmation question shown in `DialogTitle`.",
    },
    description: {
      control: "text",
      description:
        "Sets the supporting body copy shown in `DialogDescription`.",
    },
    confirmText: {
      control: "text",
      description:
        "Sets the primary action label in the dialog footer.",
    },
    cancelText: {
      control: "text",
      description:
        "Sets the cancel action label in the dialog footer.",
    },
    media: {
      control: "boolean",
      description:
        "Shows or hides the media panel above the dialog text.",
    },
    showMediaIcon: {
      control: "boolean",
      description:
        "Shows or hides the icon inside the optional media panel.",
    },
    mediaIcon: {
      control: "select",
      options: mediaIcons,
      description:
        "Selects the icon displayed inside the optional media panel.",
    },
    cancelIcon: {
      control: "select",
      options: cancelIcons,
      description:
        "Selects the icon rendered inside the cancel button.",
    },
    cancelIconPosition: {
      control: "inline-radio",
      options: ["left", "right"],
      description:
        "Moves the cancel icon to the left or right side of the button label.",
    },
    destructive: {
      control: "boolean",
      description:
        "Toggles destructive styling for the trigger, media icon, and confirm action.",
    },
    compact: {
      control: "boolean",
      description:
        "Reduces vertical spacing in the dialog header for tighter layouts.",
    },
    dialogSize: {
      control: "inline-radio",
      options: Object.keys(dialogSizes),
      description:
        "Chooses the max width of the dialog content.",
    },
  },
} satisfies Meta<AlertDialogStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    triggerText: "Open dialog",
    title: "Invite teammates",
    description:
      "Send secure invite links so your team can review components, tokens, and usage guidance.",
    confirmText: "Send invites",
    cancelText: "Cancel",
    dialogSize: "default",
  },
  render: (args) => <DialogShell {...args} />,
}

export const Small: Story = {
  args: {
    triggerText: "Open small dialog",
    title: "Save draft?",
    description:
      "Your changes will remain private until you publish.",
    confirmText: "Save draft",
    cancelText: "Back",
    compact: true,
    dialogSize: "small",
  },
  render: (args) => <DialogShell {...args} />,
}

export const Media: Story = {
  args: {
    triggerText: "Open media dialog",
    title: "Share release update",
    description:
      "Send a quick summary to reviewers before the release moves to published.",
    confirmText: "Send update",
    cancelText: "Cancel",
    media: true,
    showMediaIcon: true,
    mediaIcon: "image",
    dialogSize: "medium",
  },
  render: (args) => <DialogShell {...args} />,
}

export const SmallWithMedia: Story = {
  args: {
    triggerText: "Open compact media dialog",
    title: "Ready to publish?",
    description:
      "Review the final content and confirm the release window before you proceed.",
    confirmText: "Publish",
    cancelText: "Review again",
    compact: true,
    media: true,
    showMediaIcon: true,
    mediaIcon: "info",
    dialogSize: "small",
  },
  render: (args) => <DialogShell {...args} />,
}

export const Destructive: Story = {
  args: {
    triggerText: "Open destructive dialog",
    title: "Delete project?",
    description:
      "This permanently removes the project, its activity history, and all associated drafts.",
    confirmText: "Delete",
    cancelText: "Keep project",
    destructive: true,
    media: true,
    showMediaIcon: true,
    mediaIcon: "warning-diamond",
    cancelIcon: "arrow-right",
    cancelIconPosition: "right",
  },
  render: (args) => <DialogShell {...args} />,
}
