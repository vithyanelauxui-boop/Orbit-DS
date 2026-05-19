import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@orbit-ds"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@orbit-ds"

type DialogStoryArgs = {
  showCloseButton?: boolean
  scrollableContent?: boolean
  stickyFooter?: boolean
}

function LongContent() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <p key={index} className="mb-4 leading-normal text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      ))}
    </>
  )
}

const meta = {
  title: "Components/Dialog",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showCloseButton: {
      control: "boolean",
      description: "Shows or hides the top-right close button.",
    },
    scrollableContent: {
      control: "boolean",
      description: "Makes dialog body scrollable.",
    },
    stickyFooter: {
      control: "boolean",
      description: "Keeps footer visible while content scrolls.",
    },
  },
  args: {
    showCloseButton: true,
    scrollableContent: true,
    stickyFooter: true,
  },
} satisfies Meta<DialogStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const CustomCloseButton: Story = {
  render: ({ showCloseButton = true }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-md"
        showCloseButton={showCloseButton}
      >
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>

          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-md border p-3 text-sm">
          https://orbit-ds.dev/docs/dialog
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>

          <Button>Copy Link</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">No Close Button</Button>
      </DialogTrigger>

      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No Close Button</DialogTitle>

          <DialogDescription>
            This dialog has no close button in the header or footer.
          </DialogDescription>
        </DialogHeader>

        <div className="text-sm text-muted-foreground">
          Users can dismiss this dialog using outside click or escape key.
        </div>
      </DialogContent>
    </Dialog>
  ),
}

export const ScrollableContent: Story = {
  render: ({
    showCloseButton = true,
    scrollableContent = true,
  }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Scrollable Content</Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-lg"
        showCloseButton={showCloseButton}
      >
        <DialogHeader>
          <DialogTitle>Scrollable Content</DialogTitle>

          <DialogDescription>
            This dialog demonstrates scrollable content.
          </DialogDescription>
        </DialogHeader>

        <div
          className={
            scrollableContent
              ? "-mx-4 max-h-[50vh] overflow-y-auto px-4"
              : "-mx-4 px-4"
          }
        >
          <LongContent />
        </div>
      </DialogContent>
    </Dialog>
  ),
}

export const StickyFooter = ({
  showCloseButton = true,
  stickyFooter = true,
}: {
  showCloseButton?: boolean;
  stickyFooter?: boolean;
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Sticky Footer</Button>
    </DialogTrigger>

    <DialogContent
      className="flex flex-col sm:max-w-lg max-h-[80vh]"
      showCloseButton={showCloseButton}
    >
      <DialogHeader>
        <DialogTitle>Sticky Footer</DialogTitle>
        <DialogDescription>
          This dialog has a sticky footer that stays visible while the content
          scrolls.
        </DialogDescription>
      </DialogHeader>

      <div className="flex-1 overflow-y-auto -mx-4 px-4 min-h-0">
        <LongContent />
      </div>

      {stickyFooter && (
        <DialogFooter className="pt-4">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button>Continue</Button>
        </DialogFooter>
      )}
    </DialogContent>
  </Dialog>
);
