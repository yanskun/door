import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Motion } from "./motion";

const meta = {
  title: "Components/Motion",
  component: Motion,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Motion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
