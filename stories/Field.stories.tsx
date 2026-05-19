import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Switch,
  Textarea,
} from "@orbit-ds"

type Orientation =
  | "vertical"
  | "horizontal"
  | "responsive"

type BaseArgs = {
  orientation?: Orientation
}

type FieldStoryArgs = BaseArgs & {
  disabled?: boolean
  invalid?: boolean
  rows?: number
  range?: boolean
  checked?: boolean
}

function StoryFrame({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full justify-center px-6 py-10">
      <div className="w-full max-w-2xl">
        {children}
      </div>
    </div>
  )
}

const fieldClass = "items-center gap-4"

const cardClass =
  "w-full rounded-2xl border p-6"

function FieldStorybookPreview(
  _args: FieldStoryArgs
) {
  return null
}

const meta = {
  title: "Components/Field",

  component: FieldStorybookPreview,

  parameters: {
    layout: "centered",

    docs: {
      description: {
        component: `
Use field primitives to structure labels,
helper text, validation, grouped controls,
and semantic form layouts.
        `,
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof FieldStorybookPreview>

export default meta

type Story = StoryObj<typeof meta>

export const InputField: Story = {
  args: {
    disabled: false,
    invalid: false,
  },

  argTypes: {
    disabled: {
      control: "boolean",
    },

    invalid: {
      control: "boolean",
    },
  },

  render: ({ disabled, invalid }) => (
    <StoryFrame>
      <Field
        className={cardClass}
        data-invalid={invalid}
      >
        <FieldLabel htmlFor="workspace-name">
          Workspace name
        </FieldLabel>

        <Input
          id="workspace-name"
          disabled={disabled}
          aria-invalid={invalid}
          defaultValue="Orbit DS"
        />

        {invalid ? (
          <FieldError>
            Use only letters and numbers.
          </FieldError>
        ) : (
          <FieldDescription>
            This appears in shared links.
          </FieldDescription>
        )}
      </Field>
    </StoryFrame>
  ),
}

export const TextareaField: Story = {
  args: {
    disabled: false,
    rows: 4,
  },

  argTypes: {
    disabled: {
      control: "boolean",
    },

    rows: {
      control: {
        type: "range",
        min: 3,
        max: 10,
        step: 1,
      },
    },
  },

  render: ({ disabled, rows }) => (
    <StoryFrame>
      <Field className={cardClass}>
        <FieldLabel htmlFor="summary">
          Release summary
        </FieldLabel>

        <Textarea
          id="summary"
          rows={rows}
          disabled={disabled}
          placeholder="Summarize updates..."
        />

        <FieldDescription>
          Keep it concise.
        </FieldDescription>
      </Field>
    </StoryFrame>
  ),
}

export const SelectField: Story = {
  args: {
    disabled: false,
  },

  argTypes: {
    disabled: {
      control: "boolean",
    },
  },

  render: ({ disabled }) => (
    <StoryFrame>
      <Field className={cardClass}>
        <FieldLabel htmlFor="environment">
          Environment
        </FieldLabel>

        <Select
          defaultValue="staging"
          disabled={disabled}
        >
          <SelectTrigger
            id="environment"
            className="w-full"
          >
            <SelectValue placeholder="Select environment" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="development">
              Development
            </SelectItem>

            <SelectItem value="staging">
              Staging
            </SelectItem>

            <SelectItem value="production">
              Production
            </SelectItem>
          </SelectContent>
        </Select>

        <FieldDescription>
          Select deployment target.
        </FieldDescription>
      </Field>
    </StoryFrame>
  ),
}

export const SliderField: Story = {
  args: {
    range: false,
    disabled: false,
  },

  argTypes: {
    range: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },
  },

  render: ({ range, disabled }) => {
    const [value, setValue] =
      React.useState(
        range ? [25, 75] : [72],
      )

    return (
      <StoryFrame>
        <Field className={cardClass}>
          <FieldLabel htmlFor="coverage">
            Coverage target
          </FieldLabel>

          <FieldContent className="space-y-3">
            <Slider
              id="coverage"
              value={value}
              onValueChange={setValue}
              max={100}
              step={1}
              disabled={disabled}
            />

            <FieldDescription>
              {range
                ? `${value[0]}% - ${value[1]}%`
                : `${value[0]}%`}{" "}
              coverage target.
            </FieldDescription>
          </FieldContent>
        </Field>
      </StoryFrame>
    )
  },
}

export const CheckboxField: Story = {
  args: {
    checked: true,
    disabled: false,
    orientation: "horizontal",
  },

  argTypes: {
    checked: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    orientation: {
      control: "inline-radio",

      options: [
        "vertical",
        "horizontal",
        "responsive",
      ],
    },
  },

  render: ({
    orientation,
    checked,
    disabled,
  }) => {
    const [enabled, setEnabled] =
      React.useState(checked)

    React.useEffect(() => {
      setEnabled(checked)
    }, [checked])

    return (
      <StoryFrame>
        <Field
          orientation={orientation}
          className={`${cardClass} ${fieldClass}`}
        >
          <Checkbox
            id="notify-reviewers"
            checked={enabled}
            disabled={disabled}
            onCheckedChange={(value) =>
              setEnabled(value === true)
            }
          />

          <FieldContent className="space-y-1">
            <FieldTitle>
              Notify reviewers
            </FieldTitle>

            <FieldDescription>
              Send notifications when ready
              for review.
            </FieldDescription>
          </FieldContent>
        </Field>
      </StoryFrame>
    )
  },
}

export const RadioField: Story = {
  args: {
    orientation: "horizontal",
  },

  argTypes: {
    orientation: {
      control: "inline-radio",

      options: [
        "vertical",
        "horizontal",
        "responsive",
      ],
    },
  },

  render: ({ orientation }) => (
    <StoryFrame>
      <FieldSet className={cardClass}>
        <FieldLegend>
          Release channel
        </FieldLegend>

        <FieldDescription>
          Choose rollout audience.
        </FieldDescription>

        <RadioGroup
          defaultValue="beta"
          className="space-y-4"
        >
          <Field
            orientation={orientation}
            className={fieldClass}
          >
            <RadioGroupItem
              id="beta"
              value="beta"
            />

            <FieldContent className="space-y-1">
              <FieldLabel htmlFor="beta">
                Beta users
              </FieldLabel>

              <FieldDescription>
                Early validation.
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field
            orientation={orientation}
            className={fieldClass}
          >
            <RadioGroupItem
              id="all"
              value="all"
            />

            <FieldContent className="space-y-1">
              <FieldLabel htmlFor="all">
                All users
              </FieldLabel>

              <FieldDescription>
                Full release.
              </FieldDescription>
            </FieldContent>
          </Field>
        </RadioGroup>
      </FieldSet>
    </StoryFrame>
  ),
}

export const SwitchField: Story = {
  args: {
    checked: true,
    disabled: false,
    orientation: "horizontal",
  },

  argTypes: {
    checked: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    orientation: {
      control: "inline-radio",

      options: [
        "vertical",
        "horizontal",
        "responsive",
      ],
    },
  },

  render: ({
    orientation,
    checked,
    disabled,
  }) => {
    const [enabled, setEnabled] =
      React.useState(checked)

    React.useEffect(() => {
      setEnabled(checked)
    }, [checked])

    return (
      <StoryFrame>
        <Field
          orientation={orientation}
          className={`${cardClass} ${fieldClass}`}
        >
          <Switch
            id="private-mode"
            checked={enabled}
            disabled={disabled}
            onCheckedChange={setEnabled}
          />

          <FieldContent className="space-y-1">
            <FieldLabel htmlFor="private-mode">
              Private mode
            </FieldLabel>

            <FieldDescription>
              Hide draft content.
            </FieldDescription>
          </FieldContent>
        </Field>
      </StoryFrame>
    )
  },
}

export const ChoiceCard: Story = {
  render: () => (
    <StoryFrame>
      <FieldSet className={cardClass}>
        <FieldLegend>
          Publishing mode
        </FieldLegend>

        <FieldDescription>
          Choose delivery method.
        </FieldDescription>

        <RadioGroup
          defaultValue="scheduled"
          className="grid gap-4 md:grid-cols-2"
        >
          <FieldLabel htmlFor="publish-now">
            <Field className="rounded-xl border p-4 hover:bg-muted/50">
              <RadioGroupItem
                id="publish-now"
                value="now"
              />

              <FieldContent className="space-y-1">
                <FieldTitle>
                  Publish now
                </FieldTitle>

                <FieldDescription>
                  Notify immediately.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>

          <FieldLabel htmlFor="publish-later">
            <Field className="rounded-xl border p-4 hover:bg-muted/50">
              <RadioGroupItem
                id="publish-later"
                value="scheduled"
              />

              <FieldContent className="space-y-1">
                <FieldTitle>
                  Schedule send
                </FieldTitle>

                <FieldDescription>
                  Coordinate timing.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>
    </StoryFrame>
  ),
}

export const FieldGroupVariants: Story = {
  args: {
    orientation: "horizontal",
  },

  argTypes: {
    orientation: {
      control: "inline-radio",

      options: [
        "vertical",
        "horizontal",
        "responsive",
      ],
    },
  },

  render: ({ orientation }) => (
    <StoryFrame>
      <div className="flex flex-col gap-8">
        <FieldGroup
          className={`${cardClass} space-y-6`}
        >
          <Field
            orientation={
              orientation === "responsive"
                ? "vertical"
                : orientation
            }
            className={fieldClass}
          >
            <FieldLabel
              htmlFor="project-name"
              className="w-40 shrink-0"
            >
              Project name
            </FieldLabel>

            <Input
              id="project-name"
              defaultValue="Orbit DS"
            />
          </Field>

          <Field
            orientation={
              orientation === "responsive"
                ? "vertical"
                : orientation
            }
            className={fieldClass}
          >
            <FieldLabel
              htmlFor="project-slug"
              className="w-40 shrink-0"
            >
              Project slug
            </FieldLabel>

            <Input
              id="project-slug"
              defaultValue="orbit-ds"
            />
          </Field>
        </FieldGroup>

        <FieldGroup
          className={`${cardClass} space-y-6`}
        >
          <Field
            orientation="horizontal"
            className={fieldClass}
          >
            <FieldLabel
              htmlFor="domain"
              className="w-40 shrink-0"
            >
              Custom domain
            </FieldLabel>

            <FieldContent className="space-y-2">
              <Input
                id="domain"
                placeholder="docs.example.com"
              />

              <FieldDescription>
                Connect verified domain.
              </FieldDescription>
            </FieldContent>
          </Field>

          <FieldSeparator>
            Advanced
          </FieldSeparator>

          <Field
            orientation={orientation}
            className={fieldClass}
          >
            <FieldLabel
              htmlFor="cdn"
              className="w-40 shrink-0"
            >
              Asset base URL
            </FieldLabel>

            <FieldContent className="space-y-2">
              <Input
                id="cdn"
                placeholder="https://cdn.example.com"
              />

              <FieldDescription>
                Used for shared assets.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </div>
    </StoryFrame>
  ),
}

export const FieldSetStory: Story = {
  name: "FieldSet",

  render: () => (
    <StoryFrame>
      <FieldSet className={cardClass}>
        <FieldLegend>
          Workspace settings
        </FieldLegend>

        <FieldDescription>
          Configure workspace details.
        </FieldDescription>

        <FieldGroup className="space-y-6">
          <Field className="space-y-2">
            <FieldLabel htmlFor="name">
              Workspace name
            </FieldLabel>

            <Input
              id="name"
              defaultValue="Orbit DS"
            />
          </Field>

          <Field className="space-y-2">
            <FieldLabel htmlFor="description">
              Description
            </FieldLabel>

            <Textarea
              id="description"
              placeholder="Describe workspace purpose"
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    </StoryFrame>
  ),
}

export const ErrorState: Story = {
  render: () => (
    <StoryFrame>
      <Field
        className={cardClass}
        data-invalid="true"
      >
        <FieldLabel htmlFor="slug">
          Project slug
        </FieldLabel>

        <Input
          id="slug"
          aria-invalid="true"
          defaultValue="Orbit DS!"
        />

        <FieldError>
          Use lowercase letters,
          numbers, and hyphens only.
        </FieldError>
      </Field>
    </StoryFrame>
  ),
}
