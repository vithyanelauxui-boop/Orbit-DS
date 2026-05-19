import type { Meta, StoryObj } from "@storybook/react-vite"

const typographyTokens = [
  {
    token: "--font-sans",
    utility: "font-sans",
    sample: "Geist",
    className: "font-sans text-base",
    usage: "Default product UI, forms, and long-form body copy.",
  },
  {
    token: "--font-heading",
    utility: "font-heading",
    sample: "Figtree",
    className: "font-heading text-2xl font-semibold tracking-tight",
    usage: "Display text, page titles, and section headings.",
  },
  {
    token: "--font-mono",
    utility: "font-mono",
    sample: "Geist Mono",
    className: "font-mono text-sm",
    usage: "Commands, code snippets, and token references.",
  },
] as const

const typographyUtilities = [
  {
    label: "Display heading",
    classes: "font-heading text-4xl font-semibold tracking-tight",
  },
  {
    label: "Body default",
    classes: "text-base leading-7 text-foreground",
  },
  {
    label: "Body muted",
    classes: "text-sm leading-6 text-muted-foreground",
  },
  {
    label: "Meta / eyebrow",
    classes: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
  },
  {
    label: "Mono inline",
    classes: "font-mono text-sm text-foreground",
  },
] as const

function TypographyPreview() {
  return (
    <div className="w-full max-w-4xl rounded-3xl border bg-background p-8 shadow-sm sm:p-10">
      <div className="space-y-3 border-b pb-8">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          Typography
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Clear hierarchy for product UI
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Use heading tags for structure, body styles for readability, and
          smaller labels for supportive information across the design system.
        </p>
      </div>

      <div className="grid gap-10 pt-8">
        <section className="space-y-5">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Headings
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                h1
              </p>
              <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                Design system foundations
              </h1>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                h2
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Consistent interface language
              </h2>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                h3
              </p>
              <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Reusable layout patterns
              </h3>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                h4
              </p>
              <h4 className="font-heading text-xl font-semibold tracking-tight">
                Compact section title
              </h4>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                h5
              </p>
              <h5 className="font-heading text-lg font-semibold tracking-tight">
                Supporting heading
              </h5>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                h6
              </p>
              <h6 className="font-heading text-base font-semibold tracking-tight">
                Small heading label
              </h6>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t pt-8 md:grid-cols-2">
          <div className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Body Text
            </h2>

            <p className="text-lg leading-8 text-foreground">
              Lead text is useful for short introductions and key explanatory
              copy at the start of a page or section.
            </p>

            <p className="text-base leading-7 text-foreground">
              Default paragraph text should feel balanced and highly readable in
              dense interfaces. Keep line length moderate and use muted text for
              secondary information rather than shrinking every supporting
              sentence.
            </p>

            <p className="text-sm leading-6 text-muted-foreground">
              Small text works well for metadata, helper copy, and supporting
              context that should stay visible without competing with primary
              content.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Utility Styles
            </h2>

            <blockquote className="border-l-2 pl-4 text-base italic text-foreground">
              Typography should guide attention before color, motion, or
              decoration does.
            </blockquote>

            <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-foreground marker:text-muted-foreground">
              <li>Use semantic tags whenever the content has document meaning.</li>
              <li>Reserve `font-heading` for display and section headings.</li>
              <li>Use muted text for annotations, captions, and timestamps.</li>
            </ul>

            <div className="rounded-xl bg-muted px-4 py-3 font-mono text-sm text-foreground">
              npm run storybook
            </div>

            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Caption / Eyebrow / Meta text
            </p>
          </div>
        </section>

        <section className="space-y-5 border-t pt-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Design Tokens
          </h2>

          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Typography tokens define the font families used across Orbit DS and
            pair with a small set of utility conventions for hierarchy and
            readability.
          </p>

          <div className="grid gap-4">
            {typographyTokens.map((item) => (
              <div
                key={item.token}
                className="grid gap-4 rounded-2xl border p-4 md:grid-cols-[180px_minmax(0,1fr)_220px]"
              >
                <div className="space-y-1">
                  <div className="font-mono text-sm text-foreground">
                    {item.token}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.utility}
                  </div>
                </div>

                <div className={item.className}>{item.sample}</div>

                <p className="text-sm leading-6 text-muted-foreground">
                  {item.usage}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border bg-muted/40 p-4">
            <div className="mb-3 text-sm font-medium text-foreground">
              Common utility pairings
            </div>

            <div className="grid gap-2">
              {typographyUtilities.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 rounded-xl bg-background px-3 py-2 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-foreground">{item.label}</span>
                  <code className="font-mono text-xs text-muted-foreground">
                    {item.classes}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const meta = {
  title: "Components/Typography",
  component: TypographyPreview,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use typography styles to establish hierarchy, readability, and semantic structure across product surfaces.

## Composition

\`\`\`text
Typography
|-- h1
|-- h2
|-- h3
|-- h4
|-- h5
|-- h6
|-- paragraph
|-- blockquote
|-- list
\`-- mono / caption text
\`\`\`

## Guidance

- Use semantic heading tags to reflect document structure.
- Apply \`font-heading\` to display and section headings.
- Use the font tokens \`--font-sans\`, \`--font-heading\`, and \`--font-mono\` for consistent family selection.
- Keep body text comfortable to scan with consistent line-height.
- Use muted text for secondary information, captions, and labels.
        `,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        className={[
          "flex w-full justify-center px-6",
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
} satisfies Meta<typeof TypographyPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
