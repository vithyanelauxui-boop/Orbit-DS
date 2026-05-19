import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@orbit-ds"

const slides = [
  {
    title: "Design tokens",
    body: "Keep spacing, color, and typography decisions consistent across teams.",
  },
  {
    title: "Reusable patterns",
    body: "Ship pre-built UI blocks that reduce repeated implementation work.",
  },
  {
    title: "Release notes",
    body: "Highlight additions, changes, and deprecations in a scannable format.",
  },
] as const

type CarouselStoryArgs = {
  orientation?: "horizontal" | "vertical"
}

function CarouselShell({
  orientation = "horizontal",
}: CarouselStoryArgs) {
  return (
    <Carousel
      orientation={orientation}
      className={orientation === "vertical" ? "mx-auto max-w-sm" : "mx-auto max-w-3xl"}
    >
      <CarouselContent className={orientation === "vertical" ? "h-40 -mt-4" : "-ml-4"}>
        {slides.map((slide) => (
          <CarouselItem
            key={slide.title}
            className={orientation === "vertical" ? "pt-4" : "pl-4"}
          >
            <Card className="h-30 border">
              <CardContent className="flex h-full flex-col justify-center gap-2 py-10">
                <div className="font-heading text-lg font-medium">{slide.title}</div>
                <p className="text-sm text-muted-foreground">{slide.body}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function MultiCarouselShell({
  orientation = "horizontal",
}: CarouselStoryArgs) {
  return (
    <Carousel
      orientation={orientation}
      className={orientation === "vertical" ? "mx-auto max-w-sm" : "mx-auto max-w-5xl"}
    >
      <CarouselContent className={orientation === "vertical" ? "h-96 -mt-4" : "-ml-4"}>
        {slides.map((slide) => (
          <CarouselItem
            key={slide.title}
            className={
              orientation === "vertical"
                ? "basis-1/3 pt-4"
                : "pl-4 md:basis-1/2 lg:basis-1/3"
            }
          >
            <Card className="h-30 border shadow-none">
              <CardContent className="flex h-full flex-col justify-center gap-2 py-10">
                <div className="font-heading text-lg font-medium">{slide.title}</div>
                <p className="text-sm text-muted-foreground">{slide.body}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const meta = {
  title: "Components/Carousel",
  component: CarouselShell,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use the carousel for product tours, testimonials, media galleries, vertical scrollers, and multi-card browse experiences.

## Composition

\`\`\`text
Carousel
|-- CarouselContent
|   \`-- CarouselItem
|-- CarouselPrevious
\`-- CarouselNext
\`\`\`

## Parameter Properties

- \`orientation\`: Switches the carousel between horizontal and vertical scrolling.
- \`CarouselContent\`: Wraps the track that contains each slide item.
- \`CarouselItem\`: Defines the size and spacing of each slide.
- \`CarouselPrevious\` and \`CarouselNext\`: Provide carousel navigation controls.
        `,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        className={[
          "flex justify-center px-10",
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
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "Switches the carousel between horizontal and vertical layouts.",
      table: {
        defaultValue: { summary: "horizontal" },
      },
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<CarouselStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => <CarouselShell {...args} />,
}

export const MultiplePerView: Story = {
  render: (args) => <MultiCarouselShell {...args} />,
}
