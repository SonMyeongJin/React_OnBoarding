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
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', // normal
    isSkillsActive: true,
    pokeName: 'pikacnu',
    speed: 20,
  },
};
