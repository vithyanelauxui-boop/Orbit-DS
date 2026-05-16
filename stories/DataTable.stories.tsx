import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Badge,
  Checkbox,
  Table,
  TableBody,
  TableCaption,
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

const meta = {
  title: "Orbit DS/Data Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Use data tables for structured records, invoices, activity logs, and selection-heavy admin screens.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="font-medium">{row.id}</TableCell>
            <TableCell>{row.customer}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithSelection: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">
            <Checkbox aria-label="Select all rows" />
          </TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-state="selected">
          <TableCell>
            <Checkbox aria-label="Select Orbit DS" checked />
          </TableCell>
          <TableCell className="font-medium">Orbit DS</TableCell>
          <TableCell>Ananya Rao</TableCell>
          <TableCell>
            <Badge>In review</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox aria-label="Select Dashboard" />
          </TableCell>
          <TableCell className="font-medium">Dashboard refresh</TableCell>
          <TableCell>Dev Malik</TableCell>
          <TableCell>
            <Badge variant="secondary">Draft</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>
        Quarterly invoice summary for the current workspace.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$4,280</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}
