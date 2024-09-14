import type { Meta, StoryObj } from "@storybook/react";

import { FileInput as FileInputComponent } from "../file-input";

const meta = {
  title: "File Input",
  component: FileInputComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FileInput: Story = {
  args: {
    placeholder: "Choose file",
  },
};
