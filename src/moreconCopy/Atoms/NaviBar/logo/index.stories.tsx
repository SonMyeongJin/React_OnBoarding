import type { Meta, StoryObj } from '@storybook/react';

import Logo from './index';

type Story = StoryObj<typeof Logo>;

const meta: Meta<typeof Logo> = {
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  title: 'MoreconCopy/Atoms/NaviBar/Logo',
};

export default meta;

export const Default: Story = {};
