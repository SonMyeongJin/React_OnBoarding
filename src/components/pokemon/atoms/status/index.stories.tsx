import type { Meta, StoryObj } from '@storybook/react';
import Status from './index';

type Story = StoryObj<typeof Status>;

const meta: Meta<typeof Status> = {
  argTypes: {
    name: {
      control: 'text',
      description: '포켓몬 이름을 입력하세요. (예: Pikachu, Hitokage)',
    },
  },
  component: Status,
  parameters: {
    layout: 'centered',
  },
  title: 'Pokemon/atoms/Status',
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
