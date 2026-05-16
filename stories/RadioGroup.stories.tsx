import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Card,
  CardContent,
  Field,
  FieldDescription,
  FieldLabel,
  RadioGroup,
  RadioGroupItem,
} from "@orbit-ds"

const billingOptions = [
  {
    value: "starter",
    title: "Starter",
    description: "For smaller teams shipping a single product.",
  },
  {
    value: "growth",
    title: "Growth",
    description: "Advanced workflows, permissions, and analytics.",
  },
  {
    value: "enterprise",
    title: "Enterprise",
    description: "Custom support, procurement, and compliance.",
  },
]

const meta = {
  title: "Orbit DS/Radio Group",
  component: RadioGroup,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Use radio groups when a user must choose a single option from a related set of choices.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel>Notification preference</FieldLabel>
      <RadioGroup defaultValue="all">
        <label className="flex items-center gap-3">
          <RadioGroupItem value="all" />
          <div className="space-y-0.5">
            <div className="text-sm font-medium">All updates</div>
            <FieldDescription>Product, billing, and team activity.</FieldDescription>
          </div>
        </label>
        <label className="flex items-center gap-3">
          <RadioGroupItem value="mentions" />
          <div className="space-y-0.5">
            <div className="text-sm font-medium">Mentions only</div>
            <FieldDescription>Only direct mentions and assignments.</FieldDescription>
          </div>
        </label>
        <label className="flex items-center gap-3">
          <RadioGroupItem value="none" />
          <div className="space-y-0.5">
            <div className="text-sm font-medium">Pause notifications</div>
            <FieldDescription>Silence email and in-app notifications.</FieldDescription>
          </div>
        </label>
      </RadioGroup>
    </Field>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Field className="max-w-md">
      <FieldLabel>Density</FieldLabel>
      <RadioGroup defaultValue="comfortable" className="grid-cols-3 gap-4">
        {["compact", "comfortable", "spacious"].map((value) => (
          <label key={value} className="flex items-center gap-2 rounded-lg border p-3">
            <RadioGroupItem value={value} />
            <span className="text-sm font-medium capitalize">{value}</span>
          </label>
        ))}
      </RadioGroup>
    </Field>
  ),
}

export const ChoiceCards: Story = {
  render: () => {
    const [value, setValue] = React.useState("growth")

    return (
      <Field className="max-w-3xl">
        <FieldLabel>Choose a plan</FieldLabel>
        <RadioGroup
          value={value}
          onValueChange={setValue}
          className="grid gap-4 md:grid-cols-3"
        >
          {billingOptions.map((option) => {
            const selected = value === option.value

            return (
              <label key={option.value} className="cursor-pointer">
                <Card
                  className={selected ? "border-primary ring-3 ring-primary/15" : ""}
                >
                  <CardContent className="flex items-start gap-3 p-4">
                    <RadioGroupItem value={option.value} />
                    <div className="space-y-1">
                      <div className="text-sm font-medium">{option.title}</div>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </label>
            )
          })}
        </RadioGroup>
      </Field>
    )
  },
}

export const DisabledOption: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel>Workspace region</FieldLabel>
      <RadioGroup defaultValue="us">
        <label className="flex items-center gap-3">
          <RadioGroupItem value="us" />
          <span className="text-sm font-medium">United States</span>
        </label>
        <label className="flex items-center gap-3">
          <RadioGroupItem value="eu" />
          <span className="text-sm font-medium">Europe</span>
        </label>
        <label className="flex items-center gap-3 opacity-70">
          <RadioGroupItem value="apac" disabled />
          <div className="space-y-0.5">
            <div className="text-sm font-medium">Asia Pacific</div>
            <FieldDescription>Coming soon for this workspace plan.</FieldDescription>
          </div>
        </label>
      </RadioGroup>
    </Field>
  ),
}
