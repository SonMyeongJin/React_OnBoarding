import { keyframes, style } from '@vanilla-extract/css';

const floatUpDown = keyframes({
  '0%, 100%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-8px)',
  },
});

const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const pokemonImage = style({
  animation: `${floatUpDown} 1.6s ease-in-out infinite`,
  display: 'flex',
});

export const dead = style({
  animation: `${fadeOut} 2s ease-out forwards`,
  display: 'flex',
  rotate: '90deg',
});
