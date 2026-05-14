import type { Meta, StoryObj } from '@storybook/react';

import CartImg from './index';

type Story = StoryObj<typeof CartImg>;

const meta: Meta<typeof CartImg> = {
  component: CartImg,
  parameters: {
    layout: 'centered',
  },
  title: 'MoreconCopy/Atoms/NaviBar/CartImg',
};

export default meta;

export const Default: Story = {};
