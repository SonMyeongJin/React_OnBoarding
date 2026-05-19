import type { Meta, StoryObj } from '@storybook/react';
import PokeCard from './index';

type Story = StoryObj<typeof PokeCard>;

const meta: Meta<typeof PokeCard> = {
  component: PokeCard,
};

export default meta;
export const Pikachu: Story = {
  args: {
    attack: 50,
    defense: 30,
    hp: 100,
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    pokeName: 'pikacnu',
    speed: 20,
  },
};
export const Hitokage: Story = {
  args: {
    attack: 33,
    defense: 22,
    hp: 255,
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    pokeName: 'hitokage',
    speed: 11,
  },
};
