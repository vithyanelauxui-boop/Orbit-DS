import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@orbit-ds"

const meta = {
  title: "Orbit DS/Native Select",
  component: NativeSelect,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Use native selects when you want browser-native behavior with Orbit styling, especially in simpler forms or mobile-heavy flows.
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NativeSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <NativeSelect defaultValue="staging" className="w-56">
      <NativeSelectOption value="development">Development</NativeSelectOption>
      <NativeSelectOption value="staging">Staging</NativeSelectOption>
      <NativeSelectOption value="production">Production</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Small: Story = {
  render: () => (
    <NativeSelect size="sm" defaultValue="design" className="w-48">
      <NativeSelectOption value="design">Design</NativeSelectOption>
      <NativeSelectOption value="engineering">Engineering</NativeSelectOption>
      <NativeSelectOption value="qa">QA</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Groups: Story = {
  render: () => (
    <NativeSelect defaultValue="figma" className="w-56">
      <NativeSelectOptGroup label="Design">
        <NativeSelectOption value="figma">Figma</NativeSelectOption>
        <NativeSelectOption value="storybook">Storybook</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Engineering">
        <NativeSelectOption value="github">GitHub</NativeSelectOption>
        <NativeSelectOption value="vercel">Vercel</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Field className="w-56">
      <FieldLabel htmlFor="native-select-disabled">Environment</FieldLabel>
      <NativeSelect
        id="native-select-disabled"
        defaultValue="staging"
        disabled
      >
        <NativeSelectOption value="development">Development</NativeSelectOption>
        <NativeSelectOption value="staging">Staging</NativeSelectOption>
        <NativeSelectOption value="production">Production</NativeSelectOption>
      </NativeSelect>
      <FieldDescription>
        Disabled while deployment permissions are loading.
      </FieldDescription>
    </Field>
  ),
}

export const Invalid: Story = {
  render: () => (
    <Field className="w-56">
      <FieldLabel htmlFor="native-select-invalid">Country</FieldLabel>
      <NativeSelect
        id="native-select-invalid"
        defaultValue=""
        aria-invalid="true"
      >
        <NativeSelectOption value="" disabled>
          Select a country
        </NativeSelectOption>
        <NativeSelectOption value="in">India</NativeSelectOption>
        <NativeSelectOption value="ae">United Arab Emirates</NativeSelectOption>
        <NativeSelectOption value="us">United States</NativeSelectOption>
      </NativeSelect>
      <FieldError>Please choose a country before continuing.</FieldError>
    </Field>
  ),
}
