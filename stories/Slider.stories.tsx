import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Field, FieldDescription, FieldLabel, Slider } from "@orbit-ds"

const meta = {
  title: "Orbit DS/Slider",
  component: Slider,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Use sliders when users should adjust a numeric value or range with immediate visual feedback.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel>Volume</FieldLabel>
      <Slider defaultValue={[60]} max={100} step={1} />
    </Field>
  ),
}

export const Range: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel>Price range</FieldLabel>
      <Slider defaultValue={[20, 80]} max={100} step={5} />
      <FieldDescription>Choose the budget band for saved filters.</FieldDescription>
    </Field>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center rounded-xl border p-6">
      <Slider orientation="vertical" defaultValue={[45]} max={100} step={1} />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState([72])

    return (
      <Field className="max-w-sm">
        <div className="flex items-center justify-between">
          <FieldLabel>Brightness</FieldLabel>
          <span className="text-sm text-muted-foreground">{value[0]}%</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </Field>
    )
  },
}
