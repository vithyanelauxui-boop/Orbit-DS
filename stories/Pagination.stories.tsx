import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@orbit-ds"

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use pagination for multi-page tables, archives, and content collections where sequential navigation matters.

## Parameter Properties

- \`PaginationLink isActive\`: Marks the current page in the sequence.
- \`PaginationPrevious text\`: Replaces the default previous label with custom copy.
- \`PaginationNext text\`: Replaces the default next label with custom copy.
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-[70vh] items-center justify-center px-6">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            8
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

export const CompactLabels: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" text="Back" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" text="More" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}
