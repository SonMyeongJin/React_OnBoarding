import { style } from '@vanilla-extract/css';

export const status = style({
  border: '1px solid black',
  borderRadius: '5px',
  display: 'flex',
  margin: '10px',
  padding: '10px',
});

export const hpBar = style({
  border: '1px solid #cbd5e1',
  height: '6px',
  transition: 'width 0.2s ease',
});
