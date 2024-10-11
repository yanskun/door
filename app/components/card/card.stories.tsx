import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card";
import { useState } from "react";

const meta = {
  args: {
    title: "Card title",
    description: "Card description",
    open: false,
    onClick: () => {},
  },
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    return (
      <Card {...args} open={open} onClick={() => setOpen((prev) => !prev)} />
    );
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
