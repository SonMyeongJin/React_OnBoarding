import type { Meta, StoryObj } from '@storybook/react';
import Image from './index';

type Story = StoryObj<typeof Image>;

const meta: Meta<typeof Image> = {
  component: Image,
};

export default meta;
export const Pikachu: Story = {
  args: {
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    pokeName: 'Pikachu',
  },
};
export const Hitokage: Story = {
  args: {
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    pokeName: 'Hitokage',
  },
};
