'use client';

import type { ComponentProps, FC } from 'react';
import Skill from '../../atoms/skill';

type SkillsProps = {
  skills: Pick<ComponentProps<typeof Skill>, 'skillName'>[];
  onClick(): void;
};

const Skills: FC<SkillsProps> = (props) => {
  return props.skills.slice(0, 4).map((x) => {
    return (
      <Skill
        {...x}
        key={x.skillName}
        onClick={props.onClick}
        pp={0}
        skillType=""
      />
    );
  });
};

export default Skills;
