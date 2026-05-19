import type { Meta, StoryObj } from '@storybook/react';
import Skill from './index';

type Story = StoryObj<typeof Skill>;

const meta: Meta<typeof Skill> = {
  component: Skill,
};

export default meta;

export const pika: Story = {
  args: {
    skill1: 'Thunderbolt',
    skill2: 'Quick Attack',
    skill3: 'Iron Tail',
    skill4: 'Electro Ball',
  },
};
export const hito: Story = {
  args: {
    skill1: 'Flamethrower',
    skill2: 'Scratch',
    skill3: 'Ember',
    skill4: 'Fire Spin',
  },
};
