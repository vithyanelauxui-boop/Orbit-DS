import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@orbit-ds"

function StarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor">
      <path d="m8 1.8 1.8 3.64 4.02.58-2.91 2.83.69 4-3.6-1.9-3.6 1.9.69-4L2.18 6.02l4.02-.58L8 1.8Z" />
    </svg>
  )
}

function DotsIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="size-4"
    >
      <circle cx="3" cy="8" r="1.25" />
      <circle cx="8" cy="8" r="1.25" />
      <circle cx="13" cy="8" r="1.25" />
    </svg>
  )
}

type ItemStoryArgs = {
  variant?: "default" | "outline" | "muted"
  size?: "default" | "sm" | "xs"
}

const meta = {
  title: "Orbit DS/Item",
  component: Item,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use Item for versatile content rows with media, title, description, metadata, and actions.

## Composition

\`\`\`text
Item
|-- ItemMedia
|-- ItemContent
|   |-- ItemHeader
|   |-- ItemTitle
|   |-- ItemDescription
|   \`-- ItemFooter
\`-- ItemActions
\`\`\`

## Parameter Properties

- \`variant\`: Chooses the item surface style.
- \`size\`: Adjusts the item padding and density.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "outline", "muted"],
    },
    size: {
      control: "inline-radio",
      options: ["default", "sm", "xs"],
    },
  },
  args: {
    variant: "outline",
    size: "default",
  },
  tags: ["autodocs"],
} satisfies Meta<ItemStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Variants: Story = {
  render: ({ size }) => (
    <div className="grid max-w-xl gap-3">
      <Item variant="default" size={size}>
        <ItemMedia variant="icon">
          <StarIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default item</ItemTitle>
          <ItemDescription>
            A lightweight row for standard list content.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size={size}>
        <ItemMedia variant="icon">
          <StarIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline item</ItemTitle>
          <ItemDescription>
            Adds a bordered container for stronger separation.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted" size={size}>
        <ItemMedia variant="icon">
          <StarIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Muted item</ItemTitle>
          <ItemDescription>
            Uses a softer surface for secondary or supporting information.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
}

export const Sizes: Story = {
  render: ({ variant }) => (
    <div className="grid max-w-xl gap-3">
      <Item variant={variant} size="default">
        <ItemContent>
          <ItemTitle>Default size</ItemTitle>
          <ItemDescription>Standard padding and spacing.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant={variant} size="sm">
        <ItemContent>
          <ItemTitle>Small size</ItemTitle>
          <ItemDescription>
            Slightly tighter without feeling cramped.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant={variant} size="xs">
        <ItemContent>
          <ItemTitle>Extra small size</ItemTitle>
          <ItemDescription>
            Best for compact menus and dense lists.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Item variant="outline" className="max-w-xl">
      <ItemMedia variant="icon">
        <StarIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Design system audit</ItemTitle>
        <ItemDescription>
          Review spacing, typography, and state coverage across the component
          library.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Item variant="outline" className="max-w-xl">
      <ItemMedia variant="image">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=320&q=80"
          alt="Workspace desk"
        />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Workspace refresh</ItemTitle>
        <ItemDescription>
          A richer row for editorial, gallery, or media-heavy collections.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <Item variant="outline" className="max-w-xl">
      <ItemMedia>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/80?img=32" alt="Ananya Rao" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Ananya Rao</ItemTitle>
        <ItemDescription>
          Product designer focused on system documentation and reusable UI
          patterns.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="xs">Invite</Button>
      </ItemActions>
    </Item>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Item variant="outline" className="max-w-xl">
      <ItemContent>
        <ItemHeader>
          <ItemTitle>Release note draft</ItemTitle>
          <span className="text-xs text-muted-foreground">Today</span>
        </ItemHeader>
        <ItemDescription>
          Publish a short summary for design, QA, and engineering reviewers.
        </ItemDescription>
      </ItemContent>
      <ItemFooter>
        <span className="text-sm text-muted-foreground">
          3 comments pending
        </span>
        <Button size="xs" variant="outline">
          Review
        </Button>
      </ItemFooter>
    </Item>
  ),
}

export const Link: Story = {
  args: {
    size: "xs",
  },

  render: () => (
    <Item asChild variant="outline" className="max-w-xl">
      <a href="#">
        <ItemMedia variant="icon">
          <StarIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Open migration guide</ItemTitle>
          <ItemDescription>
            A link-style row that keeps the full item interactive.
          </ItemDescription>
        </ItemContent>
      </a>
    </Item>
  ),
}

export const WithDropdown: Story = {
  render: () => (
    <Item variant="outline" className="max-w-xl">
      <ItemContent>
        <ItemTitle>Workspace migration</ItemTitle>
        <ItemDescription>
          Move docs, tokens, and stories to the shared package.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Open item actions"
            >
              <DotsIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ItemActions>
    </Item>
  ),
}

export const Group: Story = {
  render: () => (
    <ItemGroup className="max-w-xl">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>First row</ItemTitle>
          <ItemDescription>
            Primary row content with description.
          </ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Second row</ItemTitle>
          <ItemDescription>
            Grouped rows with consistent rhythm.
          </ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline" size="xs">
        <ItemContent>
          <ItemTitle>Compact row</ItemTitle>
          <ItemDescription>Denser layout for supporting lists.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}
