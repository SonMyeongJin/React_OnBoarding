'use client';

import type { FC } from 'react';
import type { AttackType } from '../../entities/pokemon/model/type';
import { skillStyle } from './index.css';

type SkillProps = {
  skillName: string;
  skillType: string;
  pp: number;
  attackType: AttackType;
  onClick: (attackType: AttackType) => void;
};

const Skill: FC<SkillProps> = (props: SkillProps) => {
  return (
    <button
      className={skillStyle}
      onClick={() => props.onClick(props.attackType)}
      type="button"
    >
      {props.skillType} : {props.skillName} / {props.pp}
    </button>
  );
};

export default Skill;
