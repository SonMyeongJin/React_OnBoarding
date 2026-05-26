import { style } from '@vanilla-extract/css';

export const skillStyle = style({
  background: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  color: '#111827',
  cursor: 'pointer',
  display: 'flex',
  // inherit -> 親属性値から取得する。
  font: 'inherit',
  fontSize: '12px',
  fontWeight: 700,
  justifyContent: 'flex-start',
  letterSpacing: '0.01em',
  margin: 0,
  padding: '4px 4px 4px 14px',
  position: 'relative',
  selectors: {
    // マウスでhoverしたときに矢印のような文字が表示されるようにするには、基本の空白スペースを作る必要がある
    '&::before': {
      content: '""',
      left: '2px',
      opacity: 0,
      position: 'absolute',
    },
    // 「フォーカス」という言葉は、タブキーで移動したときに表示される部分だ
    '&:focus-visible': {
      outline: '2px solid #111827',
      outlineOffset: '2px',
    },
    '&:hover': {
      background: '#eef2d2',
      // hoverで選択したときに文字が下線で囲まれるのを防ぐ役割だ
      textDecoration: 'none',
    },
    '&:hover::before': {
      content: '"▶"',
      opacity: 1,
    },
  },
  textAlign: 'left',
  width: '100%',
});
