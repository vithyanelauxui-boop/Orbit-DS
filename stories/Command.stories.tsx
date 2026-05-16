import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
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

const meta = {
  title: "Orbit DS/Command",
  component: Command,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Use command surfaces for fast search, keyboard-first actions, global navigation, and compact launchers.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Command>

export default meta

type Story = StoryObj<typeof meta>

function CommandSurface() {
  return (
    <Command className="max-w-xl rounded-xl border">
      <CommandInput placeholder="Search pages, components, and actions..." />
      <CommandList>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <SearchIcon />
            Search docs
            <CommandShortcut>⌘K</CommandShortcut>
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

export const Basic: Story = {
  render: () => <CommandSurface />,
}

export const EmptyState: Story = {
  render: () => (
    <Command className="max-w-xl rounded-xl border">
      <CommandInput value="billing" />
      <CommandList>
        <CommandEmpty>No matching commands found.</CommandEmpty>
      </CommandList>
    </Command>
  ),
}

export const DialogPalette: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open command palette</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandGroup heading="Quick actions">
                <CommandItem>Go to dashboard</CommandItem>
                <CommandItem>Create release note</CommandItem>
                <CommandItem>Open accessibility report</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    )
  },
}
