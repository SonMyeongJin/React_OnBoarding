import type { FC } from 'react';
import { sinkaButton } from './index.css';

type MegaButtonProps = {
  onClick: () => void;
};

const MegaButton: FC<MegaButtonProps> = ({ onClick }) => {
  return (
    <button className={sinkaButton} onClick={onClick} type="button">
      メガシンカ
    </button>
  );
};

export default MegaButton;
