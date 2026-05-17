import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
} from "@orbit-ds"

type DropdownMenuStoryArgs = {
  variant?: "basic" | "checkbox-items" | "submenu-and-radio"
}

const meta = {
  title: "Orbit DS/Dropdown Menu",
  component: DropdownMenu,
  args: {
    variant: "basic",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use dropdown menus for compact action lists, view switches, item-level operations, and nested menu flows.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["basic", "checkbox-items", "submenu-and-radio"],
      description:
        "Switches between the core dropdown menu examples.",
    },
  },
} satisfies Meta<DropdownMenuStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const DropdownMenuStory: Story = {
  name: "Dropdown Menu",
  render: ({ variant = "basic" }) => {
    const [comments, setComments] = React.useState(true)
    const [mentions, setMentions] = React.useState(false)
    const [density, setDensity] = React.useState("comfortable")

    if (variant === "checkbox-items") {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Notifications</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Preferences</DropdownMenuLabel>
            <DropdownMenuCheckboxItem
              checked={comments}
              onCheckedChange={setComments}
            >
              Comments
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={mentions}
              onCheckedChange={setMentions}
            >
              Mentions
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    if (variant === "submenu-and-radio") {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">View options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email link</DropdownMenuItem>
                <DropdownMenuItem>Copy link</DropdownMenuItem>
                <DropdownMenuItem>Access settings</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Density</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={density} onValueChange={setDensity}>
              <DropdownMenuRadioItem value="compact">Compact</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="comfortable">
                Comfortable
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="spacious">Spacious</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Edit
            <DropdownMenuShortcut>Cmd+E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
