import type {Meta, StoryObj} from '@storybook/react';
import Status from './index';

type Story = StoryObj<typeof Status>;

const meta: Meta<typeof Status> = {
  component: Status,
};

export default meta;

export const Default: Story = {
  args: {
    attack: 50,
    condition: null,
    defense: 30,
    hp: 100,
    speed: 20,
  },
};

export const Death: Story = {
  args: {
    attack: 50,
    condition: null,
    defense: 30,
    hp: 0,
    speed: 20,
  },
};

export const paralysis: Story = {
  args: {
    attack: 50,
    condition: 'Paralysis',
    defense: 30,
    hp: 0,
    speed: 20,
  },
};

export const burned: Story = {
  args: {
    attack: 50,
    condition: 'Burned',
    defense: 30,
    hp: 0,
    speed: 20,
  },
};
