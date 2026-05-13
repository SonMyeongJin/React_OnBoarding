import type { Meta, StoryObj } from '@storybook/react';
import Profile from './index';

type Story = StoryObj<typeof Profile>;

const meta: Meta<typeof Profile> = {
  argTypes: {
    isPika: {
      control: 'boolean',
      description: 'true면 피카츄, false면 파이리',
    },
  },
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  title: 'Pokemon/Profile',
};

export default meta;
export const Pikachu: Story = {
  args: {
    isPika: true,
  },
};
export const Hitokage: Story = {
  args: {
    isPika: false,
  },
};
