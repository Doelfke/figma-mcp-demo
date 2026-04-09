import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Label, Switch, Separator } from "@figma-mcp-demo/ui";

const meta = {
  title: "UI/Form Controls",
  tags: ["autodocs"],
};

export default meta;

export const CheckboxDefault: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Already checked</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
    </div>
  ),
};

export const SwitchDefault: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Switch id="notifications" />
        <Label htmlFor="notifications">Enable notifications</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Switch id="enabled" defaultChecked />
        <Label htmlFor="enabled">Enabled by default</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Switch id="switch-disabled" disabled />
        <Label htmlFor="switch-disabled">Disabled</Label>
      </div>
    </div>
  ),
};

export const SeparatorDefault: StoryObj = {
  render: () => (
    <div style={{ width: 320 }}>
      <p style={{ margin: "0 0 0.75rem", fontSize: "0.875rem" }}>
        Above the line
      </p>
      <Separator />
      <p style={{ margin: "0.75rem 0 0", fontSize: "0.875rem" }}>
        Below the line
      </p>
    </div>
  ),
};
