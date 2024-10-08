import type { Meta, StoryObj } from "@storybook/react";

import { ToDo } from "./ToDo";

const meta = {
  title: "Components/ToDo",
  component: ToDo,
  tags: ["autodocs"],
} satisfies Meta<typeof ToDo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
