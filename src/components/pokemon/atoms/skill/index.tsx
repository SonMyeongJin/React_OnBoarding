'use client';

import type { FC } from 'react';
import { skill } from './index.css';

type skillProps = {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
};

const Skill: FC<skillProps> = ({ skill1, skill2, skill3, skill4 }) => {
  return (
    <div>
      <h2>Skills</h2>

      <div className={skill}>skill1: {skill1}</div>

      <div className={skill}>skill2: {skill2}</div>

      <div className={skill}>skill3: {skill3}</div>

      <div className={skill}>skill4: {skill4}</div>
    </div>
  );
};

export default Skill;
