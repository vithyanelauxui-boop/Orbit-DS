import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge, Card, CardContent, ScrollArea, Separator } from "@orbit-ds"

const activity = [
  "Design review scheduled for Thursday at 2:00 PM.",
  "Component tokens synced to the latest brand palette.",
  "Accessibility audit completed for date picker flows.",
  "New production deployment finished without regressions.",
  "Search indexing job re-ran after schema migration.",
  "Workspace invite sent to five new collaborators.",
  "Payment method updated for the enterprise account.",
  "Usage report exported for Q2 planning.",
]

const meta = {
  title: "Orbit DS/Scroll Area",
  component: ScrollArea,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Use scroll areas when content should stay within a fixed container while preserving custom scrollbars.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <ScrollArea className="h-72 w-full max-w-md rounded-xl border">
      <div className="min-w-0 p-4">
        <div className="mb-3 text-sm font-medium">Recent activity</div>
        <div className="space-y-3">
          {activity.map((item) => (
            <div key={item} className="space-y-3">
              <p className="text-sm text-muted-foreground">{item}</p>
              <Separator />
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
}

export const HorizontalGallery: Story = {
  render: () => (
    <ScrollArea className="h-72 w-full max-w-3xl rounded-xl border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {["Analytics", "Billing", "Calendar", "Docs", "Forms", "Navigation"].map(
          (name) => (
            <Card key={name} className="w-56 shrink-0">
              <CardContent className="space-y-3 p-4">
                <Badge variant="secondary">{name}</Badge>
                <div className="h-28 rounded-lg bg-muted/50" />
                <p className="text-sm text-muted-foreground">
                  Preview assets for the {name.toLowerCase()} section.
                </p>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </ScrollArea>
  ),
}
