'use client';

import type { FC } from 'react';

type SkillProps = {
  name: string;
};

export const Skill: FC<SkillProps> = ({ name }) => {
  const PikaSkill1 = 'Thunderbolt';
  const PikaSkill2 = 'Quick Attack';
  const PikaSkill3 = 'Iron Tail';
  const PikaSkill4 = 'Electro Ball';

  const hitokageSkill1 = 'Flamethrower';
  const hitokageSkill2 = 'Scratch';
  const hitokageSkill3 = 'Ember';
  const hitokageSkill4 = 'Fire Spin';

  if (name === 'Pikachu') {
    return (
      <div>
        <h2>Skills</h2>
        skill1: {PikaSkill1}
        <br />
        skill2: {PikaSkill2}
        <br />
        skill3: {PikaSkill3}
        <br />
        skill4: {PikaSkill4}
      </div>
    );
  }
  return (
    <div>
      <h2>Skills</h2>
      skill1: {hitokageSkill1}
      <br />
      skill2: {hitokageSkill2}
      <br />
      skill3: {hitokageSkill3}
      <br />
      skill4: {hitokageSkill4}
    </div>
  );
};
