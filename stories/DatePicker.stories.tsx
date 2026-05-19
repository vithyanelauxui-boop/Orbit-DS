import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { addDays, format, isSameDay, startOfToday } from "date-fns"
import type { DateRange } from "react-day-picker"

import {
  Button,
  Calendar,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@orbit-ds"

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <circle cx="8" cy="8" r="5.25" />
      <path d="M8 5.5v3l2 1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type DatePickerStoryArgs = {
  withIcon?: boolean
}

function DatePickerPreview({
  withIcon = true,
}: DatePickerStoryArgs) {
  const [date, setDate] = React.useState<Date | undefined>(startOfToday())
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <TriggerButton
          withIcon={withIcon}
          label={date ? format(date, "MMM d, yyyy") : "Pick a date"}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(value) => {
            setDate(value)
            if (value) setOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

const TriggerButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & {
    label: string
    withIcon?: boolean
  }
>(function TriggerButton(
  { label, withIcon = true, className, children, ...props },
  ref
) {
  return (
    <Button
      ref={ref}
      variant="outline"
      className={["min-w-56 justify-start font-normal", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {withIcon ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="size-4 shrink-0"
        >
          <path
            d="M3.5 5.5h9M5.25 2.75v2M10.75 2.75v2M4.75 13.25h6.5a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {label}
      {children}
    </Button>
  )
})

const meta = {
  title: "Components/Date Picker",

  component: DatePickerPreview,

  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use date picker compositions for scheduling, reporting filters, reservation windows, and date-time entry flows.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    withIcon: {
      control: "boolean",
      description:
        "Shows or hides the calendar icon in the trigger button.",
    },
  },
  args: {
    withIcon: true,
  },
} satisfies Meta<typeof DatePickerPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => <DatePickerPreview {...args} />,
}

export const Range: Story = {
  render: ({ withIcon = true }) => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: startOfToday(),
      to: addDays(startOfToday(), 3),
    })
    const [open, setOpen] = React.useState(false)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <TriggerButton
            withIcon={withIcon}
            label={
              range?.from && range?.to
                ? `${format(range.from, "MMM d")} - ${format(range.to, "MMM d, yyyy")}`
                : "Pick a range"
            }
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="range"
            numberOfMonths={2}
            selected={range}
            onSelect={(value) => {
              setRange(value)
              if (value?.from && value?.to) {
                setOpen(false)
              }
            }}
            defaultMonth={range?.from}
          />
        </PopoverContent>
      </Popover>
    )
  },
}

export const MonthAndYear: Story = {
  render: ({ withIcon = true }) => {
    const [date, setDate] = React.useState<Date | undefined>(
      new Date(2026, 4, 16)
    )
    const [open, setOpen] = React.useState(false)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <TriggerButton
            withIcon={withIcon}
            label={
              date
                ? format(date, "MMM d, yyyy")
                : "Jump to month and year"
            }
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(value) => {
              setDate(value)
              if (value) setOpen(false)
            }}
            captionLayout="dropdown"
            startMonth={new Date(2020, 0)}
            endMonth={new Date(2030, 11)}
            defaultMonth={date ?? new Date(2026, 4)}
          />
        </PopoverContent>
      </Popover>
    )
  },
}

export const Presets: Story = {
  render: () => {
    const today = startOfToday()
    const presets: Array<{ label: string; value: DateRange }> = [
      { label: "Today", value: { from: today, to: today } },
      { label: "Next 7 days", value: { from: today, to: addDays(today, 6) } },
      { label: "Next 30 days", value: { from: today, to: addDays(today, 29) } },
    ]
    const [range, setRange] = React.useState<DateRange | undefined>(
      presets[1].value
    )

    return (
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="grid gap-2">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant={
                range?.from &&
                range?.to &&
                isSameDay(range.from, preset.value.from as Date) &&
                isSameDay(range.to, preset.value.to as Date)
                  ? "default"
                  : "outline"
              }
              className="justify-start"
              onClick={() => setRange(preset.value)}
            >
              {preset.label}
            </Button>
          ))}
        </div>
        <div className="rounded-xl border">
          <Calendar
            mode="range"
            numberOfMonths={2}
            selected={range}
            onSelect={setRange}
            defaultMonth={range?.from}
          />
        </div>
      </div>
    )
  },
}

export const DateAndTimePicker: Story = {
  render: ({ withIcon = true }) => {
    const [date, setDate] = React.useState<Date | undefined>(startOfToday())
    const [time, setTime] = React.useState("09:30")
    const [open, setOpen] = React.useState(false)

    return (
      <div className="grid max-w-sm gap-3">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <TriggerButton
              withIcon={withIcon}
              label={date ? format(date, "EEEE, MMM d, yyyy") : "Pick a date"}
            />
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(value) => {
                setDate(value)
                if (value) setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>

        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              {withIcon ? <ClockIcon /> : null}
              Time
            </InputGroupText>
          </InputGroupAddon>

          <InputGroupInput
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </InputGroup>
      </div>
    )
  },
}
