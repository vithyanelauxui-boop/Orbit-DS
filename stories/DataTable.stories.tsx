import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@orbit-ds"

const rows = [
  { id: "INV-1001", customer: "Acme Labs", status: "Paid", amount: "$1,280" },
  { id: "INV-1002", customer: "Northstar", status: "Pending", amount: "$860" },
  {
    id: "INV-1003",
    customer: "Orbit Retail",
    status: "Draft",
    amount: "$2,140",
  },
] as const

type TableStoryArgs = {
  header: boolean
  footer: boolean
  selection: boolean
  pagination: boolean
}

const meta = {
  title: "Components/Data Table",
  component: Table,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use data tables for structured records, invoices, activity logs, and selection-heavy admin screens.
        `,
      },
    },
  },
  tags: ["autodocs"],

  args: {
    header: true,
    footer: false,
    selection: false,
    pagination: false,
  },

  argTypes: {
    header: {
      control: "boolean",
    },
    footer: {
      control: "boolean",
    },
    selection: {
      control: "boolean",
    },
    pagination: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

function DataTableStory({
  header,
  footer,
  selection,
  pagination,
}: TableStoryArgs) {
  const paginatedRows = [
    ...rows,
    {
      id: "INV-1004",
      customer: "Pixel Works",
      status: "Paid",
      amount: "$740",
    },
    {
      id: "INV-1005",
      customer: "Nova Systems",
      status: "Pending",
      amount: "$1,920",
    },
  ]

  const data = pagination ? paginatedRows : rows

  return (
    <div className="w-3xl space-y-4">
      <Table>
        {header && (
          <TableHeader>
            <TableRow className="bg-muted">
              {selection && (
                <TableHead className="w-10">
                  <Checkbox aria-label="Select all rows" />
                </TableHead>
              )}

              <TableHead className={!selection ? "rounded-tl-md" : undefined}>
                Invoice
              </TableHead>

              <TableHead>Customer</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="rounded-tr-md text-right">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
        )}

        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row.id}
              data-state={selection && index === 0 ? "selected" : undefined}
            >
              {selection && (
                <TableCell>
                  <Checkbox
                    aria-label={`Select ${row.id}`}
                    checked={index === 0}
                  />
                </TableCell>
              )}

              <TableCell className="font-medium">{row.id}</TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell className="text-right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        {footer && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={selection ? 4 : 3}>Total</TableCell>
              <TableCell className="text-right">
                {pagination ? "$6,940" : "$4,280"}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>

      {pagination && (
        <div className="flex items-center justify-between border-t pt-4">
          <p className="text-muted-foreground text-sm">
            Showing 1–5 of 12 invoices
          </p>

          <div className="flex items-center gap-2">
            <button className="border-input bg-background hover:bg-muted inline-flex h-9 items-center rounded-md border px-3 text-sm">
              Previous
            </button>

            <button className="bg-primary text-primary-foreground inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm">
              1
            </button>

            <button className="border-input bg-background hover:bg-muted inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-sm">
              2
            </button>

            <button className="border-input bg-background hover:bg-muted inline-flex h-9 items-center rounded-md border px-3 text-sm">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export const Basic: Story = {
  args: {
    header: true,
    footer: false,
    selection: false,
    pagination: false,
  },

  render: (args) => <DataTableStory {...args} />,
}

export const Indexed: Story = {
  args: {
    header: true,
    footer: false,
    selection: true,
    pagination: false,
  },

  render: (args) => <DataTableStory {...args} />,
}

export const WithFooter: Story = {
  args: {
    header: true,
    footer: true,
    selection: false,
    pagination: false,
  },

  render: (args) => (
    <div className="w-3xl">
      <DataTableStory {...args} />
    </div>
  ),
}

export const Pagination: Story = {
  args: {
    header: true,
    footer: false,
    selection: false,
    pagination: true,
  },

  render: (args) => <DataTableStory {...args} />,
}
