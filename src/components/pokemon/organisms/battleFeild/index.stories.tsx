import type { Meta, StoryObj } from '@storybook/react';

import BattleFeild from '../../organisms/battleFeild';

type Story = StoryObj<typeof BattleFeild>;

const meta: Meta<typeof BattleFeild> = {
  component: BattleFeild,
};

export default meta;

export const Default: Story = {
  args: {},
};
