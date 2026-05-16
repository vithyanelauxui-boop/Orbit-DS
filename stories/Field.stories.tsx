import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Switch,
  Textarea,
} from "@orbit-ds"

type FieldStoryArgs = {
  orientation?: "vertical" | "horizontal" | "responsive"
}

const meta = {
  title: "Orbit DS/Field",
  component: Field,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Use field primitives to structure labels, helper text, validation, grouped controls, and semantic form sections.

## Parameter Properties

- \`orientation\`: Controls how field content is arranged in supported story examples.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["vertical", "horizontal", "responsive"],
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<FieldStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const InputField: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="workspace-name">Workspace name</FieldLabel>
      <Input id="workspace-name" defaultValue="Orbit DS" />
      <FieldDescription>
        This name appears in invite emails and shared review links.
      </FieldDescription>
    </Field>
  ),
}

export const TextareaField: Story = {
  render: () => (
    <Field className="max-w-md">
      <FieldLabel htmlFor="release-summary">Release summary</FieldLabel>
      <Textarea id="release-summary" placeholder="Summarize the release for your team..." />
      <FieldDescription>
        Keep it short and skimmable for reviewers and stakeholders.
      </FieldDescription>
    </Field>
  ),
}

export const SelectField: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="environment">Environment</FieldLabel>
      <Select defaultValue="staging">
        <SelectTrigger id="environment" className="w-full">
          <SelectValue placeholder="Select an environment" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="development">Development</SelectItem>
          <SelectItem value="staging">Staging</SelectItem>
          <SelectItem value="production">Production</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>
        Choose where the release note or preview should be published first.
      </FieldDescription>
    </Field>
  ),
}

export const SliderField: Story = {
  render: () => {
    const [value, setValue] = React.useState([72])

    return (
      <Field className="max-w-md">
        <FieldLabel htmlFor="coverage">Coverage target</FieldLabel>
        <FieldContent>
          <Slider id="coverage" value={value} onValueChange={setValue} max={100} step={1} className="py-2" />
          <FieldDescription>Current target: {value[0]}% visual and interaction coverage.</FieldDescription>
        </FieldContent>
      </Field>
    )
  },
}

export const CheckboxField: Story = {
  render: ({ orientation }) => (
    <Field orientation={orientation} className="max-w-md">
      <Checkbox id="notify-reviewers" defaultChecked />
      <FieldContent>
        <FieldTitle>Notify reviewers</FieldTitle>
        <FieldDescription>
          Send an email when this draft is ready for QA and design review.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
}

export const RadioField: Story = {
  render: () => (
    <FieldSet className="max-w-md">
      <FieldLegend>Release channel</FieldLegend>
      <FieldDescription>Pick the audience that should receive this release first.</FieldDescription>
      <RadioGroup defaultValue="beta">
        <Field orientation="horizontal">
          <RadioGroupItem id="channel-beta" value="beta" />
          <FieldContent>
            <FieldLabel htmlFor="channel-beta">Beta users</FieldLabel>
            <FieldDescription>Best for early feedback and validation before broad rollout.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="channel-all" value="all" />
          <FieldContent>
            <FieldLabel htmlFor="channel-all">All users</FieldLabel>
            <FieldDescription>Publishes immediately to the full product audience.</FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
    </FieldSet>
  ),
}

export const SwitchField: Story = {
  render: ({ orientation }) => (
    <Field orientation={orientation} className="max-w-md">
      <Switch id="private-mode" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="private-mode">Private mode</FieldLabel>
        <FieldDescription>Hide this draft from shared collections until final approval.</FieldDescription>
      </FieldContent>
    </Field>
  ),
}

export const ChoiceCard: Story = {
  render: () => (
    <FieldSet className="max-w-xl">
      <FieldLegend>Publishing mode</FieldLegend>
      <FieldDescription>Present related options as selectable cards when the extra context helps.</FieldDescription>
      <RadioGroup defaultValue="scheduled" className="grid gap-3 md:grid-cols-2">
        <FieldLabel htmlFor="publish-now">
          <Field>
            <RadioGroupItem id="publish-now" value="now" />
            <FieldContent>
              <FieldTitle>Publish now</FieldTitle>
              <FieldDescription>Immediately notify everyone with access to this workspace.</FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="publish-scheduled">
          <Field>
            <RadioGroupItem id="publish-scheduled" value="scheduled" />
            <FieldContent>
              <FieldTitle>Schedule send</FieldTitle>
              <FieldDescription>Pick a time for coordinated launches across teams and regions.</FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </RadioGroup>
    </FieldSet>
  ),
}

export const FieldGroupVariants: Story = {
  render: ({ orientation }) => (
    <div className="grid gap-6">
      <FieldGroup className="max-w-sm">
        <Field orientation={orientation === "responsive" ? "vertical" : orientation}>
          <FieldLabel htmlFor="group-name">Project name</FieldLabel>
          <Input id="group-name" defaultValue="Orbit DS" />
        </Field>
        <Field orientation={orientation === "responsive" ? "vertical" : orientation}>
          <FieldLabel htmlFor="group-slug">Project slug</FieldLabel>
          <Input id="group-slug" defaultValue="orbit-ds" />
        </Field>
      </FieldGroup>

      <FieldGroup className="max-w-xl">
        <Field orientation="horizontal">
          <FieldLabel htmlFor="domain">Custom domain</FieldLabel>
          <FieldContent>
            <Input id="domain" placeholder="docs.example.com" />
            <FieldDescription>
              Point a verified subdomain to your published component documentation.
            </FieldDescription>
          </FieldContent>
        </Field>
        <FieldSeparator>Advanced</FieldSeparator>
        <Field orientation={orientation}>
          <FieldLabel htmlFor="cdn-url">Asset base URL</FieldLabel>
          <FieldContent>
            <Input id="cdn-url" placeholder="https://cdn.example.com" />
            <FieldDescription>Used for images, fonts, and shared static assets.</FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
}

export const FieldSetStory: Story = {
  name: "FieldSet",
  render: () => (
    <FieldSet className="max-w-md">
      <FieldLegend>Workspace settings</FieldLegend>
      <FieldDescription>
        Configure the basic settings reviewers see before the workspace is shared.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldset-name">Workspace name</FieldLabel>
          <Input id="fieldset-name" defaultValue="Orbit DS" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldset-description">Description</FieldLabel>
          <Textarea id="fieldset-description" placeholder="Describe the purpose of this workspace" />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
}

export const ErrorState: Story = {
  render: () => (
    <Field className="max-w-sm" data-invalid="true">
      <FieldLabel htmlFor="project-slug">Project slug</FieldLabel>
      <Input id="project-slug" aria-invalid="true" defaultValue="Orbit DS!" />
      <FieldError>Use lowercase letters, numbers, and hyphens only.</FieldError>
    </Field>
  ),
}
