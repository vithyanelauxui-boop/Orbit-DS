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
    layout: "padded",
    docs: {
      description: {
        component:
          "Use toggle groups for single or multiple related pressed states, especially in formatting and layout toolbars.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    type: "single",
  },
  render: () => (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        <TextAlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <TextAlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <TextAlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  args: {
    type: "multiple",
  },
  render: () => (
    <ToggleGroup type="multiple" defaultValue={["grid", "desktop"]}>
      <ToggleGroupItem value="grid">
        <SquaresFourIcon />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list">
        <ListBulletsIcon />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="desktop">
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
  render: () => (
    <ToggleGroup type="single" orientation="vertical" variant="outline" value="grid">
      <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
      <ToggleGroupItem value="list">List</ToggleGroupItem>
      <ToggleGroupItem value="board">Board</ToggleGroupItem>
    </ToggleGroup>
  ),
}
