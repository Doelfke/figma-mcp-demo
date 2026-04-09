import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from "@figma-mcp-demo/ui";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <CardHeader>
        <CardTitle>Notification settings</CardTitle>
        <CardDescription>Manage how you receive notifications.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
          You have 3 unread messages.
        </p>
      </CardContent>
      <CardFooter style={{ gap: "0.5rem" }}>
        <Button variant="outline">Cancel</Button>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <CardHeader>
        <CardTitle>Project status</CardTitle>
        <CardDescription>Current sprint overview</CardDescription>
      </CardHeader>
      <CardContent style={{ display: "flex", gap: "0.5rem" }}>
        <Badge>Active</Badge>
        <Badge variant="secondary">In review</Badge>
        <Badge variant="outline">Draft</Badge>
      </CardContent>
    </Card>
  ),
};
