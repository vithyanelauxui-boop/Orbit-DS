import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  BluetoothIcon,
  CircleDashedIcon,
  TrashIcon,
} from "@orbit-ds"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@orbit-ds"

type AlertDialogStoryArgs = {
  showMedia?: boolean
  mediaIcon?: "share" | "bluetooth" | "delete"
  destructive?: boolean
}

function getMediaIcon(
  icon: AlertDialogStoryArgs["mediaIcon"]
) {
  switch (icon) {
    case "bluetooth":
      return <BluetoothIcon />

    case "delete":
      return <TrashIcon />

    default:
      return <CircleDashedIcon />
  }
}

function AlertDialogDemo({
  showMedia = false,
  mediaIcon = "share",
  destructive = false,
  size = "default",
}: AlertDialogStoryArgs & {
  size?: "default" | "sm"
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={
            destructive
              ? "destructive"
              : "outline"
          }
        >
          Show Dialog
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent
        size={size === "sm" ? "sm" : undefined}
      >
        <AlertDialogHeader>
          {showMedia && (
            <AlertDialogMedia
              className={
                destructive
                  ? "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive"
                  : undefined
              }
            >
              {getMediaIcon(mediaIcon)}
            </AlertDialogMedia>
          )}

          <AlertDialogTitle>
            {destructive
              ? "Delete chat?"
              : "Are you absolutely sure?"}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {destructive
              ? "This action cannot be undone. This will permanently delete this chat conversation."
              : "This action cannot be undone. This will permanently delete your account and remove your data from our servers."}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            variant={
              destructive
                ? "destructive"
                : "default"
            }
          >
            {destructive
              ? "Delete"
              : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

const meta = {
  title: "Components/Alert Dialog",

  parameters: {
    layout: "centered",
  },

  argTypes: {
    destructive: {
      control: "boolean",
      description:
        "Makes the action button destructive",
    },

    mediaIcon: {
      control: "select",
      options: [
        "share",
        "bluetooth",
        "delete",
      ],
    },
  },

  tags: ["autodocs"],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <AlertDialogDemo {...args} />
  ),

  args: {
    destructive: false,
    showMedia: false,
  },
}

export const Small: Story = {
  render: (args) => (
    <AlertDialogDemo
      {...args}
      size="sm"
    />
  ),

  args: {
    destructive: false,
    showMedia: false,
  },
}

export const DefaultWithIcon: Story = {
  render: (args) => (
    <AlertDialogDemo {...args} />
  ),

  args: {
    destructive: false,
    showMedia: true,
    mediaIcon: "share",
  },
}

export const SmallWithIcon: Story = {
  render: (args) => (
    <AlertDialogDemo
      {...args}
      size="sm"
    />
  ),

  args: {
    destructive: false,
    showMedia: true,
    mediaIcon: "bluetooth",
  },
}

export const Destructive: Story = {
  render: () => (
    <AlertDialogDemo
      destructive
      showMedia
      mediaIcon="delete"
      size="sm"
    />
  ),
}
