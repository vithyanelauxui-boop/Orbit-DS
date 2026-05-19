import type { Meta, StoryObj } from "@storybook/react-vite"
import type { ComponentPropsWithoutRef } from "react"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
} from "@orbit-ds"

function AppLink({
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      {...props}
    >
      {children}
    </a>
  )
}

const sizes = ["sm", "md"] as const

type BreadcrumbStoryArgs = {
  size?: (typeof sizes)[number]
  showIcon?: boolean
  useCustomLink?: boolean
  separator?: "/" | ">"
}

function breadcrumbSizeClasses(
  size: (typeof sizes)[number] = "md",
) {
  if (size === "sm") {
    return {
      list: "text-xs",
      separator: "[&>svg]:size-3",
      ellipsis: "size-4 [&>svg]:size-3",
    }
  }

  return {
    list: "text-sm",
    separator: "[&>svg]:size-3.5",
    ellipsis: "size-5 [&>svg]:size-4",
  }
}

function BreadcrumbPreview({
  size = "md",
  showIcon = false,
  separator = "/",
  useCustomLink = false,
}: BreadcrumbStoryArgs) {
  const classes = breadcrumbSizeClasses(size)

  const separatorContent = showIcon ? (
    <Icon
      name="caret-right"
      variant="regular"
      className="size-3.5"
    />
  ) : (
    separator
  )

  return (
    <Breadcrumb>
      <BreadcrumbList className={classes.list}>
        <BreadcrumbItem>
          <BreadcrumbLink asChild={useCustomLink}>
            {useCustomLink ? (
              <AppLink href="/">
                Home
              </AppLink>
            ) : (
              <a href="/">Home</a>
            )}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className={classes.separator}>
          {separatorContent}
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink asChild={useCustomLink}>
            {useCustomLink ? (
              <AppLink href="/components">
                Components
              </AppLink>
            ) : (
              <a href="/components">
                Components
              </a>
            )}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className={classes.separator}>
          {separatorContent}
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbPage>
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

const meta = {
  title:  "Components/Breadcrumb",
  component: BreadcrumbPreview,

  subcomponents: {
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
  },

  parameters: {
    layout: "centered",

    docs: {
      description: {
        component: `
Breadcrumbs display the current page location within a navigational hierarchy.

## Composition

\`\`\`text
Breadcrumb
\`-- BreadcrumbList
    |-- BreadcrumbItem
    |   |-- BreadcrumbLink
    |   \`-- BreadcrumbPage
    |-- BreadcrumbSeparator
    \`-- BreadcrumbEllipsis
\`\`\`

## Variants

- Basic
- Custom Separator
- Dropdown
- Collapsed
- Custom Link
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
        "Controls breadcrumb sizing.",
    },

    separator: {
      control: "inline-radio",
      options: ["/", ">","."],
      description:
        "Controls the custom separator character.",
    },

    useCustomLink: {
      control: "boolean",
      description:
        "Uses a custom link component with \`asChild\`.",
    },
  },

  args: {
    size: "md",
    separator: "/",
    useCustomLink: false,
  },
} satisfies Meta<BreadcrumbStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    separator: ">",
  },

  argTypes: {
    useCustomLink: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: (args) => (
    <BreadcrumbPreview {...args} />
  ),
}



export const Dropdown: Story = {
  argTypes: {
    useCustomLink: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: ({
    size = "md",
    separator = "/",
    showIcon = false,
  }) => {
    const classes =
      breadcrumbSizeClasses(size)

    const buttonSize =
      size === "sm" ? "xs" : "sm"

    const separatorContent = showIcon ? (
      <Icon
        name="caret-right"
        variant="regular"
        className="size-3.5"
      />
    ) : (
      separator
    )

    return (
      <Breadcrumb>
        <BreadcrumbList className={classes.list}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              Docs
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className={classes.separator}>
            {separatorContent}
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size={buttonSize}
                  className="h-auto px-2 py-1 font-normal"
                >
                  Components

                  <Icon
                    name="caret-down"
                    variant="regular"
                    className="size-4"
                  />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="w-40"
              >
                <DropdownMenuItem>
                  Avatar
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Badge
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Breadcrumb
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>

          <BreadcrumbSeparator className={classes.separator}>
            {separatorContent}
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage>
              Navigation
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
}

export const Collapsed: Story = {
  argTypes: {
    useCustomLink: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: ({
    size = "md",
    separator = "/",
    showIcon = false,
  }) => {
    const classes =
      breadcrumbSizeClasses(size)

    const separatorContent = showIcon ? (
      <Icon
        name="caret-right"
        variant="regular"
        className="size-3.5"
      />
    ) : (
      separator
    )

    return (
      <Breadcrumb>
        <BreadcrumbList className={classes.list}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              Docs
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className={classes.separator}>
            {separatorContent}
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbEllipsis
              className={classes.ellipsis}
            />
          </BreadcrumbItem>

          <BreadcrumbSeparator className={classes.separator}>
            {separatorContent}
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink href="/components">
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className={classes.separator}>
            {separatorContent}
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage>
              Breadcrumb
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
}

export const LinkComponent: Story = {
  args: {
    useCustomLink: true,
    separator: ">",
  },

  render: (args) => (
    <BreadcrumbPreview {...args} />
  ),
}

export const Sizes: Story = {
  argTypes: {
    size: {
      control: false,
    },

    separator: {
      control: false,
      table: {
        disable: true,
      },
    },

    useCustomLink: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: ({ showIcon = false }) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <div
          key={size}
          className="flex flex-col gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase">
            {size}
          </span>

          <BreadcrumbPreview
            size={size}
            showIcon={showIcon}
          />
        </div>
      ))}
    </div>
  ),
}
export const Version: Story = {
  argTypes: {
    useCustomLink: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  render: ({
    size = "md",
    separator = "/",
    showIcon = false,
  }) => {
    const classes =
      breadcrumbSizeClasses(size)

    const buttonSize =
      size === "sm" ? "xs" : "sm"

    const separatorContent = showIcon ? (
      <Icon
        name="caret-right"
        variant="regular"
        className="size-3.5"
      />
    ) : (
      separator
    )

    return (
      <Breadcrumb>
        <BreadcrumbList className={classes.list}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              Docs
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className={classes.separator}>
            {separatorContent}
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size={buttonSize}
                  className="h-auto gap-1 px-2 py-1 font-normal"
                >
                  v1.0.0

                  <Icon
                    name="caret-down"
                    variant="regular"
                    className="size-4"
                  />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="w-40"
              >
                <DropdownMenuItem>
                  v1.0.0
                </DropdownMenuItem>

                <DropdownMenuItem>
                  v0.9.0
                </DropdownMenuItem>

                <DropdownMenuItem>
                  v0.8.0
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>

          <BreadcrumbSeparator className={classes.separator}>
            {separatorContent}
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage>
              Components
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
}
