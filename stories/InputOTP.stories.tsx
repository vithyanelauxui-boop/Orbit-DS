import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { REGEXP_ONLY_DIGITS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@orbit-ds"

function OTPPreview({
  maxLength = 6,
  separator = false,
  disabled = false,
}: {
  maxLength?: number
  separator?: boolean
  disabled?: boolean
}) {
  const [value, setValue] = React.useState("")

  return (
    <div className="grid gap-3">
      <InputOTP
        maxLength={maxLength}
        value={value}
        disabled={disabled}
        onChange={setValue}
        pattern={REGEXP_ONLY_DIGITS}
      >
        <InputOTPGroup>
          {Array.from({ length: separator ? Math.ceil(maxLength / 2) : maxLength }).map(
            (_, index) => (
              <InputOTPSlot key={index} index={index} />
            )
          )}
        </InputOTPGroup>
        {separator && <InputOTPSeparator />}
        {separator && (
          <InputOTPGroup>
            {Array.from({ length: Math.floor(maxLength / 2) }).map((_, index) => (
              <InputOTPSlot
                key={index + Math.ceil(maxLength / 2)}
                index={index + Math.ceil(maxLength / 2)}
              />
            ))}
          </InputOTPGroup>
        )}
      </InputOTP>
      <div className="text-sm text-muted-foreground">Value: {value || "empty"}</div>
    </div>
  )
}

const meta = {
  title: "Orbit DS/Input OTP",
  component: OTPPreview,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Use OTP inputs for verification codes, 2FA prompts, one-time passcodes, and compact numeric token entry.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OTPPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <OTPPreview />,
}

export const Grouped: Story = {
  render: () => <OTPPreview separator />,
}

export const Disabled: Story = {
  render: () => <OTPPreview disabled />,
}
