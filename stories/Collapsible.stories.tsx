import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
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

type CollapsibleStoryArgs = {
  state?: "inactive" | "active"
}

const meta = {
  title: "Orbit DS/Collapsible",
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
  argTypes: {
    state: {
      control: "inline-radio",
      options: ["inactive", "active"],
      description:
        "Controls whether the collapsible is closed or open.",
    },
  },
  args: {
    state: "inactive",
  },
} satisfies Meta<CollapsibleStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    state: "inactive",
  },
  render: ({ state = "inactive" }) => {
    const open = state === "active"

    return (
      <Collapsible
        open={open}
        className="flex w-[350px] flex-col gap-2"
      >
        <div className="flex items-center justify-between gap-4 px-4">
          <h4 className="text-sm font-semibold">
            Order #4189
          </h4>

          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              aria-label="Toggle details"
            >
              <ChevronIcon open={open} />
              <span className="sr-only">
                Toggle details
              </span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
          <span className="text-muted-foreground">
            Status
          </span>
          <span className="font-medium">Shipped</span>
        </div>

        <CollapsibleContent className="flex flex-col gap-2">
          <div className="rounded-md border px-4 py-2 text-sm">
            <p className="font-medium">
              Shipping address
            </p>
            <p className="text-muted-foreground">
              100 Market St, San Francisco
            </p>
          </div>

          <div className="rounded-md border px-4 py-2 text-sm">
            <p className="font-medium">Items</p>
            <p className="text-muted-foreground">
              2x Studio Headphones
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

export const DefaultOpen: Story = {
  args: {
    state: "active",
  },
  render: ({ state = "active" }) => (
    <Collapsible
      open={state === "active"}
      className="flex w-[350px] flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">
          Order #4189
        </h4>

        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            aria-label="Toggle details"
          >
            <ChevronIcon open={state === "active"} />
            <span className="sr-only">
              Toggle details
            </span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">
          Status
        </span>
        <span className="font-medium">Shipped</span>
      </div>

      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">
            Shipping address
          </p>
          <p className="text-muted-foreground">
            100 Market St, San Francisco
          </p>
        </div>

        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Items</p>
          <p className="text-muted-foreground">
            2x Studio Headphones
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const InlineDetails: Story = {
  args: {
    state: "inactive",
  },
  render: ({ state = "inactive" }) => {
    const open = state === "active"

    return (
      <div className="max-w-md rounded-xl border p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-medium">March invoice</div>
            <div className="text-sm text-muted-foreground">
              $2,480 due April 4
            </div>
          </div>
          <Collapsible open={open}>
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
