import { keyframes, style } from '@vanilla-extract/css';

const floatUpDown = keyframes({
  '0%, 100%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-4px)',
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
  animation: `${floatUpDown} 1.8s steps(2, end) infinite`,
  background:
    'radial-gradient(ellipse at center, rgba(71, 85, 105, 0.25) 0 38%, transparent 39%)',
  display: 'grid',
  minHeight: '112px',
  placeItems: 'center',
  selectors: {
    '& img': {
      filter: 'drop-shadow(3px 3px 0 rgba(15, 23, 42, 0.28))',
      height: '112px',
      imageRendering: 'pixelated',
      width: '112px',
    },
  },
});

export const dead = style({
  animation: `${fadeOut} 2s ease-out forwards`,
  display: 'grid',
  minHeight: '112px',
  placeItems: 'center',
  rotate: '90deg',
  selectors: {
    '& img': {
      filter: 'grayscale(1)',
      height: '112px',
      imageRendering: 'pixelated',
      width: '112px',
    },
  },
});
