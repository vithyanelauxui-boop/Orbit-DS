import type { Meta, StoryObj } from "@storybook/react-vite"

import { ToggleGroup, ToggleGroupItem } from "@orbit-ds"
import {
  LaptopIcon,
  ListBulletsIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  SquaresFourIcon,
} from "@phosphor-icons/react"

const meta = {
  title: "Orbit DS/Toggle Group",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Use toggle groups for single or multiple related pressed states, especially in formatting and layout toolbars.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof ToggleGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    type: "single",
  },
  render: ({ disabled }) => (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left" disabled={disabled} aria-label="Align left">
        <TextAlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" disabled={disabled} aria-label="Align center">
        <TextAlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" disabled={disabled} aria-label="Align right">
        <TextAlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  args: {
    type: "multiple",
  },
  render: ({ disabled }) => (
    <ToggleGroup type="multiple" defaultValue={["grid", "desktop"]}>
      <ToggleGroupItem value="grid" disabled={disabled}>
        <SquaresFourIcon />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list" disabled={disabled}>
        <ListBulletsIcon />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="desktop" disabled={disabled}>
        <LaptopIcon />
        Desktop
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const OutlineVertical: Story = {
  args: {
    type: "single",
  },
  render: ({ disabled }) => (
    <ToggleGroup type="single" orientation="vertical" variant="outline" value="grid">
      <ToggleGroupItem value="grid" disabled={disabled}>Grid</ToggleGroupItem>
      <ToggleGroupItem value="list" disabled={disabled}>List</ToggleGroupItem>
      <ToggleGroupItem value="board" disabled={disabled}>Board</ToggleGroupItem>
    </ToggleGroup>
  ),
}
