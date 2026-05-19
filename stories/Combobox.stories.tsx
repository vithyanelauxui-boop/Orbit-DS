import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  useComboboxAnchor,
} from "@orbit-ds"

const assignees = [
  "Ananya Rao",
  "Dev Malik",
  "Karan Mehta",
  "Mira Shah",
  "Priya Nair",
] as const

function SingleComboboxPreview() {
  const [value, setValue] = React.useState<string | null>("Ananya Rao")

  return (
    <div className="max-w-sm">
      <Combobox items={assignees} value={value} onValueChange={setValue}>
        <ComboboxInput placeholder="Select assignee" />
        <ComboboxContent>
          <ComboboxList>
            {assignees.map((person) => (
              <ComboboxItem key={person} value={person}>
                {person}
              </ComboboxItem>
            ))}
            <ComboboxEmpty>No assignees found.</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}

function MultiComboboxPreview() {
  const anchorRef = useComboboxAnchor()
  const [value, setValue] = React.useState<string[]>(["Design", "Docs"])
  const tags = ["Design", "Engineering", "Docs", "QA", "Research"] as const

  return (
    <div className="max-w-md">
      <Combobox
        multiple
        items={tags}
        value={value}
        onValueChange={(nextValue) => setValue(nextValue)}
      >
        <ComboboxChips ref={anchorRef}>
          {value.map((tag) => (
            <ComboboxChip key={tag}>{tag}</ComboboxChip>
          ))}
          <ComboboxChipsInput placeholder="Add tags" />
        </ComboboxChips>
        <ComboboxContent anchor={anchorRef}>
          <ComboboxList>
            {tags.map((tag) => (
              <ComboboxItem key={tag} value={tag}>
                {tag}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}

const meta = {
  title: "Components/Combobox",
  component: SingleComboboxPreview,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Use comboboxes for searchable selects, grouped option lists, clearable inputs, and chip-based multi-select experiences.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SingleComboboxPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <SingleComboboxPreview />,
}

export const Grouped: Story = {
  render: () => {
    const people = [
      { label: "Design", items: ["Ananya Rao", "Mira Shah"] },
      {
        label: "Engineering",
        items: ["Dev Malik", "Karan Mehta", "Priya Nair"],
      },
    ] as const
    const flatItems = people.flatMap((group) => group.items)
    const [value, setValue] = React.useState<string | null>(null)

    return (
      <div className="max-w-sm">
        <Combobox items={flatItems} value={value} onValueChange={setValue}>
          <ComboboxInput placeholder="Search teammates" />
          <ComboboxContent>
            <ComboboxList>
              {people.map((group, index) => (
                <React.Fragment key={group.label}>
                  <ComboboxGroup>
                    <ComboboxLabel>{group.label}</ComboboxLabel>
                    {group.items.map((person) => (
                      <ComboboxItem key={person} value={person}>
                        {person}
                      </ComboboxItem>
                    ))}
                  </ComboboxGroup>
                  {index < people.length - 1 && <ComboboxSeparator />}
                </React.Fragment>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    )
  },
}

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | null>("Karan Mehta")

    return (
      <div className="max-w-sm">
        <Combobox items={assignees} value={value} onValueChange={setValue}>
          <ComboboxInput placeholder="Select reviewer" showClear />
          <ComboboxContent>
            <ComboboxList>
              {assignees.map((person) => (
                <ComboboxItem key={person} value={person}>
                  {person}
                </ComboboxItem>
              ))}
              <ComboboxEmpty>No reviewers match your search.</ComboboxEmpty>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    )
  },
}

export const Chips: Story = {
  render: () => <MultiComboboxPreview />,
}

export const EmptyState: Story = {
  render: () => (
    <div className="max-w-sm">
      <Combobox items={[]}>
        <ComboboxInput placeholder="Search environments" />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>No environments found.</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
}

