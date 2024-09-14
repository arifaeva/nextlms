import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    placeholder: "Input value",
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: "Input password",
    type: "password",
  },
};
