import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Avatar,
  AvatarFallback,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Kbd,
  KbdGroup,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  TooltipProvider,
} from "@orbit-ds"
import {
  ChartBarIcon,
  ClockCounterClockwiseIcon,
  GearIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  SparkleIcon,
} from "@phosphor-icons/react"

const primaryNav = [
  { label: "Home", icon: HouseIcon, active: true },
  { label: "Analytics", icon: ChartBarIcon, badge: "12" },
  { label: "Recents", icon: ClockCounterClockwiseIcon },
  { label: "Settings", icon: GearIcon },
]

const meta = {
  title: "Orbit DS/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use the sidebar primitives to build persistent navigation, workspace chrome, and collapsible app shells on desktop and mobile.

## Composition

\`\`\`text
SidebarProvider
  Sidebar
    SidebarHeader
    SidebarContent
      SidebarGroup
        SidebarGroupLabel
        SidebarGroupContent
          SidebarMenu
            SidebarMenuItem
              SidebarMenuButton
              SidebarMenuSub
    SidebarFooter
    SidebarRail
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls whether the sidebar starts expanded or collapsed.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    variant: {
      control: "inline-radio",
      options: ["sidebar", "floating", "inset"],
      description: "Chooses the desktop sidebar surface style.",
      table: {
        defaultValue: { summary: "sidebar" },
      },
    },
    collapsible: {
      control: "inline-radio",
      options: ["offcanvas", "icon", "none"],
      description: "Chooses the desktop collapse behavior.",
      table: {
        defaultValue: { summary: "icon" },
      },
    },
  },
  args: {
    open: true,
    variant: "sidebar",
    collapsible: "icon",
  },
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

function AppSidebar({
  open = true,
  variant = "sidebar",
  collapsible = "icon",
}: {
  open?: boolean
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const [isOpen, setIsOpen] = React.useState(open)

  React.useEffect(() => {
    setIsOpen(open)
  }, [open])

  return (
    <TooltipProvider>
      <SidebarProvider
        defaultOpen={open}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <div className="overflow-hidden rounded-xl border bg-sidebar">
          <Sidebar variant={variant} collapsible={collapsible}>
            <SidebarHeader>
              <div className="flex items-center gap-2 rounded-lg px-2 py-1">
                <SidebarTrigger />
                <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <SparkleIcon className="size-4" />
                </div>
                <div className="group-data-[collapsible=icon]:hidden">
                  <div className="text-sm font-medium">Orbit Workspace</div>
                  <div className="text-xs text-sidebar-foreground/70">Design system</div>
                </div>
              </div>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>
                    <MagnifyingGlassIcon />
                  </InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="Search" />
                <InputGroupAddon align="inline-end">
                  <InputGroupText>
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <span>+</span>
                      <Kbd>K</Kbd>
                    </KbdGroup>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {primaryNav.map((item) => (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton tooltip={item.label} isActive={item.active}>
                          <item.icon />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                        {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <span>Orbit Marketing Site</span>
                      </SidebarMenuButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton href="#" isActive>Overview</SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton href="#">Releases</SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                    <SidebarMenuSkeleton showIcon />
                    <SidebarMenuSkeleton />
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <div className="flex items-center gap-3 rounded-lg border border-sidebar-border px-2 py-2">
                <Avatar className="size-8">
                  <AvatarFallback>KP</AvatarFallback>
                </Avatar>
                <div className="min-w-0 group-data-[collapsible=icon]:hidden">
                  <div className="truncate text-sm font-medium">Kalyan Patel</div>
                  <div className="truncate text-xs text-sidebar-foreground/70">
                    kalyan@orbit.dev
                  </div>
                </div>
              </div>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export const Default: Story = {
  render: ({ open, variant, collapsible }) => (
    <AppSidebar
      open={open}
      variant={variant}
      collapsible={collapsible}
    />
  ),
}

export const Floating: Story = {
  args: {
    variant: "floating",
  },
  render: ({ open, variant, collapsible }) => (
    <AppSidebar
      open={open}
      variant={variant}
      collapsible={collapsible}
    />
  ),
}

export const Inset: Story = {
  args: {
    variant: "inset",
  },
  render: ({ open, variant, collapsible }) => (
    <AppSidebar
      open={open}
      variant={variant}
      collapsible={collapsible}
    />
  ),
}

export const NonCollapsible: Story = {
  args: {
    collapsible: "none",
  },
  render: ({ open, variant, collapsible }) => (
    <AppSidebar
      open={open}
      variant={variant}
      collapsible={collapsible}
    />
  ),
}
