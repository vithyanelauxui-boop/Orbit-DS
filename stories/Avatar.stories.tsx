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
  PlusIcon,
  SignOutIcon,
  UserIcon,
} from "@phosphor-icons/react"

import avatarImage from "./Avatar.jpg"

const sizes = ["sm", "default", "lg"] as const

type AvatarStoryArgs = {
  size?: (typeof sizes)[number]
  showBadge?: boolean
  showButton?: boolean
  showCount?: boolean
  count?: number
  dropdown?: boolean
}

const people = [
  {
    name: "Ava Patel",
    src: avatarImage,
    fallback: "AP",
    fallbackClass:
      "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-100",
  },
  {
    name: "Milo Chen",
    src: avatarImage,
    fallback: "MC",
    fallbackClass:
      "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-100",
  },
  {
    name: "Nora Diaz",
    src: avatarImage,
    fallback: "ND",
    fallbackClass:
      "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-100",
  },
] as const

function PersonAvatar({
  name,
  src,
  fallback,
  fallbackClass,
  size = "default",
  showBadge = false,
}: {
  name: string
  src: string
  fallback: string
  fallbackClass?: string
  size?: (typeof sizes)[number]
  showBadge?: boolean
}) {
  return (
    <Avatar size={size}>
      <AvatarImage src={src} alt={name} />

      <AvatarFallback className={fallbackClass}>
        {fallback}
      </AvatarFallback>

      {showBadge ? (
        <AvatarBadge aria-label="Online">
          <CheckIcon weight="bold" />
        </AvatarBadge>
      ) : null}
    </Avatar>
  )
}

function AvatarPreview({
  size = "default",
  showBadge = false,
  showButton = false,
  dropdown = false,
}: AvatarStoryArgs) {
  const avatar = (
    <div className="relative w-fit">
      <PersonAvatar
        name={people[0].name}
        src={people[0].src}
        fallback={people[0].fallback}
        fallbackClass={people[0].fallbackClass}
        size={size}
        showBadge={showBadge}
      />

      {showButton ? (
        <Button
          size="icon-xs"
          className="absolute right-0 bottom-0 rounded-full"
          aria-label="Edit avatar"
        >
          <CameraIcon />
        </Button>
      ) : null}
    </div>
  )

  if (!dropdown) {
    return avatar
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full outline-none">
          {avatar}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56"
      >
        <DropdownMenuLabel>
          {people[0].name}
        </DropdownMenuLabel>

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
  )
}

function AvatarGroupPreview({
  size = "default",
  showCount = false,
  count = 4,
}: AvatarStoryArgs) {
  return (
    <AvatarGroup>
      {people.map((person) => (
        <PersonAvatar
          key={person.name}
          name={person.name}
          src={person.src}
          fallback={person.fallback}
          fallbackClass={person.fallbackClass}
          size={size}
        />
      ))}

      {showCount ? (
        <AvatarGroupCount>
          +{count}
        </AvatarGroupCount>
      ) : null}
    </AvatarGroup>
  )
}

const meta = {
  title: "Components/Avatar",

  parameters: {
    layout: "centered",

    docs: {
      description: {
        component: `
Avatar displays a user profile image, initials fallback, status indicator, or grouped collaborators.

## Composition

\`\`\`text
Avatar
|-- AvatarImage
|-- AvatarFallback
\`-- AvatarBadge

AvatarGroup
|-- Avatar
\`-- AvatarGroupCount
\`\`\`
        `,
      },
    },
  },

  tags: ["autodocs"],

  argTypes: {
    size: {
      control: "inline-radio",
      options: sizes,
      description:
        "Controls avatar sizing.",
    },

    showBadge: {
      control: "boolean",
      description:
        "Displays the online status badge.",
    },

    showButton: {
      control: "boolean",
      description:
        "Displays the floating edit button.",
    },

    showCount: {
      control: "boolean",
      description:
        "Displays the overflow count avatar.",
    },

    count: {
      control: {
        type: "number",
        min: 1,
        max: 99,
      },

      description:
        "Controls the avatar overflow count.",
    },

    dropdown: {
      control: "boolean",
      description:
        "Wraps the avatar with a dropdown menu.",
    },
  },
} satisfies Meta<AvatarStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: "default",
    showBadge: false,
    showButton: false,
    dropdown: false,
  },

  argTypes: {
    showCount: {
      control: false,
      table: {
        disable: true,
      },
    },

    count: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: (args) => (
    <AvatarPreview {...args} />
  ),
}

export const Badge: Story = {
  args: {
    size: "default",
    showBadge: true,
    showButton: false,
    dropdown: false,
  },

  argTypes: {
    showCount: {
      control: false,
      table: {
        disable: true,
      },
    },

    count: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: (args) => (
    <AvatarPreview {...args} />
  ),
}

export const Editable: Story = {
  args: {
    size: "default",
    showBadge: false,
    showButton: true,
    dropdown: false,
  },

  argTypes: {
    showCount: {
      control: false,
      table: {
        disable: true,
      },
    },

    count: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: (args) => (
    <AvatarPreview {...args} />
  ),
}

export const Dropdown: Story = {
  args: {
    size: "lg",
    showBadge: true,
    dropdown: true,
  },

  argTypes: {
    showButton: {
      control: false,
      table: {
        disable: true,
      },
    },

    showCount: {
      control: false,
      table: {
        disable: true,
      },
    },

    count: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: (args) => (
    <AvatarPreview {...args} />
  ),
}

export const Group: Story = {
  args: {
    size: "default",
    showCount: false,
  },

  argTypes: {
    showBadge: {
      control: false,
      table: {
        disable: true,
      },
    },

    showButton: {
      control: false,
      table: {
        disable: true,
      },
    },

    dropdown: {
      control: false,
      table: {
        disable: true,
      },
    },

    count: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: (args) => (
    <AvatarGroupPreview {...args} />
  ),
}

export const GroupWithCount: Story = {
  args: {
    size: "default",
    showCount: true,
    count: 4,
  },

  argTypes: {
    showBadge: {
      control: false,
      table: {
        disable: true,
      },
    },

    showButton: {
      control: false,
      table: {
        disable: true,
      },
    },

    dropdown: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: (args) => (
    <AvatarGroupPreview {...args} />
  ),
}

export const Sizes: Story = {
  argTypes: {
    size: {
      control: false,
    },

    showBadge: {
      control: false,
      table: {
        disable: true,
      },
    },

    showButton: {
      control: false,
      table: {
        disable: true,
      },
    },

    dropdown: {
      control: false,
      table: {
        disable: true,
      },
    },

    showCount: {
      control: false,
      table: {
        disable: true,
      },
    },

    count: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: () => (
    <div className="flex items-end gap-6">
      {sizes.map((size) => (
        <div
          key={size}
          className="flex flex-col items-center gap-2"
        >
          <AvatarPreview size={size} />

          <span className="text-xs text-muted-foreground capitalize">
            {size}
          </span>
        </div>
      ))}
    </div>
  ),
}