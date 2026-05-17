import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Toaster,
} from "@orbit-ds"

import { toast } from "sonner"

type ToastVariant =
  | "default"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "promise"
  | "loading"

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

type SonnerStoryArgs = {
  type?: ToastVariant
  description?: string
  position?: ToastPosition
  withAction?: boolean
}

const positions: Array<{
  label: string
  value: ToastPosition
}> = [
  { label: "Top Left", value: "top-left" },
  { label: "Top Center", value: "top-center" },
  { label: "Top Right", value: "top-right" },
  { label: "Bottom Left", value: "bottom-left" },
  { label: "Bottom Center", value: "bottom-center" },
  { label: "Bottom Right", value: "bottom-right" },
]

function StoryWrap({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[320px] items-center justify-center p-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {children}
      </div>
    </div>
  )
}

function showToast({
  type = "default",
  description = "",
  position = "bottom-right",
  withAction = false,
  title,
}: SonnerStoryArgs & {
  title: string
}) {
  const action = withAction
    ? {
        label: "Undo",
        onClick: () => {},
      }
    : undefined

  if (type === "success") {
    toast.success(title, { description, position, action })
    return
  }

  if (type === "info") {
    toast.info(title, { description, position, action })
    return
  }

  if (type === "warning") {
    toast.warning(title, { description, position, action })
    return
  }

  if (type === "error") {
    toast.error(title, { description, position, action })
    return
  }

  if (type === "promise") {
    const promise = new Promise((resolve) =>
      setTimeout(resolve, 1800)
    )

    toast.promise(promise, {
      loading: title,
      success: "Release published successfully.",
      error: "Failed to publish release notes.",
      description,
      position,
    })
    return
  }

  if (type === "loading") {
    const id = toast.loading(title, {
      description,
      position,
    })

    setTimeout(() => {
      toast.success("Completed successfully.", { id })
    }, 1800)
    return
  }

  toast(title, { description, position, action })
}

const meta = {
  title: "Orbit DS/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use the toaster for lightweight feedback such as confirmations, background progress, and recoverable errors.

## Parameter Properties

- \`type\`: Chooses the toast type used in stories that demonstrate one type across multiple buttons.
- \`description\`: Adds supporting text below the toast title.
- \`position\`: Controls where toast notifications appear on screen.
- \`withAction\`: Adds an inline action button for supported toast types.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: [
        "default",
        "success",
        "info",
        "warning",
        "error",
        "promise",
        "loading",
      ],
      description: "Chooses the toast type to trigger.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    description: {
      control: "text",
      description: "Adds supporting text below the toast title.",
    },
    position: {
      control: "select",
      options: positions.map((item) => item.value),
      description: "Controls the toast viewport position.",
      table: {
        defaultValue: { summary: "bottom-right" },
      },
    },
    withAction: {
      control: "boolean",
      description: "Adds an inline action button for supported toast types.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  args: {
    type: "default",
    description: "",
    position: "bottom-right",
    withAction: false,
  },
} satisfies Meta<SonnerStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Types: Story = {
  parameters: {
    controls: {
      include: ["description", "position", "withAction"],
    },
  },
  render: ({ description, position, withAction }) => (
    <>
      <Toaster position={position} />
      <StoryWrap>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              title: "Profile saved successfully.",
              description,
              position,
              withAction,
            })
          }
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              type: "success",
              title: "Workspace created successfully.",
              description,
              position,
              withAction,
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              type: "info",
              title: "Sync is currently in progress.",
              description,
              position,
              withAction,
            })
          }
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              type: "warning",
              title: "Review unsaved changes before leaving.",
              description,
              position,
              withAction,
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              type: "error",
              title: "Payment failed. Please try again.",
              description,
              position,
              withAction,
            })
          }
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              type: "promise",
              title: "Publishing release notes...",
              description,
              position,
            })
          }
        >
          Promise
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              type: "loading",
              title: "Uploading assets...",
              description,
              position,
            })
          }
        >
          Loading
        </Button>
      </StoryWrap>
    </>
  ),
}

export const WithAction: Story = {
  args: {
    withAction: true,
  },
  parameters: {
    controls: {
      include: ["type", "description", "position"],
    },
  },
  render: ({ type, description, position }) => (
    <>
      <Toaster position={position} />
      <StoryWrap>
        {["Undo invite", "Retry sync", "Restore draft"].map((label) => (
          <Button
            key={label}
            variant="outline"
            onClick={() =>
              showToast({
                type,
                title: label,
                description:
                  description || "An inline action is available in this toast.",
                position,
                withAction: true,
              })
            }
          >
            {label}
          </Button>
        ))}
      </StoryWrap>
    </>
  ),
}

export const Description: Story = {
  args: {
    description:
      "An email invitation was delivered to alex@orbit.dev.",
  },
  parameters: {
    controls: {
      include: ["type", "position", "withAction"],
    },
  },
  render: ({ type, position, withAction }) => (
    <>
      <Toaster position={position} />
      <StoryWrap>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              type,
              title: "Team invitation sent.",
              description:
                "An email invitation was delivered to alex@orbit.dev.",
              position,
              withAction,
            })
          }
        >
          Invite note
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              type,
              title: "Deployment scheduled.",
              description:
                "The production rollout will begin after approval is completed.",
              position,
              withAction,
            })
          }
        >
          Deployment note
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              type,
              title: "Billing alert.",
              description:
                "Your current payment method needs review before the next renewal.",
              position,
              withAction,
            })
          }
        >
          Billing note
        </Button>
      </StoryWrap>
    </>
  ),
}

export const Position: Story = {
  parameters: {
    controls: {
      include: ["type", "description", "withAction"],
    },
  },
  render: ({ type, description, withAction }) => (
    <>
      <Toaster />
      <StoryWrap>
        {positions.map((item) => (
          <Button
            key={item.value}
            variant="outline"
            onClick={() =>
              showToast({
                type,
                title: item.label,
                description:
                  description || "Toast rendered using custom placement.",
                position: item.value,
                withAction,
              })
            }
          >
            {item.label}
          </Button>
        ))}
      </StoryWrap>
    </>
  ),
}

