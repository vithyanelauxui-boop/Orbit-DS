import type { ReactNode } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Area as RechartsArea,
  AreaChart,
  Bar as RechartsBar,
  BarChart,
  CartesianGrid,
  Line as RechartsLine,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@orbit-ds"

const trendData = [
  { month: "Jan", signups: 186, active: 80, revenue: 2400 },
  { month: "Feb", signups: 305, active: 200, revenue: 2210 },
  { month: "Mar", signups: 237, active: 120, revenue: 2290 },
  { month: "Apr", signups: 173, active: 190, revenue: 2000 },
  { month: "May", signups: 209, active: 130, revenue: 2181 },
  { month: "Jun", signups: 214, active: 140, revenue: 2500 },
] as const

const trafficConfig = {
  signups: { label: "Signups", color: "var(--chart-1, #2563eb)" },
  active: { label: "Active users", color: "var(--chart-2, #14b8a6)" },
  revenue: { label: "Revenue", color: "var(--chart-3, #f97316)" },
} satisfies ChartConfig

type LineType =
  | "basis"
  | "bump"
  | "bumpX"
  | "bumpY"
  | "linear"
  | "monotone"
  | "monotoneX"
  | "monotoneY"
  | "natural"
  | "step"
  | "stepAfter"
  | "stepBefore"

type ChartStoryArgs = {
  showGrid: boolean
  showTooltip: boolean
  showLegend: boolean
  strokeWidth: number
  showDots: boolean
  lineType: LineType
  expanded: boolean
}

function ChartFrame({
  children,
  expanded = false,
}: {
  children: ReactNode
  expanded?: boolean
}) {
  return (
    <ChartContainer
      config={trafficConfig}
      className={`mx-auto w-full ${expanded ? "max-w-5xl" : "max-w-3xl"}`}
    >
      {children}
    </ChartContainer>
  )
}

function ChartAxes({ showGrid }: Pick<ChartStoryArgs, "showGrid">) {
  return (
    <>
      {showGrid ? <CartesianGrid vertical={false} /> : null}
      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
      <YAxis tickLine={false} axisLine={false} tickMargin={8} />
    </>
  )
}

function ChartEnhancements({
  showTooltip,
  showLegend,
  indicator = "dot",
}: Pick<ChartStoryArgs, "showTooltip" | "showLegend"> & {
  indicator?: "dot" | "line" | "dashed"
}) {
  return (
    <>
      {showTooltip ? (
        <ChartTooltip content={<ChartTooltipContent indicator={indicator} />} />
      ) : null}
      {showLegend ? <ChartLegend content={<ChartLegendContent />} /> : null}
    </>
  )
}

const meta = {
  title: "Orbit DS/Chart",
  args: {
    showGrid: true,
    showTooltip: true,
    showLegend: false,
    strokeWidth: 2,
    showDots: false,
    lineType: "monotone",
    expanded: false,
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use these chart primitives for line, bar, area, and pie visualizations with Orbit-friendly tooltip and legend styling.

## Parameter Properties

- \`config\`: Maps data keys to labels and theme colors for chart primitives.
- \`ChartTooltip\`: Wraps tooltip behavior with Orbit styling.
- \`ChartLegend\`: Renders series labels using the provided chart config.
- \`ChartContainer\`: Provides layout, CSS variables, and responsive chart scaffolding.
        `,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        className={[
          "flex justify-center px-8",
          context.viewMode === "docs"
            ? "items-start py-6"
            : "min-h-[70vh] items-center",
        ].join(" ")}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    showGrid: {
      control: "boolean",
      description: "Shows or hides the cartesian grid.",
    },
    showTooltip: {
      control: "boolean",
      description: "Shows or hides the chart tooltip.",
    },
    showLegend: {
      control: "boolean",
      description: "Shows or hides the chart legend.",
    },
    strokeWidth: {
      control: { type: "range", min: 1, max: 6, step: 1 },
      description: "Adjusts line and area stroke thickness.",
    },
    showDots: {
      control: "boolean",
      description: "Shows or hides point markers on line charts.",
    },
    lineType: {
      control: "select",
      options: [
        "basis",
        "bump",
        "bumpX",
        "bumpY",
        "linear",
        "monotone",
        "monotoneX",
        "monotoneY",
        "natural",
        "step",
        "stepAfter",
        "stepBefore",
      ],
      description: "Changes the curve interpolation used by line-based charts.",
    },
    expanded: {
      control: "boolean",
      description: "Expands the chart container width for roomier layouts.",
    },
  },
} satisfies Meta<ChartStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Interactive: Story = {
  args: {
    showLegend: true,
    showDots: true,
    strokeWidth: 5,
  },
  render: (args) => (
    <ChartFrame expanded={args.expanded}>
      <LineChart data={trendData} margin={{ left: 12, right: 12 }}>
        <ChartAxes showGrid={args.showGrid} />
        <ChartEnhancements
          showTooltip={args.showTooltip}
          showLegend={args.showLegend}
        />
        <RechartsLine
          type={args.lineType}
          dataKey="signups"
          stroke="var(--color-signups)"
          strokeWidth={args.strokeWidth}
          dot={args.showDots}
        />
        <RechartsLine
          type={args.lineType}
          dataKey="active"
          stroke="var(--color-active)"
          strokeWidth={args.strokeWidth}
          dot={args.showDots}
        />
      </LineChart>
    </ChartFrame>
  ),
}

export const Basic: Story = {
  render: (args) => (
    <ChartFrame expanded={args.expanded}>
      <LineChart data={trendData} margin={{ left: 12, right: 12 }}>
        <ChartAxes showGrid={args.showGrid} />
        <ChartEnhancements
          showTooltip={args.showTooltip}
          showLegend={args.showLegend}
        />
        <RechartsLine
          type={args.lineType}
          dataKey="signups"
          stroke="var(--color-signups)"
          strokeWidth={args.strokeWidth}
          dot={args.showDots}
        />
      </LineChart>
    </ChartFrame>
  ),
}

export const Linear: Story = {
  args: {
    lineType: "linear",
  },
  render: (args) => (
    <ChartFrame expanded={args.expanded}>
      <LineChart data={trendData} margin={{ left: 12, right: 12 }}>
        <ChartAxes showGrid={args.showGrid} />
        <ChartEnhancements
          showTooltip={args.showTooltip}
          showLegend={args.showLegend}
        />
        <RechartsLine
          type={args.lineType}
          dataKey="signups"
          stroke="var(--color-signups)"
          strokeWidth={args.strokeWidth}
          dot={args.showDots}
        />
      </LineChart>
    </ChartFrame>
  ),
}

export const Step: Story = {
  args: {
    lineType: "step",
  },
  render: (args) => (
    <ChartFrame expanded={args.expanded}>
      <LineChart data={trendData} margin={{ left: 12, right: 12 }}>
        <ChartAxes showGrid={args.showGrid} />
        <ChartEnhancements
          showTooltip={args.showTooltip}
          showLegend={args.showLegend}
        />
        <RechartsLine
          type={args.lineType}
          dataKey="signups"
          stroke="var(--color-signups)"
          strokeWidth={args.strokeWidth}
          dot={args.showDots}
        />
      </LineChart>
    </ChartFrame>
  ),
}

export const Legend: Story = {
  args: {
    showLegend: true,
  },
  render: (args) => (
    <ChartFrame expanded={args.expanded}>
      <LineChart data={trendData} margin={{ left: 12, right: 12 }}>
        <ChartAxes showGrid={args.showGrid} />
        <ChartEnhancements
          showTooltip={args.showTooltip}
          showLegend={args.showLegend}
        />
        <RechartsLine
          type={args.lineType}
          dataKey="signups"
          stroke="var(--color-signups)"
          strokeWidth={args.strokeWidth}
          dot={args.showDots}
        />
        <RechartsLine
          type={args.lineType}
          dataKey="active"
          stroke="var(--color-active)"
          strokeWidth={args.strokeWidth}
          dot={args.showDots}
        />
      </LineChart>
    </ChartFrame>
  ),
}

export const Expanded: Story = {
  args: {
    expanded: true,
    showLegend: true,
  },
  render: (args) => (
    <ChartFrame expanded={args.expanded}>
      <AreaChart data={trendData} margin={{ left: 12, right: 12 }}>
        <defs>
          <linearGradient id="fillSignups" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-signups)"
              stopOpacity={0.35}
            />
            <stop
              offset="95%"
              stopColor="var(--color-signups)"
              stopOpacity={0.02}
            />
          </linearGradient>
          <linearGradient id="fillActive" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-active)"
              stopOpacity={0.35}
            />
            <stop
              offset="95%"
              stopColor="var(--color-active)"
              stopOpacity={0.02}
            />
          </linearGradient>
        </defs>
        <ChartAxes showGrid={args.showGrid} />
        <ChartEnhancements
          showTooltip={args.showTooltip}
          showLegend={args.showLegend}
          indicator="line"
        />
        <RechartsArea
          type={args.lineType}
          dataKey="signups"
          stroke="var(--color-signups)"
          fill="url(#fillSignups)"
          strokeWidth={args.strokeWidth}
        />
        <RechartsArea
          type={args.lineType}
          dataKey="active"
          stroke="var(--color-active)"
          fill="url(#fillActive)"
          strokeWidth={args.strokeWidth}
        />
      </AreaChart>
    </ChartFrame>
  ),
}

export const Stacked: Story = {
  args: {
    showLegend: true,
  },
  render: (args) => (
    <ChartFrame expanded={args.expanded}>
      <BarChart data={trendData} margin={{ left: 12, right: 12 }}>
        <ChartAxes showGrid={args.showGrid} />
        <ChartEnhancements
          showTooltip={args.showTooltip}
          showLegend={args.showLegend}
          indicator="dashed"
        />
        <RechartsBar
          dataKey="signups"
          stackId="totals"
          fill="var(--color-signups)"
          radius={[0, 0, 6, 6]}
        />
        <RechartsBar
          dataKey="active"
          stackId="totals"
          fill="var(--color-active)"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ChartFrame>
  ),
}
