import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
 CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@orbit-ds"

import {
  CaretDownIcon,
  CaretRightIcon,
  FileIcon,
  FolderIcon,
  MinusIcon,
  SquareIcon,
} from "@orbit-ds"

type CollapsibleStoryArgs = {
  defaultOpen?: boolean
}

type FileTreeItem =
  | { name: string }
  | { name: string; items: FileTreeItem[] }

function BasicPreview({
  defaultOpen = false,
}: CollapsibleStoryArgs) {
  return (
    <Card className="w-[420px]">
      <CardContent className="">
        <Collapsible
          defaultOpen={defaultOpen}
          className="rounded-md transition-colors data-[state=open]:bg-muted"
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="group w-full justify-start"
            >
              Product details

              <CaretDownIcon
                className="ml-auto transition-transform group-data-[state=open]:rotate-180"
                weight="bold"
              />
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="flex flex-col items-start gap-3 px-3 pb-3 pt-1 text-sm">
            <p className="text-muted-foreground">
              This panel can be expanded or collapsed to reveal additional
              content.
            </p>

            <Button size="sm">
              Learn more
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}

function InlinePreview({
  defaultOpen = false,
}: CollapsibleStoryArgs) {
  return (
    <div className="w-[420px] rounded-xl border p-4">
      <Collapsible defaultOpen={defaultOpen}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-medium">
              March invoice
            </div>

            <div className="text-sm text-muted-foreground">
              $2,480 due April 4
            </div>
          </div>

          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              Details
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="pt-3 text-sm text-muted-foreground">
          Taxes, support fees, and seat changes are included in this billing
          period.
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

function SettingsPreview({
  defaultOpen = false,
}: CollapsibleStoryArgs) {
  const [open, setOpen] =
    React.useState(defaultOpen)

  return (
    <Card
      className="w-[420px]"
      size="sm"
    >
      <CardHeader>
        <CardTitle>
          Radius
        </CardTitle>

        <CardDescription>
          Set the corner radius of the element.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Collapsible
          open={open}
          onOpenChange={setOpen}
          className="flex items-start gap-2"
        >
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel className="sr-only">
                Radius X
              </FieldLabel>

              <Input
                placeholder="0"
                defaultValue={0}
              />
            </Field>

            <Field>
              <FieldLabel className="sr-only">
                Radius Y
              </FieldLabel>

              <Input
                placeholder="0"
                defaultValue={0}
              />
            </Field>

            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel className="sr-only">
                  Radius Top
                </FieldLabel>

                <Input
                  placeholder="0"
                  defaultValue={0}
                />
              </Field>

              <Field>
                <FieldLabel className="sr-only">
                  Radius Bottom
                </FieldLabel>

                <Input
                  placeholder="0"
                  defaultValue={0}
                />
              </Field>
            </CollapsibleContent>
          </FieldGroup>

          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              size="icon"
            >
              {open ? (
                <MinusIcon />
              ) : (
                <SquareIcon />
              )}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}

function FileTreePreview({
  defaultOpen = false,
}: CollapsibleStoryArgs) {
  const fileTree: FileTreeItem[] = [
    {
      name: "components",
      items: [
        {
          name: "ui",
          items: [
            { name: "button.tsx" },
            { name: "card.tsx" },
            { name: "dialog.tsx" },
          ],
        },
        { name: "login-form.tsx" },
      ],
    },
    {
      name: "lib",
      items: [
        { name: "utils.ts" },
        { name: "api.ts" },
      ],
    },
    { name: "package.json" },
    { name: "README.md" },
  ]

  const renderItem = (
    item: FileTreeItem,
  ) => {
    if ("items" in item) {
      return (
        <Collapsible
          key={item.name}
          defaultOpen={defaultOpen}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="group w-full justify-start px-2"
            >
              <CaretRightIcon className="transition-transform group-data-[state=open]:rotate-90" />

              <FolderIcon />

              {item.name}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="ml-5 mt-1 flex flex-col gap-1">
            {item.items.map((child) =>
              renderItem(child),
            )}
          </CollapsibleContent>
        </Collapsible>
      )
    }

    return (
      <Button
        key={item.name}
        variant="link"
        size="sm"
        className="w-full justify-start gap-2 px-2 text-foreground"
      >
        <FileIcon />
        {item.name}
      </Button>
    )
  }

  return (
    <Card
      className="w-[420px] gap-2"
      size="sm"
    >
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList className="w-full">
            <TabsTrigger value="explorer">
              Explorer
            </TabsTrigger>

            <TabsTrigger value="outline">
              Outline
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-1">
          {fileTree.map((item) =>
            renderItem(item),
          )}
        </div>
      </CardContent>
    </Card>
  )
}

const meta = {
  title: "Components/Collapsible",

  parameters: {
    layout: "centered",

    docs: {
      description: {
        component: `
Collapsible components progressively reveal or hide content.

## Composition

\`\`\`text
Collapsible
|-- CollapsibleTrigger
\`-- CollapsibleContent
\`\`\`

## Variants

- Basic
- Inline
- Settings
- File Tree
        `,
      },
    },
  },

  tags: ["autodocs"],

  argTypes: {
    defaultOpen: {
      control: "boolean",
      description:
        "Controls the initial expanded state.",
    },
  },

  args: {
    defaultOpen: false,
  },
} satisfies Meta<CollapsibleStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <BasicPreview {...args} />
  ),
}

export const Inline: Story = {
  render: (args) => (
    <InlinePreview {...args} />
  ),
}

export const Settings: Story = {
  render: (args) => (
    <SettingsPreview {...args} />
  ),
}

export const FileTree: Story = {
  render: (args) => (
    <FileTreePreview {...args} />
  ),
}
