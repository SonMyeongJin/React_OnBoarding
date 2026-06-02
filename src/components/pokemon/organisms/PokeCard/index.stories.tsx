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
    skills: [
      {
        attackType: 'paralysis',
        onClick: action('thunderbolt'),
        pp: 15,
        skillName: 'thunderbolt',
        skillType: 'electric',
      },
      {
        attackType: 'reduceHP',
        onClick: action('thunderbolt'),
        pp: 30,
        skillName: 'tackle',
        skillType: 'normal',
      },
      {
        attackType: 'burn',
        onClick: action('thunderbolt'),
        pp: 20,
        skillName: 'iron tail',
        skillType: 'steel',
      },
      {
        attackType: 'burn',
        onClick: action('thunderbolt'),
        pp: 10,
        skillName: 'volt tackle',
        skillType: 'electric',
      },
    ],
    speed: 20,
  },
};
