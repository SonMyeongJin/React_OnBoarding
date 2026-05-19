import type { Meta, StoryObj } from '@storybook/react';
import MegaButton from './index';

type Story = StoryObj<typeof MegaButton>;

const meta: Meta<typeof MegaButton> = {
  component: MegaButton,
};

export default meta;

export const Default: Story = {};
