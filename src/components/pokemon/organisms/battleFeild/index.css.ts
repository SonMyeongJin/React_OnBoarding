import { style } from '@vanilla-extract/css';

export const battleField = style({
  background:
    'linear-gradient(180deg, #dff3b4 0%, #c8e69a 52%, #a8d17b 52%, #91c56d 100%)',
  border: '6px solid #1f2933',
  boxShadow: '0 0 0 4px #f8fafc inset, 8px 8px 0 #94a3b8',
  boxSizing: 'border-box',
  color: '#172033',
  display: 'flex',
  flexDirection: 'column',
  fontFamily:
    '"Courier New", "MS Gothic", "Hiragino Kaku Gothic ProN", monospace',
  imageRendering: 'pixelated',
  justifyContent: 'space-between',
  margin: '24px auto',
  minHeight: '540px',
  padding: '28px 36px',
  width: '760px',
});

export const playerStyle = style({
  alignSelf: 'flex-start',
  display: 'flex',
  justifyContent: 'flex-start',
  order: 2,
});

export const enemyStyle = style({
  alignSelf: 'flex-end',
  display: 'flex',
  justifyContent: 'flex-end',
  order: 1,
});
