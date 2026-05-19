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
  Icon,
} from "@orbit-ds"

type ContextMenuStoryArgs = {
  triggerLabel?: string
  itemLabel?: string
  secondaryItemLabel?: string
  tertiaryItemLabel?: string
  showSeparator?: boolean
  submenuLabel?: string
  showShortcuts?: boolean
  showIcons?: boolean
  statusBar?: boolean
  activityPanel?: boolean
  density?: "compact" | "comfortable" | "spacious"
  destructiveLabel?: string
  destructiveSecondaryLabel?: string
}

function TriggerSurface({ label }: { label: string }) {
  return (
    <div className="flex h-44 w-80 items-center justify-center rounded-xl border border-dashed bg-muted/30 text-sm text-muted-foreground">
      {label}
    </div>
  )
}

function ContextMenuPreview({
  triggerLabel = "Right click this surface",
  itemLabel = "Open",
  secondaryItemLabel = "Duplicate",
  tertiaryItemLabel = "Rename",
}: ContextMenuStoryArgs) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <TriggerSurface label={triggerLabel} />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>{itemLabel}</ContextMenuItem>
        <ContextMenuItem>{secondaryItemLabel}</ContextMenuItem>
        <ContextMenuItem>{tertiaryItemLabel}</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

const meta = {
  title: "Components/Context Menu",
  component: ContextMenuPreview,
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
} satisfies Meta<typeof ContextMenuPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  argTypes: {
    triggerLabel: { control: "text" },
    itemLabel: { control: "text" },
    secondaryItemLabel: { control: "text" },
    tertiaryItemLabel: { control: "text" },
  },
  args: {
    triggerLabel: "Right click this surface",
    itemLabel: "Open",
    secondaryItemLabel: "Duplicate",
    tertiaryItemLabel: "Rename",
  },
  render: (args) => <ContextMenuPreview {...args} />,
}

export const Submenu: Story = {
  argTypes: {
    triggerLabel: { control: "text" },
    submenuLabel: { control: "text" },
    showSeparator: { control: "boolean" },
    tertiaryItemLabel: { control: "text" },
  },
  args: {
    triggerLabel: "Right click for nested actions",
    submenuLabel: "Share",
    showSeparator: true,
    tertiaryItemLabel: "Archive",
  },
  render: ({
    triggerLabel = "Right click for nested actions",
    submenuLabel = "Share",
    showSeparator = true,
    tertiaryItemLabel = "Archive",
  }) => (
    <ContextMenu>
      <ContextMenuTrigger>
        <TriggerSurface label={triggerLabel} />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>{submenuLabel}</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Email link</ContextMenuItem>
            <ContextMenuItem>Copy link</ContextMenuItem>
            <ContextMenuItem>Open access settings</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        {showSeparator ? <ContextMenuSeparator /> : null}
        <ContextMenuItem>{tertiaryItemLabel}</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const Shortcuts: Story = {
  argTypes: {
    triggerLabel: { control: "text" },
    showShortcuts: { control: "boolean" },
  },
  args: {
    triggerLabel: "Right click for shortcut actions",
    showShortcuts: true,
  },
  render: ({
    triggerLabel = "Right click for shortcut actions",
    showShortcuts = true,
  }) => (
    <ContextMenu>
      <ContextMenuTrigger>
        <TriggerSurface label={triggerLabel} />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Open
          {showShortcuts ? <ContextMenuShortcut>Enter</ContextMenuShortcut> : null}
        </ContextMenuItem>
        <ContextMenuItem>
          Copy link
          {showShortcuts ? <ContextMenuShortcut>Cmd+C</ContextMenuShortcut> : null}
        </ContextMenuItem>
        <ContextMenuItem>
          Command palette
          {showShortcuts ? <ContextMenuShortcut>Cmd+K</ContextMenuShortcut> : null}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const Groups: Story = {
  argTypes: {
    triggerLabel: { control: "text" },
    showSeparator: { control: "boolean" },
  },
  args: {
    triggerLabel: "Right click for grouped actions",
    showSeparator: true,
  },
  render: ({
    triggerLabel = "Right click for grouped actions",
    showSeparator = true,
  }) => (
    <ContextMenu>
      <ContextMenuTrigger>
        <TriggerSurface label={triggerLabel} />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>File</ContextMenuLabel>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        {showSeparator ? <ContextMenuSeparator /> : null}
        <ContextMenuLabel>Share</ContextMenuLabel>
        <ContextMenuItem>Email link</ContextMenuItem>
        <ContextMenuItem>Copy link</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const Icons: Story = {
  argTypes: {
    triggerLabel: { control: "text" },
    showIcons: { control: "boolean" },
  },
  args: {
    triggerLabel: "Right click for icon actions",
    showIcons: true,
  },
  render: ({
    triggerLabel = "Right click for icon actions",
    showIcons = true,
  }) => (
    <ContextMenu>
      <ContextMenuTrigger>
        <TriggerSurface label={triggerLabel} />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          {showIcons ? <Icon name="folder-open" variant="regular" /> : null}
          Open
        </ContextMenuItem>
        <ContextMenuItem>
          {showIcons ? <Icon name="copy" variant="regular" /> : null}
          Duplicate
        </ContextMenuItem>
        <ContextMenuItem>
          {showIcons ? <Icon name="pencil-simple" variant="regular" /> : null}
          Rename
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const Checkboxes: Story = {
  argTypes: {
    triggerLabel: { control: "text" },
    statusBar: { control: "boolean" },
    activityPanel: { control: "boolean" },
  },
  args: {
    triggerLabel: "Right click for toggle options",
    statusBar: true,
    activityPanel: false,
  },
  render: ({
    triggerLabel = "Right click for toggle options",
    statusBar = true,
    activityPanel = false,
  }) => {
    const [localStatusBar, setLocalStatusBar] = React.useState(statusBar)
    const [localActivity, setLocalActivity] = React.useState(activityPanel)

    React.useEffect(() => setLocalStatusBar(statusBar), [statusBar])
    React.useEffect(() => setLocalActivity(activityPanel), [activityPanel])

    return (
      <ContextMenu>
        <ContextMenuTrigger>
          <TriggerSurface label={triggerLabel} />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>View options</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={localStatusBar}
            onCheckedChange={setLocalStatusBar}
          >
            Status bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={localActivity}
            onCheckedChange={setLocalActivity}
          >
            Activity panel
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const Radio: Story = {
  argTypes: {
    triggerLabel: { control: "text" },
    density: {
      control: "inline-radio",
      options: ["compact", "comfortable", "spacious"],
    },
  },
  args: {
    triggerLabel: "Right click for radio options",
    density: "comfortable",
  },
  render: ({
    triggerLabel = "Right click for radio options",
    density = "comfortable",
  }) => {
    const [localDensity, setLocalDensity] = React.useState(density)

    React.useEffect(() => setLocalDensity(density), [density])

    return (
      <ContextMenu>
        <ContextMenuTrigger>
          <TriggerSurface label={triggerLabel} />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Density</ContextMenuLabel>
          <ContextMenuRadioGroup value={localDensity} onValueChange={setLocalDensity}>
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

export const DestructiveVariants: Story = {
  argTypes: {
    triggerLabel: { control: "text" },
    destructiveLabel: { control: "text" },
    destructiveSecondaryLabel: { control: "text" },
    showSeparator: { control: "boolean" },
  },
  args: {
    triggerLabel: "Right click for destructive actions",
    destructiveLabel: "Delete",
    destructiveSecondaryLabel: "Remove access",
    showSeparator: true,
  },
  render: ({
    triggerLabel = "Right click for destructive actions",
    destructiveLabel = "Delete",
    destructiveSecondaryLabel = "Remove access",
    showSeparator = true,
  }) => (
    <ContextMenu>
      <ContextMenuTrigger>
        <TriggerSurface label={triggerLabel} />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Move to folder</ContextMenuItem>
        {showSeparator ? <ContextMenuSeparator /> : null}
        <ContextMenuItem variant="destructive">{destructiveLabel}</ContextMenuItem>
        <ContextMenuItem variant="destructive">
          {destructiveSecondaryLabel}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
