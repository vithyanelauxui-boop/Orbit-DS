import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { REGEXP_ONLY_DIGITS } from "input-otp"

import {
  Button,
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@orbit-ds"

const REGEXP_ALPHANUMERIC = /^[a-zA-Z0-9]+$/

function OTPPreview({
  maxLength = 6,
  separator = false,
  disabled = false,
  invalid = false,
  value,
  defaultValue,
  pattern = REGEXP_ONLY_DIGITS,
  onChange,
}: {
  maxLength?: number
  separator?: boolean
  disabled?: boolean
  invalid?: boolean
  value?: string
  defaultValue?: string
  pattern?: string | RegExp
  onChange?: (value: string) => void
}) {
  const groupSizes = separator
    ? [Math.ceil(maxLength / 2), Math.floor(maxLength / 2)]
    : [maxLength]

  return (
    <InputOTP
      maxLength={maxLength}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
      pattern={pattern}
    >
      {groupSizes.map((groupSize, groupIndex) => {
        const startIndex =
          groupSizes
            .slice(0, groupIndex)
            .reduce((sum, size) => sum + size, 0)

        return (
          <React.Fragment key={`${groupIndex}-${groupSize}`}>
            <InputOTPGroup aria-invalid={invalid}>
              {Array.from({ length: groupSize }).map((_, index) => (
                <InputOTPSlot
                  key={startIndex + index}
                  index={startIndex + index}
                  aria-invalid={invalid}
                />
              ))}
            </InputOTPGroup>
            {separator && groupIndex < groupSizes.length - 1 ? (
              <InputOTPSeparator />
            ) : null}
          </React.Fragment>
        )
      })}
    </InputOTP>
  )
}

function VariantCard({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border p-5">
      <div className="mb-4 space-y-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex min-h-28 items-center justify-center">
        {children}
      </div>
    </section>
  )
}

function InputOTPVariantsShowcase() {
  const [controlledValue, setControlledValue] = React.useState("12")
  const [formValue, setFormValue] = React.useState("")
  const [submittedValue, setSubmittedValue] = React.useState("")

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <VariantCard
          title="Separator"
          description="Six-digit OTP split into two grouped sections."
        >
          <OTPPreview separator />
        </VariantCard>

        <VariantCard
          title="Disabled"
          description="Read-only OTP state for loading or locked flows."
        >
          <OTPPreview disabled value="482951" />
        </VariantCard>

        <VariantCard
          title="Controlled"
          description="Externally managed value with quick preset and reset actions."
        >
          <div className="flex flex-col items-center gap-3">
            <OTPPreview
              value={controlledValue}
              onChange={setControlledValue}
            />
            <div className="flex gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => setControlledValue("654321")}
              >
                Fill code
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => setControlledValue("")}
              >
                Clear
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Value: {controlledValue || "empty"}
            </div>
          </div>
        </VariantCard>

        <VariantCard
          title="Invalid"
          description="Validation state for expired or incorrect codes."
        >
          <Field
            className="w-full max-w-sm items-center"
            data-invalid="true"
          >
            <FieldLabel htmlFor="otp-invalid">
              Verification code
            </FieldLabel>
            <div id="otp-invalid">
              <OTPPreview
                invalid
                value="1209"
                maxLength={6}
              />
            </div>
            <FieldError>
              Enter the latest code sent to your device.
            </FieldError>
          </Field>
        </VariantCard>

        <VariantCard
          title="Four Digits"
          description="Compact four-digit passcode layout."
        >
          <OTPPreview maxLength={4} />
        </VariantCard>

        <VariantCard
          title="Alphanumeric"
          description="Allows letters and numbers for backup or invite codes."
        >
          <OTPPreview
            maxLength={6}
            pattern={REGEXP_ALPHANUMERIC}
            defaultValue="A7B9"
          />
        </VariantCard>
      </div>

      <VariantCard
        title="Form"
        description="Typical OTP field inside a form with submit feedback."
      >
        <form
          className="flex w-full max-w-sm flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault()
            setSubmittedValue(formValue)
          }}
        >
          <Field className="space-y-2">
            <FieldLabel htmlFor="otp-form">
              One-time password
            </FieldLabel>
            <div id="otp-form">
              <OTPPreview
                value={formValue}
                onChange={setFormValue}
              />
            </div>
            <FieldDescription>
              Enter the 6-digit code from your authenticator app.
            </FieldDescription>
          </Field>

          <div className="flex gap-2">
            <Button type="submit" size="sm">
              Submit
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => {
                setFormValue("")
                setSubmittedValue("")
              }}
            >
              Reset
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            Submitted value: {submittedValue || "nothing submitted"}
          </div>
        </form>
      </VariantCard>
    </div>
  )
}

const meta = {
  title: "Orbit DS/Input OTP",
  component: InputOTP,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Use OTP inputs for verification codes, 2FA prompts, one-time passcodes, and compact token entry.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    maxLength: {
      control: { type: "number", min: 4, max: 8, step: 1 },
    },
    separator: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    pattern: {
      control: "select",
      options: ["digits", "alphanumeric"],
      mapping: {
        digits: REGEXP_ONLY_DIGITS,
        alphanumeric: REGEXP_ALPHANUMERIC,
      },
    },
  },
  args: {
    maxLength: 6,
    separator: false,
    disabled: false,
    invalid: false,
    pattern: REGEXP_ONLY_DIGITS,
  },
} satisfies Meta<typeof InputOTP>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ maxLength, separator, disabled, invalid, pattern }) => (
    <div className="mx-auto flex w-full max-w-md justify-center py-8">
      <OTPPreview
        maxLength={maxLength}
        separator={separator}
        disabled={disabled}
        invalid={invalid}
        pattern={pattern}
      />
    </div>
  ),
}

export const Variants: Story = {
  argTypes: {
    maxLength: { control: false },
    separator: { control: false },
    disabled: { control: false },
    invalid: { control: false },
    pattern: { control: false },
  },
  render: () => <InputOTPVariantsShowcase />,
}
