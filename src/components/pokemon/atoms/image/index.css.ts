import { keyframes, style } from '@vanilla-extract/css';

const floatUpDown = keyframes({
  '0%, 100%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-8px)',
  },
});

export const pokemonImage = style({
  animation: `${floatUpDown} 1.6s ease-in-out infinite`,
  display: 'flex',
});
