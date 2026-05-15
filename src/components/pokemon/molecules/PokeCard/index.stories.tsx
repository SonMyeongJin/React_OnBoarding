import type { Meta, StoryObj } from '@storybook/react';
import PokeCard from './index';

type Story = StoryObj<typeof PokeCard>;

const meta: Meta<typeof PokeCard> = {
  argTypes: {
    isPika: {
      control: 'boolean',
      description: 'true면 피카츄, false면 파이리',
    },
    skill: {
      control: 'text',
      description: '포켓몬의 기술 이름',
    },
  },
  component: PokeCard,
  parameters: {
    layout: 'centered',
  },
  title: 'Pokemon/molecules/pokecard',
};

export default meta;
export const Pikachu: Story = {
  args: {
    isPika: true,
    skill: 'Pikachu',
  },
};
export const Hitokage: Story = {
  args: {
    isPika: false,
    skill: 'Hitokage',
  },
};
