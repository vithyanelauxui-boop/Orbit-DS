import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DirectionProvider,
  Input,
  Label,
  useDirection,
} from "@orbit-ds"

function DirectionStatus() {
  const dir = useDirection()

  return (
    <span className="text-xs text-muted-foreground">Current dir: {dir}</span>
  )
}

function LoginPreview({ direction }: { direction: "ltr" | "rtl" }) {
  return (
    <DirectionProvider dir={direction}>
      <div dir={direction} className="max-w-sm">
        <Card>
          <CardHeader className="gap-1">
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>
              Sign in to manage releases, approvals, and component docs.
            </CardDescription>
            <DirectionStatus />
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-1.5 text-start">
              <Label htmlFor={`email-${direction}`}>Email</Label>
              <Input id={`email-${direction}`} placeholder="name@example.com" />
            </div>
            <div className="grid gap-1.5 text-start">
              <Label htmlFor={`password-${direction}`}>Password</Label>
              <Input
                id={`password-${direction}`}
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="flex-1">Sign in</Button>
              <Button variant="outline" className="flex-1">
                Create account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DirectionProvider>
  )
}

type DirectionStoryArgs = {
  variant?: "ltr" | "rtl" | "side-by-side"
}

const meta = {
  title: "Orbit DS/Direction",
  component: DirectionProvider,
  args: {
    variant: "ltr",
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Use the direction provider to switch shared UI between LTR and RTL layouts. This story uses a small login form so spacing, alignment, and reading flow are easier to compare.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["ltr", "rtl", "side-by-side"],
      description:
        "Switches between left-to-right, right-to-left, and comparison layouts.",
    },
  },
} satisfies Meta<DirectionStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Direction: Story = {
  render: ({ variant = "ltr" }) =>
    variant === "side-by-side" ? (
      <div className="grid gap-4 lg:grid-cols-2">
        <LoginPreview direction="ltr" />
        <LoginPreview direction="rtl" />
      </div>
    ) : (
      <LoginPreview direction={variant} />
    ),
}
