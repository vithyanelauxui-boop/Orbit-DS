import type { Meta, StoryObj } from "@storybook/react-vite"

import { Skeleton } from "@orbit-ds"

const meta = {
  title: "Orbit DS/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Use skeletons to preserve layout and communicate loading states before real content arrives.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <Skeleton className="h-4 w-48" />,
}

export const CardPreview: Story = {
  render: () => (
    <div className="max-w-sm space-y-4 rounded-xl border p-4">
      <Skeleton className="h-40 w-full rounded-xl" />
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  ),
}

export const TableRows: Story = {
  render: () => (
    <div className="max-w-2xl space-y-3 rounded-xl border p-4">
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="grid grid-cols-[1.5fr_1fr_1fr] gap-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  ),
}
