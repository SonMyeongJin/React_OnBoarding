import { style } from '@vanilla-extract/css';

export const status = style({
  display: 'flex',
  padding: '10px',
});

export const hpBar = style({
  border: '2px solid #cbd5e1',
  height: '6px',
  transition: 'width 0.2s ease',
});
