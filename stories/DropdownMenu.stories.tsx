import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  ChatIcon,
  CreditCardIcon,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  EnvelopeIcon,
  GearIcon,
  PlusCircleIcon,
  PlusIcon,
  SignOutIcon,
  UserIcon,
} from "@orbit-ds"

import avatarImage from "./Avatar.jpg"

const meta = {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use dropdown menus for compact action lists, account menus, status controls, and nested command groups.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls the open state when used as a controlled menu.",
    },
    defaultOpen: {
      control: "boolean",
      description: "Sets the initial open state for the menu.",
    },
  },
} satisfies Meta<typeof DropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Shortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Shortcuts</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          New File
          <DropdownMenuShortcut>Cmd+N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Duplicate
          <DropdownMenuShortcut>Cmd+D</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Search
          <DropdownMenuShortcut>Cmd+K</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Publish
          <DropdownMenuShortcut>Shift+Cmd+P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Icons: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Icons</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Workspace</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <GearIcon />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <PlusIcon />
            New Team
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const RadioGroup: Story = {
  render: function Render() {
    const [position, setPosition] = React.useState("bottom")

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Radio Group</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={position}
            onValueChange={setPosition}
          >
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const Destructive: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Destructive</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Danger Zone</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Rename workspace</DropdownMenuItem>
        <DropdownMenuItem>Transfer ownership</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          Remove access
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <SignOutIcon />
          Delete workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const IconTrigger: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open actions"
        >
          <PlusIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="end">
        <DropdownMenuItem>
          <PlusCircleIcon />
          New project
        </DropdownMenuItem>
        <DropdownMenuItem>
          <EnvelopeIcon />
          Invite by email
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ChatIcon />
          Start discussion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const AvatarTrigger: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Open profile menu"
        >
          <Avatar size="lg">
            <AvatarImage src={avatarImage.src} alt="Ava Patel" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Ava Patel</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <GearIcon />
          Account settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <EnvelopeIcon />
          Invite teammate
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <SignOutIcon />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const ComplexStyles: Story = {
  render: function Render() {
    const [compactView, setCompactView] = React.useState(true)
    const [showSidebar, setShowSidebar] = React.useState(true)
    const [shareMode, setShareMode] = React.useState("team")

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Complex Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 rounded-xl p-2 shadow-lg">
          <DropdownMenuLabel className="pb-2">
            Workspace Controls
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className="rounded-lg">
              <UserIcon />
              Profile
              <DropdownMenuShortcut>Cmd+P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="rounded-lg">
                <EnvelopeIcon />
                Share
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-52 rounded-xl">
                <DropdownMenuRadioGroup
                  value={shareMode}
                  onValueChange={setShareMode}
                >
                  <DropdownMenuRadioItem value="team">
                    Team access
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="link">
                    Share by link
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="private">
                    Private only
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel inset>Display</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={compactView}
            inset
            onCheckedChange={setCompactView}
          >
            Compact density
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showSidebar}
            inset
            onCheckedChange={setShowSidebar}
          >
            Show sidebar
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="rounded-lg" variant="destructive">
            <SignOutIcon />
            Archive project
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
