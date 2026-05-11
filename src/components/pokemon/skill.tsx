'use client';

import type { FC } from 'react';

export const Skill: FC = () => {
  const skill1 = 'Thunderbolt';
  const skill2 = 'Quick Attack';
  const skill3 = 'Iron Tail';
  const skill4 = 'Electro Ball';

  return (
    <div>
      <h2>Skills</h2>
      skill1: {skill1}
      <br />
      skill2: {skill2}
      <br />
      skill3: {skill3}
      <br />
      skill4: {skill4}
    </div>
  );
};
