import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Badge,
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
  { invoice: "INV-001", team: "Core Platform", status: "Paid", amount: "$1,250" },
  { invoice: "INV-002", team: "Design Ops", status: "Pending", amount: "$820" },
  { invoice: "INV-003", team: "Marketing", status: "Overdue", amount: "$460" },
]

const meta = {
  title: "Orbit DS/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Use the table primitives for lightweight tabular layouts when you do not need sorting, filtering, or virtualization.",
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
  ),
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
