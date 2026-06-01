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
  // font の　太さ
  fontWeight: 700,
  // 2つのグリッド間の空間
  gridColumn: '1 / -1',
  justifyContent: 'center',
  marginTop: '8px',
  padding: '6px 10px',
  selectors: {
    '&:hover': {
      background: '#eef2d2',
      boxShadow: '1px 1px 0 #94a3b8',
      // 常に基準点は左上
      transform: 'translate(1px, 1px)',
    },
  },
});
