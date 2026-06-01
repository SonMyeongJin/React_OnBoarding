import { style } from '@vanilla-extract/css';

export const battleField = style({
  background: 'linear-gradient(180deg, #dff3b4 0%, #c8e69a 52%, #a8d17b 52%, #91c56d 100%)',
  border: '6px solid #1f2933',
  boxShadow: '0 0 0 4px #f8fafc inset, 8px 8px 0 #94a3b8',
  boxSizing: 'border-box',
  color: '#172033',
  display: 'flex',
  // アイテムを配置する際は、上下方向に配置するという意味だ
  flexDirection: 'column',
  fontFamily: '"Courier New", "MS Gothic", "Hiragino Kaku Gothic ProN", monospace',
  imageRendering: 'pixelated',
  justifyContent: 'space-between',
  margin: '24px auto',
  minHeight: '540px',
  padding: '28px 36px',
  width: '760px',
});

export const playerStyle = style({
  display: 'flex',
  // 一番左に位置
  justifyContent: 'flex-start',
  // 上からflex性で上下に配置されるとき 1番目から上から下へ配置される
  order: 2,
});

export const enemyStyle = style({
  display: 'flex',
  // 一番右に位置
  justifyContent: 'flex-end',
  order: 1,
});
