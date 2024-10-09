import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card";

const meta = {
  args: {
    title: "Card title",
    description: "Card description",
  },
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
