import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import PokeCard from './index';

type Story = StoryObj<typeof PokeCard>;

const meta: Meta<typeof PokeCard> = {
  args: {
    onClickMegaSinka: action('megaSinka'),
  },
  component: PokeCard,
};

export default meta;
export const Pikachu: Story = {
  args: {
    attack: 50,
    defense: 30,
    hp: 100,

    imageUrl: // normal
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',

    pokeName: 'pikacnu',

    skill1: 'Thunderbolt',
    skill2: 'Quick Attack',
    skill3: 'Iron Tail',
    skill4: 'Electro Ball',
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

    skill1: 'Flamethrower',
    skill2: 'Scratch',
    skill3: 'Ember',
    skill4: 'Fire Spin',
    speed: 11,
  },
};
