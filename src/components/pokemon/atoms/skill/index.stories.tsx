import type { Meta, StoryObj } from '@storybook/react';
import Skill from './index';

type Story = StoryObj<typeof Skill>;

const meta: Meta<typeof Skill> = {
  component: Skill,
};

export default meta;

export const Default: Story = {
  args: {
    pp: 10,
    skillName: 'fireball',
    skillType: 'fire',
  },
};
