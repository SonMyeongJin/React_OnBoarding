'use client';

import type { FC } from 'react';
import { skillStyle } from './index.css';

type SkillProps = {
  skillName: string;
  skillType: string;
  pp: number;
  onClick: () => void;
};

const Skill: FC<SkillProps> = (props) => {
  return (
    <button className={skillStyle} onClick={props.onClick} type="button">
      {props.skillType} : {props.skillName} / {props.pp}
    </button>
  );
};

export default Skill;
