import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@orbit-ds"

const meta = {
  title: "Orbit DS/Context Menu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use context menus for right-click actions, row-level tools, file operations, and dense action lists with nested options.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContextMenu>

export default meta

type Story = StoryObj<typeof meta>

function TriggerSurface({ label }: { label: string }) {
  return (
    <div className="flex h-44 w-80 items-center justify-center rounded-xl border border-dashed bg-muted/30 text-sm text-muted-foreground">
      {label}
    </div>
  )
}

export const Basic: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <TriggerSurface label="Right click this surface" />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Open
          <ContextMenuShortcut>↵</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const CheckboxItems: Story = {
  render: () => {
    const [statusBar, setStatusBar] = React.useState(true)
    const [activity, setActivity] = React.useState(false)

    return (
      <ContextMenu>
        <ContextMenuTrigger>
          <TriggerSurface label="Right click for toggle options" />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>View options</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={statusBar}
            onCheckedChange={setStatusBar}
          >
            Status bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={activity}
            onCheckedChange={setActivity}
          >
            Activity panel
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const SubmenuAndRadio: Story = {
  render: () => {
    const [density, setDensity] = React.useState("comfortable")

    return (
      <ContextMenu>
        <ContextMenuTrigger>
          <TriggerSurface label="Right click for nested actions" />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Rename</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Email link</ContextMenuItem>
              <ContextMenuItem>Copy link</ContextMenuItem>
              <ContextMenuItem>Open access settings</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuLabel>Density</ContextMenuLabel>
          <ContextMenuRadioGroup value={density} onValueChange={setDensity}>
            <ContextMenuRadioItem value="compact">Compact</ContextMenuRadioItem>
            <ContextMenuRadioItem value="comfortable">
              Comfortable
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="spacious">Spacious</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}
