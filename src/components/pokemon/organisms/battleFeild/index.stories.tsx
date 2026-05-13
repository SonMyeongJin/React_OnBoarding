import type { Meta, StoryObj } from '@storybook/react';
import BattleFeild from './index';

type Story = StoryObj<typeof BattleFeild>;

const meta: Meta<typeof BattleFeild> = {
  argTypes: {},
  component: BattleFeild,
  parameters: {
    layout: 'centered',
  },
  title: 'Pokemon/BattleFeild',
};

export default meta;

export const Default: Story = {
  args: {},
};
