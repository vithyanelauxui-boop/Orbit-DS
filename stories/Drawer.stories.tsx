import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@orbit-ds"

const meta = {
  title: "Orbit DS/Drawer",
  component: Drawer,
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
} satisfies Meta<typeof Drawer>

export default meta

type Story = StoryObj<typeof meta>

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

export const Bottom: Story = {
  render: () => <DrawerShell trigger="Open bottom drawer" />,
}

export const Top: Story = {
  render: () => <DrawerShell trigger="Open top drawer" direction="top" />,
}

export const Right: Story = {
  render: () => <DrawerShell trigger="Open right drawer" direction="right" />,
}

export const Left: Story = {
  render: () => <DrawerShell trigger="Open left drawer" direction="left" />,
}
