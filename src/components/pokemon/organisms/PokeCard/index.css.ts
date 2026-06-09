import {keyframes, style} from '@vanilla-extract/css';

const borderTwinkleStrong = keyframes({
  '0%, 100%': {
    boxShadow: '4px 4px 0 #4b5563, 0 0 0 0 rgba(59, 130, 246, 0)',
  },
  '50%': {
    boxShadow: '4px 4px 0 #4b5563, 0 0 0 4px rgba(59, 130, 246, 0.95), 0 0 40px 10px rgba(59, 130, 246, 0.75)',
  },
});
export const noPokeCardStyle = style({
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
export const pokeCardStyle = style({
  animation: `${borderTwinkleStrong} 0.9s linear infinite`,
  background: '#f8fafc',
  border: '4px solid #111827',
  borderRadius: '2px',
  boxShadow: '4px 4px 0 #4b5563',
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateColumns: '128px 1fr',
  overflow: 'hidden',
  padding: '12px',
  position: 'relative',
  width: '320px',
  willChange: 'box-shadow, filter',
});

const fireFly = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateX(0) rotate(0deg)',
  },
  '25%': { transform: 'translateX(-8px) rotate(-8deg)' },
  '50%': { transform: 'translateX(8px) rotate(8deg)' },
  '75%': { transform: 'translateX(-6px) rotate(-6deg)' },
  '100%': {
    opacity: 0,
    transform: 'translateX(0) rotate(0deg)',
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
const burnedPulse = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(12px) scale(0.8) rotate(-6deg)',
  },
  '20%': {
    opacity: 1,
    transform: 'translateY(0) scale(1.08) rotate(4deg)',
  },
  '50%': {
    opacity: 1,
    transform: 'translateY(-8px) scale(1) rotate(-4deg)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-22px) scale(1.2) rotate(8deg)',
  },
});
const paralysisShock = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(0) scale(0.9)',
  },
  '15%': {
    opacity: 1,
    transform: 'translateX(-6px) scale(1.08)',
  },
  '30%': {
    transform: 'translateX(6px) scale(1)',
  },
  '45%': {
    transform: 'translateX(-5px) scale(1.08)',
  },
  '60%': {
    opacity: 1,
    transform: 'translateX(5px) scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateX(0) scale(1.18)',
  },
});

export const fireAnimation = style({
  animation: `${fireFly} 1s ease-out forwards`,
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
export const burnedAnimation = style({
  animation: `${burnedPulse} 0.6s ease-out forwards`,
  color: '#ea580c',
  fontSize: '34px',
  left: '40px',
  pointerEvents: 'none',
  position: 'absolute',
  selectors: {
    '&::before': {
      content: '"🔥 BURN"',
    },
  },
  textShadow: '2px 2px 0 #fed7aa, 0 0 12px rgba(249, 115, 22, 0.75)',
  top: '52px',
  zIndex: 10,
});
export const paralysisAnimation = style({
  animation: `${paralysisShock} 0.6s ease-in-out forwards`,
  color: '#ca8a04',
  fontSize: '32px',
  fontWeight: 900,
  left: '30px',
  letterSpacing: '2px',
  pointerEvents: 'none',
  position: 'absolute',
  selectors: {
    '&::before': {
      content: '"⚡ PARA"',
    },
  },
  textShadow: '2px 2px 0 #fef08a, 0 0 12px rgba(234, 179, 8, 0.85)',
  top: '50px',
  zIndex: 10,
});
