'use client';

import type { FC } from 'react';
import { skill } from './index.css';

type skillProps = {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  onClick: () => void;
};

const Skill: FC<skillProps> = ({ skill1, skill2, skill3, skill4, onClick }) => {
  return (
    <div>
      <button className={skill} onClick={onClick} type="button">
        skill1: {skill1}
      </button>

      <button className={skill} onClick={onClick} type="button">
        skill2: {skill2}
      </button>

      <button className={skill} onClick={onClick} type="button">
        skill3: {skill3}
      </button>

      <button className={skill} onClick={onClick} type="button">
        skill4: {skill4}
      </button>
    </div>
  );
};

export default Skill;
