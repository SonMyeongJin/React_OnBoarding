import type { Meta, StoryObj } from '@storybook/react';
import Skills from './index';

type Story = StoryObj<typeof Skills>;

const meta: Meta<typeof Skills> = {
  component: Skills,
};

export default meta;

export const Default: Story = {
  args: {
    skills: [
      { pp: 10, skillName: 'skill1', skillType: 'type1' },
      { pp: 20, skillName: 'skill2', skillType: 'type2' },
      { pp: 30, skillName: 'skill3', skillType: 'type3' },
      { pp: 40, skillName: 'skill4', skillType: 'type4' },
      { pp: 50, skillName: 'skill5', skillType: 'type5' },
    ],
  },
};
