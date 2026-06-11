import type { FC } from 'react';
import { buttonStyle } from './index.css';

type changeButtonProps = {
  onClick: () => void;
};

const ChangeButton: FC<changeButtonProps> = ({ onClick }) => {
  return (
    <button className={buttonStyle} onClick={onClick} type="button">
      ポケモン　
      <br />
      交代する
    </button>
  );
};

export default ChangeButton;
