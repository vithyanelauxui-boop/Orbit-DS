import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@orbit-ds"

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={
        open ? "rotate-180 transition-transform" : "transition-transform"
      }
    >
      <path
        d="M4 6.5 8 10l4-3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const meta = {
  title: "Orbit DS/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use collapsibles for progressive disclosure, compact detail panels, advanced filters, and hide/show content inside larger layouts.

## Parameter Properties

- \`open\`: Controls whether the collapsible content is expanded.
- \`defaultOpen\`: Sets the initial expanded state for uncontrolled usage.
- \`CollapsibleTrigger\`: Toggles the collapsible state.
- \`CollapsibleContent\`: Holds the content that expands and collapses.
        `,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        className={[
          "flex justify-center px-6",
          context.viewMode === "docs"
            ? "items-start py-6"
            : "min-h-[70vh] items-center",
        ].join(" ")}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <Card className="max-w-lg">
        <Collapsible open={open} onOpenChange={setOpen}>
          <CardHeader className="border-b">
            <div className="flex items-center justify-between gap-3">
              <CardTitle>Advanced filters</CardTitle>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm">
                  Toggle
                  <ChevronIcon open={open} />
                </Button>
              </CollapsibleTrigger>
            </div>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="grid gap-2 py-4 text-sm text-muted-foreground">
              <div>Status: Active, Draft</div>
              <div>Owner: Design systems team</div>
              <div>Updated within the last 30 days</div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    )
  },
}

export const DefaultOpen: Story = {
  render: () => (
    <Card className="max-w-lg">
      <Collapsible defaultOpen>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between gap-3">
            <CardTitle>Release notes</CardTitle>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm">
                Collapse
              </Button>
            </CollapsibleTrigger>
          </div>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="grid gap-2 py-4 text-sm text-muted-foreground">
            <div>New `ButtonGroup` and `Calendar` stories</div>
            <div>Improved docs coverage for composable primitives</div>
            <div>Typechecked examples for Storybook consumers</div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  ),
}

export const InlineDetails: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="max-w-md rounded-xl border p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-medium">March invoice</div>
            <div className="text-sm text-muted-foreground">
              $2,480 due April 4
            </div>
          </div>
          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {open ? "Hide details" : "View details"}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-3 text-sm text-muted-foreground">
              Taxes, support fees, and seat changes are included in this billing
              period.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    )
  },
}
