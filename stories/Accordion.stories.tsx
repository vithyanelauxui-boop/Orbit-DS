import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@orbit-ds"

import { cn } from "../packages/orbit-ds/src/lib/utils"

const accordionItems = [
  {
    value: "item-1",
    title: "What payment methods do you accept?",
    content:
      "We accept major credit cards, debit cards, UPI, and selected digital wallets for one-time and subscription purchases.",
  },
  {
    value: "item-2",
    title: "Can I update my plan later?",
    content:
      "Yes. You can upgrade, downgrade, or cancel from your account settings, and changes take effect according to your billing cycle.",
  },
  {
    value: "item-3",
    title: "Do you offer team access?",
    content:
      "Team workspaces are available on higher tiers and include shared access, permissions, and collaboration-friendly billing.",
  },
] as const

type AccordionVariant =
  | "basic"
  | "multiple"
  | "disabled"
  | "borders"

type AccordionStoryArgs = {
  disabled?: boolean
  openItem?: string
  openItems?: string[]
  variant?: AccordionVariant
}

function AccordionPreview({
  disabled = false,
  openItem = "item-1",
  openItems = ["item-1"],
  type = "single",
  collapsible = true,
  className,
}: AccordionStoryArgs & {
  type?: "single" | "multiple"
  collapsible?: boolean
  className?: string
}) {
  const [singleValue, setSingleValue] =
    useState<string>(openItem)
  const [multipleValue, setMultipleValue] =
    useState<string[]>(openItems)

  useEffect(() => {
    setSingleValue(openItem)
  }, [openItem])

  useEffect(() => {
    setMultipleValue(openItems)
  }, [openItems])

  const items = accordionItems.map((item, index) => (
    <AccordionItem
      key={item.value}
      value={item.value}
      disabled={disabled && index === 1}
      className="last:border-b-0"
    >
      <AccordionTrigger>
        {item.title}
      </AccordionTrigger>

      <AccordionContent>
        {item.content}
      </AccordionContent>
    </AccordionItem>
  ))

  if (type === "multiple") {
    return (
      <Accordion
        type="multiple"
        value={multipleValue}
        onValueChange={setMultipleValue}
        className={cn("w-full max-w-2xl", className)}
      >
        {items}
      </Accordion>
    )
  }

  return (
    <Accordion
      type="single"
      collapsible={collapsible}
      value={singleValue}
      onValueChange={setSingleValue}
      className={cn("w-full max-w-2xl", className)}
    >
      {items}
    </Accordion>
  )
}

function VariantAccordion({
  variant = "basic",
}: {
  variant?: AccordionVariant
}) {
  switch (variant) {
    case "multiple":
      return (
        <AccordionPreview
          type="multiple"
          openItems={[
            "item-1",
            "item-2",
            "item-3",
          ]}
        />
      )

    case "disabled":
      return (
        <AccordionPreview
          disabled
          openItem="item-1"
        />
      )

    case "borders":
      return (
        <AccordionPreview
          openItem="item-1"
          className="rounded-2xl border bg-background px-6"
        />
      )

    default:
      return <AccordionPreview openItem="item-1" />
  }
}

const meta = {
  title: "Orbit DS/Accordion",
  component: AccordionPreview,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use accordions to progressively reveal related content while keeping dense layouts compact and scannable.

## Composition

\`\`\`text
Accordion
|-- AccordionItem
|   |-- AccordionTrigger
|   \`-- AccordionContent
\`-- AccordionItem
\`\`\`

## Parameters

- \`type\`: Chooses whether one item or multiple items can remain open.
- \`value\` and \`onValueChange\`: Control the currently open item or items.
- \`collapsible\`: Allows a single accordion item to close after it has been opened.
- \`disabled\`: Prevents interaction on a specific accordion item.
- \`className\`: Extends the accordion container with custom borders, radius, spacing, or surface styling.
        `,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        className={cn(
          "flex justify-center px-6",
          context.viewMode === "docs"
            ? "items-start py-6"
            : "min-h-[70vh] items-center",
        )}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<AccordionStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    openItem: "item-1",
  },
  argTypes: {
    openItem: {
      control: "radio",
      options: accordionItems.map(
        (item) => item.value,
      ),
      description:
        "Controls the opened accordion item for the single-open example.",
    },
  },
  render: (args) => (
    <AccordionPreview
      {...args}
      type="single"
    />
  ),
}

export const Multiple: Story = {
  args: {
    openItems: [
      "item-1",
      "item-2",
      "item-3",
    ],
  },
  argTypes: {
    openItems: {
      control: "check",
      options: accordionItems.map(
        (item) => item.value,
      ),
      description:
        "Controls the expanded accordion items for the multi-open example.",
    },
  },
  render: (args) => (
    <AccordionPreview
      {...args}
      type="multiple"
    />
  ),
}

export const Disabled: Story = {
  args: {
    openItem: "item-1",
  },
  argTypes: {
    openItem: {
      control: "radio",
      options: accordionItems.map(
        (item) => item.value,
      ),
      description:
        "Controls the opened item while the second item remains disabled.",
    },
  },
  render: (args) => (
    <AccordionPreview
      {...args}
      disabled
    />
  ),
}

export const Borders: Story = {
  args: {
    openItem: "item-1",
  },
  argTypes: {
    openItem: {
      control: "radio",
      options: accordionItems.map(
        (item) => item.value,
      ),
      description:
        "Controls the opened item inside the bordered accordion card.",
    },
  },
  render: (args) => (
    <AccordionPreview
      {...args}
      className="rounded-2xl border bg-background px-6"
    />
  ),
}

export const WithHeader: Story = {
  args: {
    variant: "basic",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "basic",
        "multiple",
        "disabled",
        "borders",
      ],
      description:
        "Selects which accordion variant is rendered below the section header.",
    },
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <div className="space-y-2 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Support
        </p>

        <h2 className="text-3xl font-semibold tracking-tight">
          Frequently Asked Questions
        </h2>

        <p className="text-sm text-muted-foreground">
          Everything you need to know about
          billing, plans, and team access.
        </p>
      </div>

      <div className="mt-6">
        <VariantAccordion
          variant={args.variant}
        />
      </div>
    </div>
  ),
}
