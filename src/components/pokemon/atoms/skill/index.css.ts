import { style } from '@vanilla-extract/css';

export const skillStyle = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  font: 'inherit',
  margin: 0,
  padding: 4,
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});
