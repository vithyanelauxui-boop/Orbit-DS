import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button, Toaster } from "@orbit-ds"
import { toast } from "sonner"

type SonnerStoryArgs = {
  variant?: "success" | "info" | "warning" | "error"
}

function SonnerPreview({
  variant = "success",
}: SonnerStoryArgs) {
  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          if (variant === "success") toast.success("Workspace created.")
          if (variant === "info") toast.info("Sync is in progress.")
          if (variant === "warning") toast.warning("Review unsaved changes.")
          if (variant === "error") toast.error("Payment failed.")
        }}
      >
        Show {variant} toast
      </Button>
    </>
  )
}

const meta = {
  title: "Orbit DS/Sonner",
  component: SonnerPreview,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use the toaster for lightweight feedback such as confirmations, background progress, and recoverable errors.

## Parameter Properties

- Story \`variant\`: Chooses the toast style demonstrated in the variants example.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["success", "info", "warning", "error"],
    },
  },
  args: {
    variant: "success",
  },
} satisfies Meta<SonnerStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <>
      <Toaster />
      <Button onClick={() => toast("Profile saved successfully.")}>Show toast</Button>
    </>
  ),
}

export const Variants: Story = {
  render: (args) => <SonnerPreview {...args} />,
}

export const Loading: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        onClick={() => {
          const id = toast.loading("Publishing release notes...")
          setTimeout(() => toast.success("Release published.", { id }), 1600)
        }}
      >
        Show loading toast
      </Button>
    </>
  ),
}
