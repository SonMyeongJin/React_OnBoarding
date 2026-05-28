import { keyframes, style } from '@vanilla-extract/css';

export const pokeCardStyle = style({
  background: '#f8fafc', // grayぽっい
  border: '4px solid #111827',
  borderRadius: '2px',
  boxShadow: '4px 4px 0 #4b5563',
  boxSizing: 'border-box',
  display: 'grid',
  //gridTemplateColumns は各グリッドのサイズを調整できる機能だ
  gridTemplateColumns: '128px 1fr', //
  overflow: 'hidden',
  padding: '12px',
  position: 'relative',
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

const fireFly = keyframes({
  '0%, 100%': {
    transform: 'translateX(0) rotate(0deg)',
  },
  '25%': {
    transform: 'translateX(-8px) rotate(-8deg)',
  },
  '50%': {
    transform: 'translateX(8px) rotate(8deg)',
  },
  '75%': {
    transform: 'translateX(-6px) rotate(-6deg)',
  },
});

const tailShake = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-36px) scale(0.9)',
  },
  '20%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(42px) scale(1.08)',
  },
});

export const fireAnimation = style({
  animation: `${fireFly} 0.6s ease-out forwards`,
  fontSize: '32px',
  left: '50px',
  pointerEvents: 'none',
  position: 'absolute',

  selectors: {
    '&::before': {
      content: '"🔥🔥"',
    },
  },
  top: '72px',
  zIndex: 10,
});

export const tailAnimation = style({
  animation: `${tailShake} 0.6s ease-in-out forwards`,
  color: '#2563eb',
  fontSize: '24px',
  fontWeight: 900,
  left: '36px',
  letterSpacing: '4px',
  pointerEvents: 'none',
  position: 'absolute',
  selectors: {
    '&::before': {
      content: '"▼ ▼ ▼"',
    },
  },
  textShadow: '2px 2px 0 #bfdbfe, 0 0 8px rgba(37, 99, 235, 0.65)',
  top: '24px',
  zIndex: 10,
});
