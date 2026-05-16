import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@orbit-ds"

const meta = {
  title: "Orbit DS/Select",
  component: Select,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Use custom selects when you need richer menu content, grouping, and consistent overlay behavior beyond native browser selects.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Select defaultValue="team">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a view" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="team">Team activity</SelectItem>
        <SelectItem value="mentions">Mentions</SelectItem>
        <SelectItem value="bookmarks">Bookmarks</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Small: Story = {
  render: () => (
    <Select defaultValue="week">
      <SelectTrigger size="sm" className="w-40">
        <SelectValue placeholder="Range" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="today">Today</SelectItem>
        <SelectItem value="week">This week</SelectItem>
        <SelectItem value="month">This month</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Grouped: Story = {
  render: () => (
    <Select defaultValue="figma">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a tool" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Design</SelectLabel>
          <SelectItem value="figma">Figma</SelectItem>
          <SelectItem value="storybook">Storybook</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Engineering</SelectLabel>
          <SelectItem value="github">GitHub</SelectItem>
          <SelectItem value="vercel">Vercel</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <Select defaultValue="all">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All updates</SelectItem>
        <SelectItem value="assigned">Assigned to me</SelectItem>
        <SelectSeparator />
        <SelectItem value="archived">Archived</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Invalid: Story = {
  render: () => (
    <Field className="w-56">
      <FieldLabel>Timezone</FieldLabel>
      <Select>
        <SelectTrigger aria-invalid="true">
          <SelectValue placeholder="Choose a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ist">India Standard Time</SelectItem>
          <SelectItem value="gst">Gulf Standard Time</SelectItem>
          <SelectItem value="pst">Pacific Standard Time</SelectItem>
        </SelectContent>
      </Select>
      <FieldError>Please choose a timezone.</FieldError>
    </Field>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Field className="w-56">
      <FieldLabel>Workspace</FieldLabel>
      <Select disabled defaultValue="starter">
        <SelectTrigger>
          <SelectValue placeholder="Choose a workspace" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="starter">Starter workspace</SelectItem>
          <SelectItem value="growth">Growth workspace</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>Workspace switching is unavailable right now.</FieldDescription>
    </Field>
  ),
}
