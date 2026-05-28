'use client';

import type { ComponentProps, FC } from 'react';
import Skill from '../../atoms/skill';

type SkillsProps = {
  skills: ComponentProps<typeof Skill>[];
};

const Skills: FC<SkillsProps> = (props: SkillsProps) => {
  return props.skills.slice(0, 4).map((index) => {
    return (
      <Skill
        {...index}
        key={index.skillName}
        onClick={index.onClick}
        pp={index.pp}
        skillType={index.skillType}
      />
    );
  });
};

export default Skills;
