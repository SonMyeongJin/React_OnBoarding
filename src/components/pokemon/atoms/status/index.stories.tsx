import type {Meta, StoryObj} from '@storybook/react';
import Status from './index';

type Story = StoryObj<typeof Status>;

const meta: Meta<typeof Status> = {
    argTypes: {
        pokeIndex: {
            control: 'number',
            description: '포켓몬의 인덱스 번호입니다. 예를 들어, 피카츄는 25번, 파이리는 4번입니다.',
        },
    },
    component: Status,
    parameters: {
        layout: 'centered',
    },
    title: 'Pokemon/atoms/Status',
};

export default meta;

export const Default: Story = {
    args: {
        pokeIndex: 25,
    },
};