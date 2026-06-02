import { keyframes, style } from '@vanilla-extract/css';

const burnBlink = keyframes({
  '0%, 100%': {
    background: '#ffedd5',
    color: '#9a3412',
  },
  '50%': {
    background: '#ef4444',
    color: '#fff7ed',
  },
});

const paralysisBlink = keyframes({
  '0%, 100%': {
    background: '#fef3c7',
    color: '#854d0e',
  },
  '50%': {
    background: '#facc15',
    color: '#3f2f00',
  },
});

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

export const conditionStyle = style({
  alignItems: 'center',
  border: '2px solid #111827',
  borderRadius: '999px',
  boxShadow: '2px 2px 0 #94a3b8',
  display: 'inline-flex',
  fontSize: '11px',
  fontWeight: 800,
  justifyContent: 'center',
  letterSpacing: '0.06em',
  lineHeight: 1,
  marginBottom: '8px',
  minHeight: '22px',
  minWidth: '72px',
  padding: '5px 10px',
  textTransform: 'uppercase',
});

export const burnedStyle = style([
  conditionStyle,
  {
    animation: `${burnBlink} 0.9s ease-in-out infinite`,
    borderColor: '#9a3412',
  },
]);

export const paralysisStyle = style([
  conditionStyle,
  {
    animation: `${paralysisBlink} 0.9s ease-in-out infinite`,
    borderColor: '#a16207',
  },
]);
