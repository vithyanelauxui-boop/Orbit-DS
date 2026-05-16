import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Badge,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@orbit-ds"

type TabsStoryArgs = {
  variant?: "default" | "line"
  orientation?: "horizontal" | "vertical"
}

function TabsPreview({
  variant = "default",
  orientation = "horizontal",
}: TabsStoryArgs) {
  return (
    <Tabs defaultValue="overview" orientation={orientation} className={orientation === "vertical" ? "max-w-3xl" : "max-w-2xl"}>
      <TabsList variant={variant} className={orientation === "vertical" ? "min-w-44" : undefined}>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">
          Activity
          {orientation === "vertical" ? <Badge variant="secondary">4</Badge> : null}
        </TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className={variant === "line" ? "pt-4 text-sm" : "rounded-xl border p-4"}>
        Team health, release cadence, and adoption metrics.
      </TabsContent>
      <TabsContent value="activity" className={variant === "line" ? "pt-4 text-sm" : "rounded-xl border p-4"}>
        Recent reviews, comments, and deployment events.
      </TabsContent>
      <TabsContent value="settings" className={variant === "line" ? "pt-4 text-sm" : "rounded-xl border p-4"}>
        Workspace configuration and permissions.
      </TabsContent>
    </Tabs>
  )
}

const meta = {
  title: "Orbit DS/Tabs",
  component: TabsPreview,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use tabs to switch between related views, panels, or content sections without leaving the current page.

## Parameter Properties

- \`variant\`: Chooses the tabs-list visual style.
- \`orientation\`: Switches the tabs between horizontal and vertical layout.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "line"],
    },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    variant: "default",
    orientation: "horizontal",
  },
} satisfies Meta<TabsStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <TabsPreview {...args} />,
}

export const LineVariant: Story = {
  args: {
    variant: "line",
  },
  render: (args) => <TabsPreview {...args} />,
}

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => <TabsPreview {...args} />,
}
