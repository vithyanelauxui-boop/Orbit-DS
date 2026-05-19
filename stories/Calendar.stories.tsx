import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { addDays, format, isSameDay, startOfToday } from "date-fns"
import type { DateRange, Matcher } from "react-day-picker"

import {
  Button,
  Calendar,
  CalendarDayButton,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@orbit-ds"

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        d="M3.5 5.5h9M5.25 2.75v2M10.75 2.75v2M4.75 13.25h6.5a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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
      <path
        d="M8 5.5v3l2 1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const DateButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & {
    label: string
  }
>(function DateButton(
  { label, className, children, ...props },
  ref,
) {
  return (
    <Button
      ref={ref}
      variant="outline"
      className={[
        "min-w-56 justify-start font-normal",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <CalendarIcon />
      {label}
      {children}
    </Button>
  )
})

type CalendarBasicArgs = {
  showOutsideDays?: boolean
}

type MonthAndYearArgs = {
  showOutsideDays?: boolean
  captionLayout?: "label" | "dropdown"
}

type WeekNumbersArgs = {
  showOutsideDays?: boolean
  showWeekNumber?: boolean
  numberOfMonths?: 1 | 2
}

type CustomCellSizeArgs = {
  showOutsideDays?: boolean
  cellSize?: "2.5rem" | "3rem" | "3.5rem"
}

type CalendarStoryArgs = CalendarBasicArgs &
  Partial<MonthAndYearArgs> &
  Partial<WeekNumbersArgs> &
  Partial<CustomCellSizeArgs>

function BasicCalendarPreview({
  showOutsideDays = true,
}: CalendarBasicArgs) {
  return (
    <Calendar
      mode="single"
      showOutsideDays={showOutsideDays}
      selected={startOfToday()}
    />
  )
}

function RangePickerPreview({
  showOutsideDays = true,
}: CalendarBasicArgs) {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: startOfToday(),
    to: addDays(startOfToday(), 4),
  })

  const label =
    range?.from && range?.to
      ? `${format(range.from, "MM/dd/yyyy")} - ${format(range.to, "MM/dd/yyyy")}`
      : "01"

  return (
    <Popover>
      <PopoverTrigger asChild>
        <DateButton label={label} />
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          showOutsideDays={showOutsideDays}
        />
      </PopoverContent>
    </Popover>
  )
}

function PresetsPreview({
  showOutsideDays = true,
}: CalendarBasicArgs) {
  const today = startOfToday()

  const presetRanges: Array<{
    label: string
    value: DateRange
  }> = [
    {
      label: "01",
      value: { from: today, to: today },
    },
    {
      label: "02",
      value: { from: today, to: addDays(today, 6) },
    },
    {
      label: "03",
      value: { from: today, to: addDays(today, 29) },
    },
  ]

  const [range, setRange] = React.useState<DateRange | undefined>(
    presetRanges[1].value,
  )

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-start">
      <div className="grid gap-2">
        {presetRanges.map((preset) => (
          <Button
            key={preset.label}
            variant={
              range?.from &&
              range?.to &&
              isSameDay(
                range.from,
                preset.value.from as Date,
              ) &&
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
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          defaultMonth={range?.from}
          showOutsideDays={showOutsideDays}
        />
      </div>
    </div>
  )
}

function DateTimePickerPreview({
  showOutsideDays = true,
}: CalendarBasicArgs) {
  const [date, setDate] = React.useState<Date | undefined>(
    startOfToday(),
  )

  const [time, setTime] = React.useState("09:30")

  return (
    <div className="grid max-w-sm gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <DateButton
            label={
              date
                ? format(date, "MM/dd/yyyy")
                : "02"
            }
          />
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays={showOutsideDays}
          />
        </PopoverContent>
      </Popover>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <ClockIcon />
            01
          </InputGroupText>
        </InputGroupAddon>

        <InputGroupInput
          type="time"
          value={time}
          onChange={(event) =>
            setTime(event.target.value)
          }
        />
      </InputGroup>
    </div>
  )
}

function BookedDatesPreview({
  showOutsideDays = true,
}: CalendarBasicArgs) {
  const today = startOfToday()

  const bookedDates = [
    addDays(today, 2),
    addDays(today, 5),
    addDays(today, 9),
  ]

  const disabled: Matcher[] = bookedDates

  return (
    <div className="grid gap-3">
      <div className="rounded-xl border">
        <Calendar
          mode="single"
          disabled={disabled}
          modifiers={{ booked: bookedDates }}
          showOutsideDays={showOutsideDays}
          classNames={{
            disabled: "text-muted-foreground opacity-40",
            day_button:
              "data-[booked=true]:bg-destructive/10 data-[booked=true]:text-destructive data-[booked=true]:line-through",
          }}
          components={{
            DayButton: ({
              day,
              modifiers,
              ...props
            }) => (
              <CalendarDayButton
                day={day}
                modifiers={modifiers}
                {...props}
                data-booked={
                  modifiers.booked || undefined
                }
              />
            ),
          }}
        />
      </div>
    </div>
  )
}

function MonthAndYearPreview({
  showOutsideDays = true,
  captionLayout = "dropdown",
}: MonthAndYearArgs) {
  return (
    <Calendar
      mode="single"
      captionLayout={captionLayout}
      startMonth={new Date(2020, 0)}
      endMonth={new Date(2030, 11)}
      defaultMonth={new Date(2026, 4)}
      showOutsideDays={showOutsideDays}
    />
  )
}

function CustomCellSizePreview({
  showOutsideDays = true,
  cellSize = "3rem",
}: CustomCellSizeArgs) {
  const month = new Date(2026, 4)

  const priceMap: Record<number, string> = {
    2: "80",
    5: "95",
    8: "120",
    12: "100",
    14: "140",
    18: "110",
    22: "125",
    26: "90",
  }

  return (
    <Calendar
      mode="single"
      defaultMonth={month}
      selected={new Date(2026, 4, 12)}
      showOutsideDays={showOutsideDays}
      style={
        {
          "--cell-size": cellSize,
        } as React.CSSProperties
      }
      components={{
        DayButton: ({
          day,
          modifiers,
          ...props
        }) => {
          const amount = priceMap[day.date.getDate()]

          return (
            <CalendarDayButton
              day={day}
              modifiers={modifiers}
              {...props}
            >
              <span>{day.date.getDate()}</span>

              {amount ? (
                <span className="text-[10px] leading-none opacity-70">
                  {amount}
                </span>
              ) : null}
            </CalendarDayButton>
          )
        },
      }}
    />
  )
}

function WeekNumbersPreview({
  showOutsideDays = true,
  showWeekNumber = true,
  numberOfMonths = 2,
}: WeekNumbersArgs) {
  return (
    <Calendar
      mode="range"
      showWeekNumber={showWeekNumber}
      numberOfMonths={numberOfMonths}
      showOutsideDays={showOutsideDays}
      selected={{
        from: new Date(2026, 4, 12),
        to: new Date(2026, 4, 18),
      }}
    />
  )
}

const meta: Meta<CalendarStoryArgs> = {
  title: "Components/Calendar",

  component: BasicCalendarPreview,

  parameters: {
    layout: "centered",

    docs: {
      description: {
        component: `
01
02
03
04
05
        `,
      },
    },
  },

  tags: ["autodocs"],

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

  argTypes: {
    showOutsideDays: {
      control: "boolean",

      description: "01",

      table: {
        defaultValue: { summary: "true" },
      },
    },
  },

  args: {
    showOutsideDays: true,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: ({ showOutsideDays }) => (
    <BasicCalendarPreview
      showOutsideDays={showOutsideDays}
    />
  ),
}

export const Range: Story = {
  render: ({ showOutsideDays }) => (
    <RangePickerPreview
      showOutsideDays={showOutsideDays}
    />
  ),
}

export const MonthAndYear: Story = {
  args: {
    showOutsideDays: true,
    captionLayout: "dropdown",
  },

  argTypes: {
    showOutsideDays: {
      control: "boolean",
      description: "01",
    },

    captionLayout: {
      control: "inline-radio",
      options: ["label", "dropdown"],
      description: "02",
    },
  },

  render: (args) => (
    <MonthAndYearPreview
      showOutsideDays={args.showOutsideDays}
      captionLayout={
        args.captionLayout as
          | "label"
          | "dropdown"
      }
    />
  ),
}

export const Presets: Story = {
  render: ({ showOutsideDays }) => (
    <PresetsPreview
      showOutsideDays={showOutsideDays}
    />
  ),
}

export const DateAndTimePicker: Story = {
  render: ({ showOutsideDays }) => (
    <DateTimePickerPreview
      showOutsideDays={showOutsideDays}
    />
  ),
}

export const BookedDates: Story = {
  render: ({ showOutsideDays }) => (
    <BookedDatesPreview
      showOutsideDays={showOutsideDays}
    />
  ),
}

export const CustomCellSize: Story = {
  args: {
    showOutsideDays: true,
    cellSize: "3rem",
  },

  argTypes: {
    showOutsideDays: {
      control: "boolean",
      description: "01",
    },

    cellSize: {
      control: "inline-radio",
      options: ["2.5rem", "3rem", "3.5rem"],
      description: "02",
    },
  },

  render: (args) => (
    <CustomCellSizePreview
      showOutsideDays={args.showOutsideDays}
      cellSize={
        args.cellSize as
          | "2.5rem"
          | "3rem"
          | "3.5rem"
      }
    />
  ),
}

export const WeekNumbers: Story = {
  args: {
    showOutsideDays: true,
    showWeekNumber: true,
    numberOfMonths: 2,
  },

  argTypes: {
    showOutsideDays: {
      control: "boolean",
      description: "01",
    },

    showWeekNumber: {
      control: "boolean",
      description: "02",
    },

    numberOfMonths: {
      control: "inline-radio",
      options: [1, 2],
      description: "03",
    },
  },

  render: (args) => (
    <WeekNumbersPreview
      showOutsideDays={args.showOutsideDays}
      showWeekNumber={args.showWeekNumber}
      numberOfMonths={
        args.numberOfMonths as 1 | 2
      }
    />
  ),
}
