import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@orbit-ds"

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="size-4"
    >
      <circle cx="7" cy="7" r="4.5" />

      <path
        d="m10.5 10.5 3 3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="size-4"
    >
      <path
        d="M2.75 4.25h10.5v7.5H2.75z"
        rx="1.5"
      />

      <path
        d="m3.5 5 4.5 3.5L12.5 5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StoryFrame({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  )
}

const meta = {
  title: "Orbit DS/Input",

  component: Input,

  parameters: {
    layout: "fullscreen",

    docs: {
      description: {
        component: `
Use inputs for short-form text entry,
search, email capture, numeric entry,
and standard single-field forms.

## Parameter Properties

- \`type\`: Changes input type.
- \`placeholder\`: Sets placeholder text.
- \`disabled\`: Prevents interaction.
- \`invalid\`: Shows validation styles.
- \`withLabel\`: Toggles label visibility.
- \`withDescription\`: Toggles helper text.
- \`withIcon\`: Adds leading icon.
- \`withButton\`: Adds attached action button.
        `,
      },
    },
  },

  tags: ["autodocs"],

  argTypes: {
    type: {
      control: "select",

      options: [
        "text",
        "email",
        "password",
        "search",
        "number",
      ],
    },

    placeholder: {
      control: "text",
    },

    disabled: {
      control: "boolean",
    },

    invalid: {
      control: "boolean",
    },

    withLabel: {
      control: "boolean",
    },

    withDescription: {
      control: "boolean",
    },

    withIcon: {
      control: "boolean",
    },

    withButton: {
      control: "boolean",
    },
  },

  args: {
    type: "text",
    placeholder: "Enter a value",
    disabled: false,
    invalid: false,
    withLabel: true,
    withDescription: true,
    withIcon: false,
    withButton: false,
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: ({
    type,
    placeholder,
    disabled,
    invalid,
    withLabel,
    withDescription,
    withIcon,
    withButton,
  }) => (
    <StoryFrame>
      <Field data-invalid={invalid}>
        {withLabel ? (
          <FieldLabel htmlFor="basic-input">
            Email address
          </FieldLabel>
        ) : null}

        {withIcon || withButton ? (
          <InputGroup>
            {withIcon ? (
              <InputGroupAddon align="inline-start">
                <InputGroupText>
                  {type === "email" ? (
                    <MailIcon />
                  ) : (
                    <SearchIcon />
                  )}
                </InputGroupText>
              </InputGroupAddon>
            ) : null}

            <InputGroupInput
              id="basic-input"
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              aria-invalid={invalid}
            />

            {withButton ? (
              <InputGroupAddon align="inline-end">
                <Button size="sm">
                  Send
                </Button>
              </InputGroupAddon>
            ) : null}
          </InputGroup>
        ) : (
          <Input
            id="basic-input"
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={invalid}
          />
        )}

        {invalid ? (
          <FieldError>
            Invalid input value.
          </FieldError>
        ) : withDescription ? (
          <FieldDescription>
            Used for notifications and
            account access.
          </FieldDescription>
        ) : null}
      </Field>
    </StoryFrame>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
    withLabel: true,
    withDescription: true,
  },

  render: (args) => (
    <Basic.render {...args} />
  ),
}

export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: "invalid@email",
    withLabel: true,
    withDescription: false,
  },

  render: (args) => (
    <Basic.render {...args} />
  ),
}

export const WithIcon: Story = {
  args: {
    type: "search",
    withIcon: true,
    placeholder: "Search components",
  },

  render: (args) => (
    <Basic.render {...args} />
  ),
}

export const WithButton: Story = {
  args: {
    withButton: true,
    placeholder: "Enter email",
  },

  render: (args) => (
    <Basic.render {...args} />
  ),
}

export const Types: Story = {
  render: () => (
    <StoryFrame>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Text input"
        />

        <Input
          type="email"
          placeholder="name@example.com"
        />

        <Input
          type="password"
          value="password"
          readOnly
        />

        <Input
          type="search"
          placeholder="Search..."
        />

        <Input
          type="number"
          placeholder="42"
        />
      </div>
    </StoryFrame>
  ),
}