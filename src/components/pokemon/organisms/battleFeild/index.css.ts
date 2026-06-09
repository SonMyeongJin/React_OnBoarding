import {keyframes, style} from '@vanilla-extract/css';

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
  position: 'relative',
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

export const battleSkillsStyle = style({
  background: '#f8fafc',
  border: '4px double #111827',
  borderRadius: '2px',
  boxShadow: '0 0 0 2px #e2e8f0 inset',
  boxSizing: 'border-box',
  display: 'grid',
  gap: '6px 10px',
  gridTemplateColumns: '1.45fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  marginTop: '24px',
  minHeight: '92px',
  order: 3,
  padding: '8px',
  selectors: {
    '&::before': {
      alignItems: 'center',
      background: '#fffef2',
      border: '2px solid #111827',
      borderRadius: '2px',
      boxShadow: '2px 2px 0 #94a3b8',
      color: '#1f2937',
      content: '"何をするか?"',
      display: 'flex',
      fontSize: '14px',
      fontWeight: 700,
      gridColumn: '1 / 2',
      gridRow: '1 / 3',
      lineHeight: 1.45,
      padding: '10px 14px',
      whiteSpace: 'pre-line',
    },
  },
  width: '100%',
});

const attackFailedPop = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-50%, -50%) scale(0.8)',
  },
  '15%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1.15)',
  },
  '25%': {
    transform: 'translate(-50%, -50%) scale(1)',
  },
  '80%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    transform: 'translate(-50%, -60%) scale(0.95)',
  },
});

export const attackFailedMessageStyle = style({
  animation: `${attackFailedPop} 3s ease-in-out forwards`,

  background: '#fffef2',
  border: '4px solid #111827',
  boxShadow: '4px 4px 0 #ef4444',
  color: '#dc2626',

  fontSize: '28px',
  fontWeight: 900,
  left: '50%',
  letterSpacing: '2px',

  padding: '14px 28px',

  pointerEvents: 'none',
  position: 'absolute',
  top: '45%',
  zIndex: 20,
});

const paralysisMessagePop = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-50%, -50%) scale(0.85)',
  },
  '12%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1.08)',
  },
  '22%': {
    transform: 'translate(-50%, -50%) scale(1)',
  },
  '75%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'translate(-50%, -62%) scale(0.95)',
  },
});

export const paralysisMessageStyle = style({
  animation: `${paralysisMessagePop} 3s ease-in-out forwards`,

  background: '#f5f3ff',
  border: '4px solid #4c1d95',
  boxShadow: '4px 4px 0 #7c3aed',
  color: '#5b21b6',

  fontSize: '22px',
  fontWeight: 900,
  left: '50%',
  letterSpacing: '1px',
  lineHeight: 1.35,
  minWidth: '360px',

  padding: '14px 24px',

  pointerEvents: 'none',
  position: 'absolute',
  textAlign: 'center',
  top: '45%',
  zIndex: 25,
});
