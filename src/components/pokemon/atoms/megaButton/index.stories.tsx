import type { Meta, StoryObj } from '@storybook/react';
import MegaButton from './index';

type Story = StoryObj<typeof MegaButton>;

const meta: Meta<typeof MegaButton> = {
  argTypes: {},
  component: MegaButton,
  parameters: {
    layout: 'centered',
  },
  title: 'Pokemon/atoms/MegaButton',
};

export default meta;

export const Default: Story = {};
