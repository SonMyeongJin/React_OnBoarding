import type {Meta, StoryObj} from '@storybook/react';
import Image from './index_';

type Story = StoryObj<typeof Image>;

const meta: Meta<typeof Image> = {
    argTypes: {
        isPika: {
            control: 'boolean',
            description: 'true면 피카츄, false면 파이리',
        },
    },
    component: Image,
    parameters: {
        layout: 'centered',
    },
    title: 'Pokemon/atoms/Image',
};

export default meta;
export const Pikachu: Story = {
    args: {
        isPika: true,
    },
};
export const Hitokage: Story = {
    args: {
        isPika: false,
    },
};
