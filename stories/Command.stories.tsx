import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@orbit-ds"

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <circle cx="7" cy="7" r="4.5" />
      <path d="m10.5 10.5 3 3" strokeLinecap="round" />
    </svg>
  )
}

function BasicCommandSurface() {
  return (
    <Command className="max-w-xl rounded-xl border">
      <CommandInput placeholder="Search pages, components, and actions..." />
      <CommandList>
        <CommandItem>
          <SearchIcon />
          Search docs
        </CommandItem>
        <CommandItem>
          <SearchIcon />
          Open components
        </CommandItem>
        <CommandItem>Invite teammate</CommandItem>
      </CommandList>
    </Command>
  )
}

function ShortcutsCommandSurface() {
  return (
    <Command className="max-w-xl rounded-xl border">
      <CommandInput placeholder="Search pages, components, and actions..." />
      <CommandList>
        <CommandItem>
          <SearchIcon />
          Search docs
          <CommandShortcut>Cmd+K</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <SearchIcon />
          Open components
          <CommandShortcut>G C</CommandShortcut>
        </CommandItem>
        <CommandItem>
          Publish release
          <CommandShortcut>Shift+P</CommandShortcut>
        </CommandItem>
      </CommandList>
    </Command>
  )
}

function GroupsCommandSurface() {
  return (
    <Command className="max-w-xl rounded-xl border">
      <CommandInput placeholder="Search pages, components, and actions..." />
      <CommandList>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <SearchIcon />
            Search docs
            <CommandShortcut>Cmd+K</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SearchIcon />
            Open components
            <CommandShortcut>G C</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>New file</CommandItem>
          <CommandItem>Invite teammate</CommandItem>
          <CommandItem>Publish release</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

function ScrollableCommandSurface() {
  return (
    <Command className="max-w-xl rounded-xl border">
      <CommandInput placeholder="Search pages, components, and actions..." />
      <CommandList className="max-h-72">
        <CommandGroup heading="Pages">
          <CommandItem>Dashboard</CommandItem>
          <CommandItem>Components</CommandItem>
          <CommandItem>Tokens</CommandItem>
          <CommandItem>Patterns</CommandItem>
          <CommandItem>Accessibility</CommandItem>
          <CommandItem>Release notes</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>Create release</CommandItem>
          <CommandItem>Invite teammate</CommandItem>
          <CommandItem>Export tokens</CommandItem>
          <CommandItem>Open changelog</CommandItem>
          <CommandItem>View analytics</CommandItem>
          <CommandItem>Manage billing</CommandItem>
          <CommandItem>Archive project</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

const meta = {
  title: "Components/Command",
  component: BasicCommandSurface,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use command surfaces for fast search, keyboard-first actions, global navigation, and compact launchers.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BasicCommandSurface>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <BasicCommandSurface />,
}

export const Shortcuts: Story = {
  render: () => <ShortcutsCommandSurface />,
}

export const Groups: Story = {
  render: () => <GroupsCommandSurface />,
}

export const Scrollable: Story = {
  render: () => <ScrollableCommandSurface />,
}
