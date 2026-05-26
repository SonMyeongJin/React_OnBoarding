import { style } from '@vanilla-extract/css';

export const sinkaButton = style({
  background: '#fffef2',
  border: '3px solid #111827',
  borderRadius: '2px',
  boxShadow: '2px 2px 0 #94a3b8',
  color: '#111827',
  cursor: 'pointer',
  display: 'flex',
  font: 'inherit',
  fontSize: '12px',
  fontWeight: 700,
  gridColumn: '1 / -1',
  justifyContent: 'center',
  marginTop: '8px',
  padding: '6px 10px',
  selectors: {
    '&:focus-visible': {
      outline: '2px solid #111827',
      outlineOffset: '2px',
    },
    '&:hover': {
      background: '#eef2d2',
      boxShadow: '1px 1px 0 #94a3b8',
      transform: 'translate(1px, 1px)',
    },
  },
});
