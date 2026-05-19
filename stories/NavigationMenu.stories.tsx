import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@orbit-ds"

const meta = {
  title: "Components/Navigation Menu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use navigation menus for top-level site navigation, product information panels, and grouped destination lists.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>

export default meta

type Story = StoryObj<typeof meta>

export const WithViewport: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[420px] gap-2 md:grid-cols-2">
              <NavigationMenuLink href="#">
                <div>
                  <div className="font-medium">Design system</div>
                  <div className="text-sm text-muted-foreground">
                    Shared components, tokens, and docs.
                  </div>
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div>
                  <div className="font-medium">Release hub</div>
                  <div className="text-sm text-muted-foreground">
                    Coordinate approvals and launch updates.
                  </div>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-2.5 py-2">
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  ),
}

export const InlineDropdown: Story = {
  render: () => (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-64 gap-1">
              <NavigationMenuLink href="#">Guides</NavigationMenuLink>
              <NavigationMenuLink href="#">Components</NavigationMenuLink>
              <NavigationMenuLink href="#">Changelog</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const ActiveLink: Story = {
  render: () => (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" data-active>
            Overview
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Components</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Patterns</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
