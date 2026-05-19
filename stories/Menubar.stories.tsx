import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@orbit-ds"

type MenubarStoryArgs = {
  placement?: "default" | "top" | "bottom"
}

function getContentSide(
  placement: "default" | "top" | "bottom"
) {
  if (placement === "default") {
    return undefined
  }

  return placement === "top" ? "bottom" : "top"
}

function MenubarPreview({
  placement = "default",
}: MenubarStoryArgs) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent side={getContentSide(placement)}>
          <MenubarItem>
            New file
            <MenubarShortcut>Cmd+N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent side={getContentSide(placement)}>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

const meta = {
  title: "Components/Menubar",
  component: MenubarPreview,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use menubars for app-style desktop navigation, editor menus, and command clusters with nested options.

## Parameter Properties

- \`placement\`: Controls whether the root menu content opens with the default positioning, above, or below the trigger.
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
  argTypes: {
    placement: {
      control: "inline-radio",
      options: ["default", "top", "bottom"],
      description:
        "Controls the dropdown placement for the root menu content.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
  },
  args: {
    placement: "default",
  },
} satisfies Meta<typeof MenubarPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => <MenubarPreview {...args} />,
}

export const CheckboxItems: Story = {
  render: ({ placement = "default" }) => {
    const [statusBar, setStatusBar] = React.useState(true)
    const [activity, setActivity] = React.useState(false)

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent side={getContentSide(placement)}>
            <MenubarCheckboxItem
              checked={statusBar}
              onCheckedChange={setStatusBar}
            >
              Status bar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={activity}
              onCheckedChange={setActivity}
            >
              Activity panel
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
}

export const SubmenuAndRadio: Story = {
  render: ({ placement = "default" }) => {
    const [density, setDensity] = React.useState("comfortable")

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Layout</MenubarTrigger>
          <MenubarContent side={getContentSide(placement)}>
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Copy link</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarRadioGroup value={density} onValueChange={setDensity}>
              <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
              <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
              <MenubarRadioItem value="spacious">Spacious</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
}
