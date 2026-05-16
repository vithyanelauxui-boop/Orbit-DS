import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@orbit-ds"
import {
  CameraIcon,
  CheckIcon,
  CrownSimpleIcon,
  PlusIcon,
  SignOutIcon,
  UserIcon,
  UserPlusIcon,
} from "@phosphor-icons/react"

const sizes = ["sm", "default", "lg"] as const

function avatarSvg(label: string, background: string, foreground = "#ffffff") {
  const initials = label
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
      <rect width="80" height="80" rx="40" fill="${background}" />
      <text
        x="40"
        y="46"
        text-anchor="middle"
        font-size="24"
        font-family="Figtree, sans-serif"
        fill="${foreground}"
      >
        ${initials}
      </text>
    </svg>
  `

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const people = [
  { name: "Ava Patel", src: avatarSvg("Ava Patel", "#0f766e") },
  { name: "Milo Chen", src: avatarSvg("Milo Chen", "#7c3aed") },
  { name: "Nora Diaz", src: avatarSvg("Nora Diaz", "#ea580c") },
] as const

const avatarVariants = ["basic", "badge", "badge-with-button"] as const
const groupVariants = ["group", "group-with-icon"] as const
const allAvatarVariants = [
  ...avatarVariants,
  ...groupVariants,
] as const

function PersonAvatar({
  name,
  src,
  size = "default",
}: {
  name: string
  src?: string
  size?: "sm" | "default" | "lg"
}) {
  return (
    <Avatar size={size}>
      {src ? <AvatarImage src={src} alt={name} /> : null}
      <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  )
}

type AvatarStoryArgs = {
  variant?: (typeof allAvatarVariants)[number]
  size?: "sm" | "default" | "lg"
}

type GroupAvatarStoryArgs = {
  variant?: (typeof groupVariants)[number]
  size?: "sm" | "default" | "lg"
}

function StandaloneAvatarPreview({
  variant = "basic",
  size = "default",
}: AvatarStoryArgs) {
  if (variant === "badge") {
    return (
      <Avatar size={size}>
        <AvatarImage src={people[0].src} alt={people[0].name} />
        <AvatarFallback>AP</AvatarFallback>
        <AvatarBadge aria-label="Online">
          <CheckIcon weight="bold" />
        </AvatarBadge>
      </Avatar>
    )
  }

  if (variant === "badge-with-button") {
    return (
      <div className="relative w-fit">
        <Avatar size={size}>
          <AvatarImage src={people[1].src} alt={people[1].name} />
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
        <Button
          size="icon-xs"
          className="absolute right-0 bottom-0 rounded-full"
          aria-label="Edit avatar"
        >
          <CameraIcon />
        </Button>
      </div>
    )
  }

  return (
    <PersonAvatar
      name={people[0].name}
      src={people[0].src}
      size={size}
    />
  )
}

function AvatarGroupPreview({
  variant = "group",
  size = "default",
}: GroupAvatarStoryArgs) {
  return (
    <AvatarGroup>
      {variant === "group-with-icon" ? (
        <Avatar size={size} className="bg-muted text-muted-foreground">
          <AvatarFallback>
            <UserPlusIcon />
          </AvatarFallback>
        </Avatar>
      ) : null}
      {people
        .slice(variant === "group-with-icon" ? 1 : 0, 3)
        .map((person) => (
          <PersonAvatar
            key={person.name}
            name={person.name}
            src={person.src}
            size={size}
          />
        ))}
    </AvatarGroup>
  )
}

const meta = {
  title: "Orbit DS/Avatar",
  component: StandaloneAvatarPreview,
  subcomponents: {
    AvatarImage,
    AvatarFallback,
    AvatarBadge,
    AvatarGroup,
    AvatarGroupCount,
  },
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: sizes,
      description: "Controls the avatar size in the preview stories.",
    },
    variant: {
      control: "select",
      description: "Switches between the combined avatar examples.",
    },
  },
} satisfies Meta<AvatarStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const AvatarStory: Story = {
  name: "Avatar",
  args: {
    variant: "basic",
    size: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: avatarVariants,
    },
  },
  render: (args) => <StandaloneAvatarPreview {...args} />,
}

export const AvatarGroupCountStory: Story = {
  name: "Avatar Group Count",
  render: () => (
    <AvatarGroup>
      {people.slice(0, 2).map((person) => (
        <PersonAvatar key={person.name} name={person.name} src={person.src} />
      ))}
      <AvatarGroupCount>+4</AvatarGroupCount>
    </AvatarGroup>
  ),
}

export const AvatarGroupStory: Story = {
  name: "Avatar Group",
  args: {
    variant: "group",
    size: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: groupVariants,
    },
  },
  render: (args) => (
    <AvatarGroupPreview
      variant={args.variant as GroupAvatarStoryArgs["variant"]}
      size={args.size}
    />
  ),
}

export const Sizes: Story = {
  args: {
    variant: "basic",
  },
  argTypes: {
    variant: {
      control: "select",
      options: avatarVariants,
      description: "Applies the selected avatar treatment across all size examples.",
    },
    size: {
      control: false,
    },
  },
  render: ({ variant = "basic" }) => (
    <div className="flex items-end gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <StandaloneAvatarPreview
            variant={variant as (typeof avatarVariants)[number]}
            size={size}
          />
          <div className="text-xs text-muted-foreground">{size}</div>
        </div>
      ))}
    </div>
  ),
}

export const Dropdown: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full outline-none">
          <Avatar size="lg">
            <AvatarImage src={people[0].src} alt={people[0].name} />
            <AvatarFallback>AP</AvatarFallback>
            <AvatarBadge>
              <CrownSimpleIcon weight="fill" />
            </AvatarBadge>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{people[0].name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PlusIcon />
          Invite teammate
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <SignOutIcon />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
