import type { Meta, StoryObj } from "@storybook/react";
import { Input, Label } from "@figma-mcp-demo/ui";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: "Email address", type: "email" },
};

export const WithLabel: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        width: 280,
      }}
    >
      <Label htmlFor="email">Email</Label>
      <Input id="email" {...args} />
    </div>
  ),
  args: { placeholder: "you@example.com", type: "email" },
};

export const WithError: Story = {
  args: {
    placeholder: "Email address",
    error: true,
    defaultValue: "bad-email",
  },
};

export const Disabled: Story = {
  args: { placeholder: "Disabled", disabled: true },
};
