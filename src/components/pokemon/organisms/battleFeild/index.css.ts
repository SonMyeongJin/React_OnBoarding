import { style } from '@vanilla-extract/css';

export const battleField = style({
  display: 'flex',
});

export const playerStyle = style({
  display: 'flex',
  justifyContent: 'flex-start',
});

export const enemyStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
});
