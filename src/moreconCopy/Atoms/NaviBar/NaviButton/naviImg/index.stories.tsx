import type { Meta, StoryObj } from '@storybook/react';

import NaviImg from './index';

type Story = StoryObj<typeof NaviImg>;

const meta: Meta<typeof NaviImg> = {
  args: {
    menu: 'guide',
  },
  argTypes: {
    menu: {
      control: { type: 'select' },
      options: ['guide', 'mail', 'wishList', 'myPage'],
    },
  },
  component: NaviImg,
  parameters: {
    layout: 'centered',
  },
  title: 'MoreconCopy/Atoms/NaviBar/NaviImg',
};

export default meta;

export const Guide: Story = {
  args: {
    menu: 'guide',
  },
};

export const Mail: Story = {
  args: {
    menu: 'mail',
  },
};

export const WishList: Story = {
  args: {
    menu: 'wishList',
  },
};

export const MyPage: Story = {
  args: {
    menu: 'myPage',
  },
};
