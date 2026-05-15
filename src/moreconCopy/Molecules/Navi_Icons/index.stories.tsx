import type { Meta, StoryObj } from '@storybook/react';

import Navi_Icons from './index';

type Story = StoryObj<typeof Navi_Icons>;

const meta: Meta<typeof Navi_Icons> = {
  component: Navi_Icons,
  parameters: {
    layout: 'centered',
  },
  title: 'MoreconCopy/Molecules/NaviBar',
};

export default meta;

export const Navi_Icon: Story = {};
