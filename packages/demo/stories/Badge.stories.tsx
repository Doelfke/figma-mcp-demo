import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@figma-mcp-demo/ui";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Badge", variant: "default" },
};
export const Secondary: Story = {
  args: { children: "Badge", variant: "secondary" },
};
export const Destructive: Story = {
  args: { children: "Error", variant: "destructive" },
};
export const Outline: Story = {
  args: { children: "Draft", variant: "outline" },
};
