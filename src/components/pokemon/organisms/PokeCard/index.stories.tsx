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

    skills: [
      { pp: 15, skillName: 'thunderbolt', skillType: 'electric' },
      { pp: 30, skillName: 'tackle', skillType: 'normal' },
      { pp: 20, skillName: 'iron tail', skillType: 'steel' },
      { pp: 10, skillName: 'volt tackle', skillType: 'electric' },
    ],
    speed: 20,
  },
};
export const Hitokage: Story = {
  args: {
    attack: 50,
    defense: 30,
    hp: 100,

    imageUrl: // normal
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',

    pokeName: 'hitokage',

    skills: [
      { pp: 15, skillName: 'fireball', skillType: 'electric' },
      { pp: 30, skillName: 'tackle', skillType: 'normal' },
      { pp: 20, skillName: 'iron tail', skillType: 'steel' },
      { pp: 10, skillName: 'volt tackle', skillType: 'electric' },
    ],
    speed: 20,
  },
};
