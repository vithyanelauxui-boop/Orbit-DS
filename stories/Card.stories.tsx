import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@orbit-ds"

type CardStoryArgs = {
  size?: "default" | "sm"
  showHeader?: boolean
  showFooter?: boolean
  showAction?: boolean
}

function CardPreview({
  size = "default",
  showHeader = true,
  showFooter = false,
  showAction = false,
}: CardStoryArgs) {
  return (
    <Card size={size} className="max-w-sm">
      {showHeader ? (
        <CardHeader className={showAction ? "border-b" : undefined}>
          <CardTitle>Launch checklist</CardTitle>
          <CardDescription>
            Review the final content, permissions, and analytics setup before
            go-live.
          </CardDescription>
          {showAction ? (
            <CardAction>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </CardAction>
          ) : null}
        </CardHeader>
      ) : null}
      <CardContent>
        <div className="grid gap-2 text-sm text-muted-foreground">
          <div>Content approved</div>
          <div>Tracking events verified</div>
          <div>Rollback plan documented</div>
        </div>
      </CardContent>
      {showFooter ? (
        <CardFooter className="justify-between">
          <span className="text-sm text-muted-foreground">3 seats included</span>
          <Button size="sm">Continue</Button>
        </CardFooter>
      ) : null}
    </Card>
  )
}

function CardWithImagePreview({
  size = "default",
  showHeader = true,
  showFooter = true,
  showAction = false,
}: CardStoryArgs) {
  return (
    <Card size={size} className="max-w-sm overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
        alt="Workspace desk with notebook and keyboard"
        className="h-44 w-full object-cover"
      />
      {showHeader ? (
        <CardHeader>
          <CardTitle>Workspace refresh</CardTitle>
          <CardDescription>
            A visual card with edge-to-edge media for featured content and editorial layouts.
          </CardDescription>
          {showAction ? (
            <CardAction>
              <Button variant="outline" size="sm">
                Save
              </Button>
            </CardAction>
          ) : null}
        </CardHeader>
      ) : null}
      {!showHeader ? (
        <CardContent className="pt-4">
          <p className="text-sm text-muted-foreground">
            A visual card with edge-to-edge media for featured content and editorial layouts.
          </p>
        </CardContent>
      ) : null}
      {showFooter ? (
        <CardFooter className="justify-end">
          <Button variant="outline" size="sm">
            View article
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  )
}

const meta = {
  title: "Orbit DS/Card",
  component: CardPreview,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use cards for summaries, settings sections, product highlights, media previews, and compact content modules.

## Composition

\`\`\`text
Card
|-- CardHeader
|   |-- CardTitle
|   |-- CardDescription
|   \`-- CardAction
|-- CardContent
\`-- CardFooter
\`\`\`

## Parameter Properties

- \`size\`: Controls the card spacing and compactness.
- \`CardHeader\`: Holds the title, description, and optional action.
- \`CardAction\`: Positions an action element inside the header.
- \`CardContent\`: Holds the main body content.
- \`CardFooter\`: Holds secondary metadata or follow-up actions.
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
      options: ["default", "sm"],
      description: "Controls the card spacing and compactness in preview stories.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    showHeader: {
      control: "boolean",
      description: "Shows or hides the card header region.",
    },
    showFooter: {
      control: "boolean",
      description: "Shows or hides the card footer region.",
    },
    showAction: {
      control: "boolean",
      description: "Shows or hides the header action area.",
    },
  },
  args: {
    size: "default",
    showHeader: true,
    showFooter: false,
    showAction: false,
  },
} satisfies Meta<CardStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => <CardPreview {...args} />,
}

export const WithImage: Story = {
  args: {
    showHeader: true,
    showFooter: true,
    showAction: false,
  },
  render: (args) => <CardWithImagePreview {...args} />,
}
