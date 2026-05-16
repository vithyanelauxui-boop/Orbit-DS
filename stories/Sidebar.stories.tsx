import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Avatar,
  AvatarFallback,
  Badge,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Kbd,
  KbdGroup,
  Separator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
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
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Use the sidebar primitives to build persistent navigation, workspace chrome, and collapsible app shells on desktop and mobile.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

function AppSidebar({
  variant = "sidebar",
  collapsible = "icon",
}: {
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar variant={variant} collapsible={collapsible}>
        <SidebarHeader>
          <div className="flex items-center gap-3 rounded-lg px-2 py-1">
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
                      <SidebarMenuSubButton isActive>Overview</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>Releases</SidebarMenuSubButton>
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
      <SidebarInset>
        <header className="flex h-14 items-center gap-3 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-5" />
          <div className="text-sm font-medium">Overview</div>
          <Badge variant="secondary" className="ml-auto">
            Live
          </Badge>
        </header>
        <main className="flex-1 space-y-4 p-4">
          <div className="rounded-xl border p-4">
            <div className="mb-1 text-sm font-medium">Main content</div>
            <p className="text-sm text-muted-foreground">
              Resize and collapse the sidebar to review its desktop navigation states.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Traffic", "Conversions", "Retention"].map((item) => (
              <div key={item} className="rounded-xl border p-4">
                <div className="text-sm font-medium">{item}</div>
                <div className="mt-8 h-24 rounded-lg bg-muted/50" />
              </div>
            ))}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export const Default: Story = {
  render: () => <AppSidebar />,
}

export const Floating: Story = {
  render: () => <AppSidebar variant="floating" />,
}

export const Inset: Story = {
  render: () => <AppSidebar variant="inset" />,
}

export const NonCollapsible: Story = {
  render: () => <AppSidebar collapsible="none" />,
}
