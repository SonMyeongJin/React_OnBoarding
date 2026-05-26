import { style } from '@vanilla-extract/css';

export const status = style({
  alignSelf: 'center',
  background: '#fffef2',
  border: '3px solid #111827',
  borderRadius: '2px',
  boxShadow: '2px 2px 0 #94a3b8',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.02em',
  lineHeight: 1.55,
  minWidth: '132px',
  padding: '8px 10px',
});

export const hpBar = style({
  border: '3px solid #111827',
  borderRadius: '999px',
  boxShadow: '0 0 0 2px #fffef2, 2px 2px 0 #94a3b8',
  height: '8px',
  margin: '6px 0 8px',
  transition: 'width 0.2s ease',
});
