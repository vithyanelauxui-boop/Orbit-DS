import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@orbit-ds"

const sections = [
  "Workspace details",
  "Brand preferences",
  "Notification settings",
  "Connected apps",
  "Audit history",
  "Billing controls",
]

const meta = {
  title: "Orbit DS/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Use sheets for supplemental flows that should slide in from an edge without taking the user away from the current page.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "inline-radio",
      options: ["right", "left", "top", "bottom"],
      description: "Controls which edge the sheet slides in from.",
      table: {
        defaultValue: { summary: "right" },
      },
    },
    showCloseButton: {
      control: "boolean",
      description: "Toggles the close button in the top-right corner.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
  args: {
    side: "right",
    showCloseButton: true,
  },
} satisfies Meta<typeof Sheet>

export default meta

type Story = StoryObj<typeof meta>

function SettingsSheet({
  side = "right",
  showCloseButton = true,
}: {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent side={side} showCloseButton={showCloseButton}>
        <SheetHeader>
          <SheetTitle>Workspace settings</SheetTitle>
          <SheetDescription>
            Review and update key preferences without leaving the current page.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-4">
          <div className="space-y-4 pb-4">
            {sections.map((section) => (
              <div key={section} className="space-y-3">
                <div className="space-y-1">
                  <div className="text-sm font-medium">{section}</div>
                  <p className="text-sm text-muted-foreground">
                    Configure defaults and review recent changes for this section.
                  </p>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </div>
        <SheetFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export const Playground: Story = {
  render: ({ side, showCloseButton }) => (
    <SettingsSheet
      side={side}
      showCloseButton={showCloseButton}
    />
  ),
}
