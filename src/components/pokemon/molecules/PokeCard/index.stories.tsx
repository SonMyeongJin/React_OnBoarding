import type { Meta, StoryObj } from '@storybook/react';
import PokeCard from './index';

type Story = StoryObj<typeof PokeCard>;

const meta: Meta<typeof PokeCard> = {
  argTypes: {},
  component: PokeCard,
  parameters: {
    layout: 'centered',
  },
  title: 'Pokemon/PokeCard',
};

export default meta;

export const Default: Story = {
  args: {},
};
