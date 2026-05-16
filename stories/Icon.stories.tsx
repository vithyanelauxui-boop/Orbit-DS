import type { Meta, StoryObj } from "@storybook/react-vite"

import { Icon, iconNames, type IconComponentProps } from "@orbit-ds"

const variants = ["regular", "bold", "fill", "duotone"] as const
const sampleIcons = [
  "airplane",
  "alarm",
  "address-book",
  "anchor",
  "warning-diamond",
  "image",
] as const

const meta = {
  title: "Orbit DS/Icon",
  component: Icon,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use this component to access the default Orbit SVG icon set from \`public/Icons/SVGs\` through the Orbit DS API.

## Parameter Properties

- \`name\`: Selects an icon by filename without the \`.svg\` extension.
- \`variant\`: Chooses which icon style to render.
- \`size\`: Sets both the width and height of the icon.
- \`aria-label\` and \`aria-hidden\`: Control accessibility for informative or decorative icons.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: iconNames,
      description: "Choose any generated Orbit icon by its filename, without the `.svg` extension.",
    },
    variant: {
      control: "select",
      options: variants,
      description: "Chooses which icon style to render.",
    },
    size: {
      control: { type: "number", min: 12, max: 96, step: 2 },
      description: "Sets both the width and height of the icon.",
    },
    "aria-label": {
      control: "text",
      description: "Accessible label for assistive technology. Omit it and set `aria-hidden` for decorative icons.",
    },
    "aria-hidden": {
      control: "boolean",
      description: "Marks the icon as decorative when no accessible label is needed.",
    },
  },
  args: {
    name: "airplane",
    variant: "regular",
    size: 24,
    "aria-label": "Airplane",
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Regular: Story = {
  args: {
    name: "airplane",
    variant: "regular",
  },
}

export const Bold: Story = {
  args: {
    name: "airplane",
    variant: "bold",
  },
}

export const Fill: Story = {
  args: {
    name: "airplane",
    variant: "fill",
  },
}

export const Duotone: Story = {
  args: {
    name: "airplane",
    variant: "duotone",
  },
}

export const SampleSet: Story = {
  argTypes: {
    name: { control: false },
    "aria-label": { control: false },
    "aria-hidden": { control: false },
  },
  render: ({ variant, size }) => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3">
      {sampleIcons.map((name) => (
        <div key={name} className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-lg border p-3 text-center">
          <Icon name={name} variant={variant as IconComponentProps["variant"]} size={size} aria-hidden />
          <div className="text-xs text-muted-foreground">{name}</div>
        </div>
      ))}
    </div>
  ),
}

export const AllIcons: Story = {
  name: "All Icons",
  argTypes: {
    name: { control: false },
    "aria-label": { control: false },
    "aria-hidden": { control: false },
  },
  render: ({ variant, size }) => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3">
      {iconNames.map((name) => (
        <div key={name} className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-lg border p-3 text-center">
          <Icon name={name} variant={variant as IconComponentProps["variant"]} size={size} aria-hidden />
          <div className="text-xs text-muted-foreground">{name}</div>
        </div>
      ))}
    </div>
  ),
}
