import type { Meta, StoryObj } from '@storybook/react';
import Skills from './index';

type Story = StoryObj<typeof Skills>;

const meta: Meta<typeof Skills> = {
  component: Skills,
};

export default meta;

export const Default: Story = {};
