import type { Meta, StoryObj } from '@storybook/react';

import NaviText from './index';

type Story = StoryObj<typeof NaviText>;

const meta: Meta<typeof NaviText> = {
  args: {
    text: '가이드',
  },
  argTypes: {
    text: {
      control: { type: 'text' },
    },
  },
  component: NaviText,
  parameters: {
    layout: 'centered',
  },
  title: 'MoreconCopy/Atoms/NaviBar/NaviButton/NaviText',
};

export default meta;

export const Default: Story = {};
