import type { Meta, StoryObj } from "@storybook/react-vite"
import type { ReactNode } from "react"

import { Icon, iconNames, type IconComponentProps } from "@orbit-ds"

const variants = ["regular", "bold", "fill", "duotone"] as const
const iconSizes = [16, 24, 32, 48] as const

function getGridTemplateColumns(size: number, minColumnWidth: number) {
  const tileWidth = Math.max(minColumnWidth, size + 72)
  return `repeat(auto-fit, minmax(${tileWidth}px, 1fr))`
}

function IconFrame({
  children,
  label,
}: {
  children: ReactNode
  label: string
}) {
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-center rounded-lg border p-3 text-center">
      <div className="flex flex-1 items-center justify-center self-stretch">
        {children}
      </div>
      <div className="mt-2 text-xs leading-tight text-muted-foreground">
        {label}
      </div>
    </div>
  )
}

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
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

export const Variants: Story = {
  argTypes: {
    variant: { control: false },
    size: { control: false },
    "aria-label": { control: false },
    "aria-hidden": { control: false },
  },
  render: ({ name }) => (
    <div
      className="mx-auto grid w-full max-w-4xl gap-3"
      style={{ gridTemplateColumns: getGridTemplateColumns(32, 140) }}
    >
      {variants.map((variant) => (
        <IconFrame key={variant} label={variant}>
          <Icon
            name={name ?? "airplane"}
            variant={variant}
            size={32}
            aria-hidden
          />
        </IconFrame>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  argTypes: {
    name: { control: false },
    size: { control: false },
    "aria-label": { control: false },
    "aria-hidden": { control: false },
  },
  render: ({ variant }) => (
    <div
      className="mx-auto grid w-full max-w-4xl gap-3"
      style={{ gridTemplateColumns: getGridTemplateColumns(48, 140) }}
    >
      {iconSizes.map((size) => (
        <IconFrame key={size} label={`${size}px`}>
          <Icon
            name="airplane"
            variant={variant as IconComponentProps["variant"]}
            size={size}
            aria-hidden
          />
        </IconFrame>
      ))}
    </div>
  ),
}

export const AllIcons: Story = {
  name: "All Icons",
  args: {
    size: 20,
  },
  argTypes: {
    name: { control: false },
    "aria-label": { control: false },
    "aria-hidden": { control: false },
  },
  render: ({ variant, size }) => (
    <div
      className="mx-auto grid w-full max-w-7xl gap-2.5"
      style={{
        gridTemplateColumns: getGridTemplateColumns(
          typeof size === "number" ? size : 20,
          112
        ),
      }}
    >
      {iconNames.map((name) => (
        <IconFrame key={name} label={name}>
          <Icon
            name={name}
            variant={variant as IconComponentProps["variant"]}
            size={size}
            aria-hidden
          />
        </IconFrame>
      ))}
    </div>
  ),
}
