import * as React from "react"
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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@orbit-ds"

type DrawerStoryArgs = {
  direction?: "bottom" | "left" | "right" | "top"
}

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  args: {
    direction: "bottom",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use drawers for mobile-first flows, secondary task panels, inline settings, and side-mounted detail views.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "inline-radio",
      options: ["bottom", "top", "right", "left"],
      description:
        "Changes the side from which the drawer enters.",
    },
  },
} satisfies Meta<DrawerStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

function LongContent() {
  return (
    <>
      {Array.from({ length: 14 }).map((_, index) => (
        <div key={index} className="rounded-lg border p-3">
          <div className="font-medium text-foreground">
            Update section {index + 1}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Review recent changes, confirm publishing details, and capture any
            follow-up items for the team before closing this panel.
          </div>
        </div>
      ))}
    </>
  )
}

function useStoryIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")

    const handleChange = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleChange()
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return isMobile
}

function DrawerShell({
  trigger,
  direction = "bottom",
}: {
  trigger: string
  direction?: "bottom" | "left" | "right" | "top"
}) {
  const isSideDrawer = direction === "left" || direction === "right"

  return (
    <Drawer direction={direction}>
      <DrawerTrigger asChild>
        <Button>{trigger}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Workspace details</DrawerTitle>
          <DrawerDescription>
            Review project context, recent activity, and the next recommended actions.
          </DrawerDescription>
        </DrawerHeader>
        <div
          className={
            isSideDrawer
              ? "max-h-[60vh] overflow-y-auto px-4 pb-2"
              : "max-h-[50vh] overflow-y-auto px-4 pb-2"
          }
        >
          <div className="grid gap-3 text-sm text-muted-foreground">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="rounded-lg border p-3">
                <div className="font-medium text-foreground">
                  Activity {index + 1}
                </div>
                <div>
                  Review notes, publishing status, and follow-up actions for this
                  workspace section.
                </div>
              </div>
            ))}
          </div>
        </div>
        <DrawerFooter>
          <Button>Open workspace</Button>
          <Button variant="outline">Dismiss</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export const DrawerStory: Story = {
  name: "Sides",
  render: ({ direction = "bottom" }) => (
    <DrawerShell
      trigger={`Open ${direction} drawer`}
      direction={direction}
    />
  ),
}

export const ScrollableContent: Story = {
  render: () => (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button>Scrollable Content</Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Scrollable Content</DrawerTitle>
          <DrawerDescription>
            This drawer keeps longer content readable without pushing actions
            off-screen.
          </DrawerDescription>
        </DrawerHeader>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-2">
          <div className="grid gap-3">
            <LongContent />
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
          <Button>Continue</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

function ResponsiveDialogShell() {
  const isMobile = useStoryIsMobile()

  const content = (
    <>
      <div className="grid gap-4 px-4 pb-2 text-sm text-muted-foreground">
        <div className="rounded-lg border p-3">
          Surface project status, recent owner updates, and next steps in one
          responsive workflow.
        </div>
        <div className="rounded-lg border p-3">
          On smaller screens this opens as a bottom drawer. On larger screens it
          switches to a centered dialog.
        </div>
      </div>
    </>
  )

  if (isMobile) {
    return (
      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button>Responsive Dialog</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Responsive Dialog</DrawerTitle>
            <DrawerDescription>
              Mobile users get a drawer pattern optimized for touch and smaller
              screens.
            </DrawerDescription>
          </DrawerHeader>
          {content}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
            <Button>Save Changes</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Responsive Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Responsive Dialog</DialogTitle>
          <DialogDescription>
            Desktop users get a dialog presentation while the content and actions
            stay consistent.
          </DialogDescription>
        </DialogHeader>
        {content}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const ResponsiveDialog: Story = {
  render: () => <ResponsiveDialogShell />,
}
