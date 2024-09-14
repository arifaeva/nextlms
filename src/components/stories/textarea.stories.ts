import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "../textarea";

const meta = {
  title: "Text Area",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextAreaInput: Story = {
  args: {
    placeholder: "Input value",
  },
};
