import { defineMain } from '@storybook/nextjs-vite/node';

const mainConfig = defineMain({
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: [
    // src/morecon_img_file/*  ->  http://localhost:6006/morecon_img_file/*
    { from: '../src/morecon_img_file', to: '/morecon_img_file' },
  ],
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
});
export default mainConfig;
