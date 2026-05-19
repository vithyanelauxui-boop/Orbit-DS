import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Badge,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@orbit-ds"

type TableStoryArgs = {
  addBorders?: boolean
}

const rows = [
  { invoice: "INV-001", team: "Core Platform", status: "Paid", amount: "$1,250" },
  { invoice: "INV-002", team: "Design Ops", status: "Pending", amount: "$820" },
  { invoice: "INV-003", team: "Marketing", status: "Overdue", amount: "$460" },
]

function TablePreview({
  addBorders = false,
}: TableStoryArgs) {
  return (
    <div className={addBorders ? "rounded-xl border p-2" : undefined}>
      <Table>
        <TableHeader className={addBorders ? "[&_tr]:border-border" : undefined}>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.invoice} className={addBorders ? "border-border" : undefined}>
              <TableCell className="font-medium">{row.invoice}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell className="text-right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const meta = {
  title: "Components/Table",
  component: TablePreview,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use the table primitives for lightweight tabular layouts when you do not need sorting, filtering, or virtualization.

## Composition

\`\`\`text
Table
  TableCaption
  TableHeader
    TableRow
      TableHead
  TableBody
    TableRow
      TableCell
  TableFooter
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    addBorders: {
      control: "boolean",
      description: "Adds an outer border treatment around the table preview.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  args: {
    addBorders: false,
  },
} satisfies Meta<TableStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    controls: {
      include: ["addBorders"],
    },
  },
  render: (args) => <TablePreview {...args} />,
}

export const WithCaptionAndFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>Quarterly vendor invoices for active teams.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.invoice}>
            <TableCell className="font-medium">{row.invoice}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$2,530</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const WithStatusBadges: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Workspace</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Orbit DS</TableCell>
          <TableCell>Kalya</TableCell>
          <TableCell>
            <Badge>Active</Badge>
          </TableCell>
        </TableRow>
        <TableRow data-state="selected">
          <TableCell className="font-medium">Marketing Site</TableCell>
          <TableCell>Nina</TableCell>
          <TableCell>
            <Badge variant="secondary">Review</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithIndex: Story = {
  parameters: {
    controls: {
      include: ["addBorders"],
    },
  },
  render: ({ addBorders }) => (
    <div className={addBorders ? "rounded-xl border p-2" : undefined}>
      <Table>
        <TableHeader className={addBorders ? "[&_tr]:border-border" : undefined}>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.invoice} className={addBorders ? "border-border" : undefined}>
              <TableCell className="text-muted-foreground">{index + 1}</TableCell>
              <TableCell className="font-medium">{row.invoice}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell className="text-right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}

export const WithPagination: Story = {
  render: () => (
    <div className="w-full max-w-3xl space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.invoice}>
              <TableCell className="font-medium">{row.invoice}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell className="text-right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  ),
}
