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

const meta = {
  title: "Orbit DS/Avatar",
  component: Avatar,
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
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <PersonAvatar name={people[0].name} src={people[0].src} />,
}

export const Badge: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src={people[0].src} alt={people[0].name} />
      <AvatarFallback>AP</AvatarFallback>
      <AvatarBadge aria-label="Online">
        <CheckIcon weight="bold" />
      </AvatarBadge>
    </Avatar>
  ),
}

export const BadgeWithButton: Story = {
  render: () => (
    <div className="relative w-fit">
      <Avatar size="lg">
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
  ),
}

export const AvatarGroupStory: Story = {
  name: "Avatar Group",
  render: () => (
    <AvatarGroup>
      {people.map((person) => (
        <PersonAvatar key={person.name} name={person.name} src={person.src} />
      ))}
    </AvatarGroup>
  ),
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

export const AvatarGroupWithIcon: Story = {
  render: () => (
    <AvatarGroup>
      {people.slice(0, 2).map((person) => (
        <PersonAvatar key={person.name} name={person.name} src={person.src} />
      ))}
      <Avatar size="default" className="bg-muted text-muted-foreground">
        <AvatarFallback>
          <UserPlusIcon />
        </AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <PersonAvatar name={people[2].name} src={people[2].src} size={size} />
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