import { style } from '@vanilla-extract/css';

export const pokeCardStyle = style({
  background: '#f8fafc', // grayぽっい
  border: '4px solid #111827',
  borderRadius: '2px',
  boxShadow: '4px 4px 0 #4b5563',
  boxSizing: 'border-box',
  display: 'grid',
  //gridTemplateColumns は各グリッドのサイズを調整できる機能だ
  gridTemplateColumns: '128px 1fr', //
  padding: '12px',
  width: '320px',
});

export const skillsStyle = style({
  background: '#f8fafc',
  border: '4px double #111827',
  borderRadius: '2px',
  boxShadow: '0 0 0 2px #e2e8f0 inset',
  display: 'grid',
  // 前に2pxが行間、後ろに10pxが列間の間隔
  gap: '2px 10px',
  gridColumn: '1 / -1',
  gridTemplateColumns: '1fr 1fr',
  padding: '8px 10px',
});
