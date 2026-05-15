import type { Meta, StoryObj } from '@storybook/react';
import Skill from './index';

type Story = StoryObj<typeof Skill>;

const meta: Meta<typeof Skill> = {
  argTypes: {
    name: {
      control: 'text',
      description: '포켓몬 이름을 입력하세요. (예: Pikachu, Hitokage)',
    },
  },
  component: Skill,
  parameters: {
    layout: 'centered',
  },
  title: 'Pokemon/atoms/Skill',
};

export default meta;

export const pika: Story = {
  args: {
    name: 'Pikachu',
  },
};
export const hito: Story = {
  args: {
    name: 'Hitokage',
  },
};
