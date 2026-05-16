import type { Meta, StoryObj } from "@storybook/react-vite"
import type { GroupProps } from "react-resizable-panels"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@orbit-ds"

const ResizableGroup = ResizablePanelGroup as unknown as (
  props: GroupProps
) => React.JSX.Element

const panelClassName =
  "flex h-full items-center justify-center rounded-lg border bg-muted/40 p-4 text-sm font-medium"

const meta = {
  title: "Orbit DS/Resizable",
  component: ResizablePanelGroup,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Use resizable panels when users need to compare, inspect, or work across adjacent panes.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="h-[360px] p-6">
      <ResizableGroup orientation="horizontal" className="gap-3">
        <ResizablePanel defaultSize={28}>
          <div className={panelClassName}>Sidebar</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={72}>
          <div className={panelClassName}>Editor</div>
        </ResizablePanel>
      </ResizableGroup>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="h-[420px] p-6">
      <ResizableGroup orientation="vertical" className="gap-3">
        <ResizablePanel defaultSize={38}>
          <div className={panelClassName}>Preview</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={62}>
          <div className={panelClassName}>Properties</div>
        </ResizablePanel>
      </ResizableGroup>
    </div>
  ),
}

export const ThreePanels: Story = {
  render: () => (
    <div className="h-[360px] p-6">
      <ResizableGroup orientation="horizontal" className="gap-3">
        <ResizablePanel defaultSize={22} minSize={15}>
          <div className={panelClassName}>Navigation</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={48} minSize={30}>
          <div className={panelClassName}>Canvas</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30} minSize={20}>
          <div className={panelClassName}>Inspector</div>
        </ResizablePanel>
      </ResizableGroup>
    </div>
  ),
}
