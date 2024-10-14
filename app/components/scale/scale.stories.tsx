import type { Meta, StoryObj } from "@storybook/react";

import { Scale } from "./scale";

const meta = {
  args: {},
  title: "Components/Scale",
  component: Scale,
  tags: ["autodocs"],
} satisfies Meta<typeof Scale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};