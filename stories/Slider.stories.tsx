import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Field,
  FieldDescription,
  FieldLabel,
  Slider,
} from "@orbit-ds"

type SliderStoryArgs = {
  percentage?: number
}

function StoryWrap({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[320px] w-full items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        {children}
      </div>
    </div>
  )
}

function SliderPreview({
  percentage = 60,
}: SliderStoryArgs) {
  return (
    <Field className="w-full">
      <div className="flex items-center justify-between">
        <FieldLabel>Volume</FieldLabel>

        <span className="text-sm text-muted-foreground">
          {percentage}%
        </span>
      </div>

      <Slider
        value={[percentage]}
        max={100}
        step={1}
      />
    </Field>
  )
}

const meta = {
  title: "Orbit DS/Slider",
  component: SliderPreview,

  parameters: {
    layout: "fullscreen",

    docs: {
      description: {
        component:
          "Use sliders when users should adjust a numeric value or range with immediate visual feedback.",
      },
    },
  },

  tags: ["autodocs"],

  argTypes: {
    percentage: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },

      description:
        "Controls the slider value and the visible percentage label.",

      table: {
        defaultValue: { summary: "60" },
      },
    },
  },

  args: {
    percentage: 60,
  },
} satisfies Meta<SliderStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    controls: {
      include: ["percentage"],
    },
  },

  render: (args) => (
    <StoryWrap>
      <SliderPreview {...args} />
    </StoryWrap>
  ),
}

export const Range: Story = {
  render: () => (
    <StoryWrap>
      <Field className="w-full">
        <FieldLabel>Price range</FieldLabel>

        <Slider
          defaultValue={[20, 80]}
          max={100}
          step={5}
        />

        <FieldDescription>
          Choose the budget band for saved
          filters.
        </FieldDescription>
      </Field>
    </StoryWrap>
  ),
}

export const Vertical: Story = {
  parameters: {
    controls: {
      include: ["percentage"],
    },
  },

  render: ({ percentage = 45 }) => (
    <StoryWrap>
      <div className="flex h-80 items-center justify-center rounded-xl border p-6">
        <div className="flex items-center gap-4">
          <Slider
            orientation="vertical"
            value={[percentage]}
            max={100}
            step={1}
          />

          <span className="text-sm text-muted-foreground">
            {percentage}%
          </span>
        </div>
      </div>
    </StoryWrap>
  ),
}

export const Controlled: Story = {
  args: {
    percentage: 72,
  },

  parameters: {
    controls: {
      include: ["percentage"],
    },
  },

  render: ({ percentage = 72 }) => {
    const [value, setValue] = React.useState([
      percentage,
    ])

    React.useEffect(() => {
      setValue([percentage])
    }, [percentage])

    return (
      <StoryWrap>
        <Field className="w-full space-y-4">
          <div className="flex items-center justify-between">
            <FieldLabel>
              Brightness
            </FieldLabel>

            <span className="text-sm text-muted-foreground">
              {value[0]}%
            </span>
          </div>

          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
          />

          <div className="flex gap-2">
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() =>
                setValue(([current]) => [
                  Math.max(0, current - 10),
                ])
              }
            >
              Decrease
            </Button>

            <Button
              type="button"
              size="sm"
              onClick={() =>
                setValue(([current]) => [
                  Math.min(100, current + 10),
                ])
              }
            >
              Increase
            </Button>

            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={() =>
                setValue([percentage])
              }
            >
              Reset
            </Button>
          </div>
        </Field>
      </StoryWrap>
    )
  },
}