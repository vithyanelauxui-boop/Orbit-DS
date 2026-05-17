import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Card,
  CardContent,
  Field,
  FieldDescription,
  FieldError,
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

function StoryWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[24vh] items-center justify-center p-4">
      {children}
    </div>
  )
}

function RadioGroupPreview({
  controlPlacement = "start",
  isActive = true,
  invalid = false,
}: {
  controlPlacement?: "start" | "end"
  isActive?: boolean
  invalid?: boolean
}) {
  const defaultValue = isActive ? "all" : undefined

  return (
    <Field className="max-w-sm" data-invalid={invalid || undefined}>
      <FieldLabel>Notification preference</FieldLabel>

      <RadioGroup defaultValue={defaultValue}>
        {[
          {
            value: "all",
            title: "All updates",
            description: "Product, billing, and team activity.",
          },
          {
            value: "mentions",
            title: "Mentions only",
            description: "Only direct mentions and assignments.",
          },
          {
            value: "none",
            title: "Pause notifications",
            description: "Silence email and in-app notifications.",
          },
        ].map((option) => (
          <label
            key={option.value}
            className={[
              "flex gap-3",
              controlPlacement === "end"
                ? "flex-row-reverse items-center justify-between"
                : "items-start",
            ].join(" ")}
          >
            <RadioGroupItem
              value={option.value}
              aria-invalid={invalid || undefined}
            />

            <div className="space-y-0.5">
              <div className="text-sm font-medium">
                {option.title}
              </div>

              <FieldDescription>
                {option.description}
              </FieldDescription>
            </div>
          </label>
        ))}
      </RadioGroup>

      {invalid ? (
        <FieldError>
          Select one notification preference to continue.
        </FieldError>
      ) : null}
    </Field>
  )
}

const meta = {
  title: "Orbit DS/Radio Group",
  component: RadioGroupPreview,

  parameters: {
    docs: {
      description: {
        component: `
Use radio groups when a user must choose a single option from a related set of choices.

## Parameter Properties

- \`controlPlacement\`: Moves the radio control to the start or end of each option row.
- \`isActive\`: Toggles whether the first option starts selected.
- \`invalid\`: Shows invalid styling and an error message for required-choice flows.
        `,
      },
    },
  },

  tags: ["autodocs"],

  argTypes: {
    controlPlacement: {
      control: "inline-radio",
      options: ["start", "end"],
      description:
        "Moves the radio control to the start or end of each option row.",
      table: {
        defaultValue: { summary: "start" },
      },
    },

    isActive: {
      control: "boolean",
      description:
        "Toggles whether the first option starts selected.",
      table: {
        defaultValue: { summary: "true" },
      },
    },

    invalid: {
      control: "boolean",
      description:
        "Shows invalid styling and an error message for required-choice flows.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },

  args: {
    controlPlacement: "start",
    isActive: true,
    invalid: false,
  },
} satisfies Meta<typeof RadioGroupPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    controls: {
      include: ["controlPlacement", "isActive"],
    },
  },

  render: (args) => (
    <StoryWrap>
      <RadioGroupPreview {...args} />
    </StoryWrap>
  ),
}

export const Invalid: Story = {
  args: {
    invalid: true,
  },

  parameters: {
    controls: {
      include: ["controlPlacement", "isActive"],
    },
  },

  render: (args) => (
    <StoryWrap>
      <RadioGroupPreview {...args} invalid />
    </StoryWrap>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <StoryWrap>
      <Field className="max-w-md">
        <FieldLabel>Density</FieldLabel>

        <RadioGroup
          defaultValue="comfortable"
          className="grid-cols-3 gap-4"
        >
          {["compact", "comfortable", "spacious"].map((value) => (
            <label
              key={value}
              className="flex items-center gap-2 rounded-lg border p-3"
            >
              <RadioGroupItem value={value} />

              <span className="text-sm font-medium capitalize">
                {value}
              </span>
            </label>
          ))}
        </RadioGroup>
      </Field>
    </StoryWrap>
  ),
}

export const ChoiceCards: Story = {
  render: () => {
    const [value, setValue] = React.useState("growth")

    return (
      <StoryWrap>
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
                <label
                  key={option.value}
                  className="cursor-pointer"
                >
                  <Card
                    className={
                      selected
                        ? "border-primary ring-3 ring-primary/15"
                        : ""
                    }
                  >
                    <CardContent className="flex items-start gap-3 p-4">
                      <RadioGroupItem value={option.value} />

                      <div className="space-y-1">
                        <div className="text-sm font-medium">
                          {option.title}
                        </div>

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
      </StoryWrap>
    )
  },
}

export const DisabledOption: Story = {
  render: () => (
    <StoryWrap>
      <Field className="max-w-sm">
        <FieldLabel>Workspace region</FieldLabel>

        <RadioGroup defaultValue="us">
          <label className="flex items-center gap-3">
            <RadioGroupItem value="us" />
            <span className="text-sm font-medium">
              United States
            </span>
          </label>

          <label className="flex items-center gap-3">
            <RadioGroupItem value="eu" />
            <span className="text-sm font-medium">
              Europe
            </span>
          </label>

          <label className="flex items-center gap-3 opacity-70">
            <RadioGroupItem value="apac" disabled />

            <div className="space-y-0.5">
              <div className="text-sm font-medium">
                Asia Pacific
              </div>

              <FieldDescription>
                Coming soon for this workspace plan.
              </FieldDescription>
            </div>
          </label>
        </RadioGroup>
      </Field>
    </StoryWrap>
  ),
}
