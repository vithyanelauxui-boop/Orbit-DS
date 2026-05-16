import type { Meta, StoryObj } from "@storybook/react-vite"
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
import type { ComponentPropsWithoutRef } from "react"

function AppLink({
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      {...props}
    >
      {children}
    </a>
  )
}

const sizes = ["sm", "md"] as const

type BreadcrumbStoryArgs = {
  size?: (typeof sizes)[number]
  collapsed?: boolean
  separator?: "/" | "."
  useCustomLink?: boolean
  showIcon?: boolean
}

function breadcrumbSizeClasses(
  size: (typeof sizes)[number] = "md",
) {
  if (size === "sm") {
    return {
      list: "text-xs gap-1",
      item: "gap-1",
      separator: "[&>svg]:size-3",
      ellipsis: "size-4 [&>svg]:size-3",
    }
  }

  return {
    list: "text-sm gap-1.5",
    item: "gap-1",
    separator: "[&>svg]:size-3.5",
    ellipsis: "size-5 [&>svg]:size-4",
  }
}

function BreadcrumbPreview({
  size = "md",
  collapsed = false,
  separator = "/",
  useCustomLink = false,
  showIcon = false,
}: BreadcrumbStoryArgs) {
  const classes = breadcrumbSizeClasses(size)
  const separatorContent = showIcon ? (
    <Icon
      name="arrow-right"
      variant="regular"
      className="size-3.5 shrink-0"
    />
  ) : (
    separator
  )

  return (
    <Breadcrumb>
      <BreadcrumbList className={classes.list}>
        <BreadcrumbItem className={classes.item}>
          <BreadcrumbLink asChild={useCustomLink}>
            {useCustomLink ? (
              <AppLink href="/">Workspace</AppLink>
            ) : (
              <a href="/">Workspace</a>
            )}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className={classes.separator}>
          {separatorContent}
        </BreadcrumbSeparator>
        {collapsed ? (
          <>
            <BreadcrumbItem className={classes.item}>
              <BreadcrumbEllipsis className={classes.ellipsis} />
            </BreadcrumbItem>
            <BreadcrumbSeparator className={classes.separator}>
              {separatorContent}
            </BreadcrumbSeparator>
          </>
        ) : (
          <>
            <BreadcrumbItem className={classes.item}>
              <BreadcrumbLink asChild={useCustomLink}>
                {useCustomLink ? (
                  <AppLink href="/components">Components</AppLink>
                ) : (
                  <a href="/components">Components</a>
                )}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className={classes.separator}>
              {separatorContent}
            </BreadcrumbSeparator>
          </>
        )}
        <BreadcrumbItem className={classes.item}>
          <BreadcrumbPage>Avatar</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

const meta = {
  title: "Orbit DS/Breadcrumb",
  component: BreadcrumbPreview,
  subcomponents: {
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use breadcrumbs to show the current location in a hierarchy and provide quick navigation back to parent levels.

## Composition

\`\`\`text
Breadcrumb
\`-- BreadcrumbList
    |-- BreadcrumbItem
    |   \`-- BreadcrumbLink | BreadcrumbPage
    |-- BreadcrumbSeparator
    \`-- BreadcrumbEllipsis
\`\`\`

## Parameter Properties

- \`Breadcrumb\`: Wraps the navigation landmark and accepts native \`nav\` props.
- \`BreadcrumbLink.asChild\`: Applies link styling to a custom link component.
- \`BreadcrumbPage\`: Marks the current page with \`aria-current="page"\`.
- \`BreadcrumbSeparator\`: Accepts custom separator content, otherwise shows a caret icon.
- \`BreadcrumbEllipsis\`: Displays a compact overflow placeholder.
- Story \`size\`, \`collapsed\`, \`separator\`, \`useCustomLink\`, and \`showIcon\`: Demonstrate common breadcrumb variations as controls.
        `,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        className={[
          "flex justify-center px-6",
          context.viewMode === "docs"
            ? "items-start py-6"
            : "min-h-[70vh] items-center",
        ].join(" ")}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: sizes,
      description: "Adjusts the breadcrumb demo between compact `sm` and standard `md` sizing.",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    collapsed: {
      control: "boolean",
      description: "Shows or hides the collapsed breadcrumb state with an ellipsis.",
    },
    separator: {
      control: "inline-radio",
      options: ["/", "."],
      description: "Changes the separator character used in controlled breadcrumb examples.",
    },
    useCustomLink: {
      control: "boolean",
      description: "Applies a custom link component using `BreadcrumbLink asChild`.",
    },
    showIcon: {
      control: "boolean",
      description: "Shows Orbit icon separators and the dropdown caret in breadcrumb examples.",
    },
  },
  args: {
    size: "md",
    collapsed: false,
    separator: "/",
    useCustomLink: false,
    showIcon: false,
  },
} satisfies Meta<BreadcrumbStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => <BreadcrumbPreview {...args} />,
}

export const CustomSeparator: Story = {
  args: {
    separator: "/",
  },
  render: (args) => <BreadcrumbPreview {...args} />,
}

export const Dropdown: Story = {
  render: ({
    size = "md",
    separator = "/",
    showIcon = false,
  }) => {
    const classes = breadcrumbSizeClasses(size)
    const buttonSize = size === "sm" ? "xs" : "sm"
    const separatorContent = showIcon ? (
      <Icon
        name="arrow-right"
        variant="regular"
        className="size-3.5 shrink-0"
      />
    ) : (
      separator
    )

    return (
      <Breadcrumb>
        <BreadcrumbList className={classes.list}>
          <BreadcrumbItem className={classes.item}>
            <BreadcrumbLink href="/">Workspace</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className={classes.separator}>
            {separatorContent}
          </BreadcrumbSeparator>
          <BreadcrumbItem className={classes.item}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button type="button" variant="ghost" size={buttonSize}>
                  Components
                  {showIcon ? (
                    <Icon
                      name="caret-down"
                      variant="regular"
                      className="size-4 shrink-0"
                    />
                  ) : null}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40">
                <DropdownMenuItem>Avatar</DropdownMenuItem>
                <DropdownMenuItem>Badge</DropdownMenuItem>
                <DropdownMenuItem>Breadcrumb</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator className={classes.separator}>
            {separatorContent}
          </BreadcrumbSeparator>
          <BreadcrumbItem className={classes.item}>
            <BreadcrumbPage>Navigation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
}

export const Collapsed: Story = {
  args: {
    collapsed: true,
  },
  render: (args) => <BreadcrumbPreview {...args} />,
}

export const LinkComponent: Story = {
  args: {
    separator: ".",
    useCustomLink: true,
  },
  render: (args) => <BreadcrumbPreview {...args} />,
}
