import { style } from '@vanilla-extract/css';

export const skillStyle = style({
  background: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  color: '#111827',
  cursor: 'pointer',
  display: 'flex',
  font: 'inherit',
  fontSize: '12px',
  fontWeight: 700,
  justifyContent: 'flex-start',
  letterSpacing: '0.01em',
  margin: 0,
  padding: '4px 4px 4px 14px',
  position: 'relative',
  selectors: {
    '&::before': {
      content: '""',
      left: '2px',
      opacity: 0,
      position: 'absolute',
    },
    '&:focus-visible': {
      outline: '2px solid #111827',
      outlineOffset: '2px',
    },
    '&:hover': {
      background: '#eef2d2',
      textDecoration: 'none',
    },
    '&:hover::before': {
      content: '"▶"',
      opacity: 1,
    },
  },
  textAlign: 'left',
  width: '100%',
});
