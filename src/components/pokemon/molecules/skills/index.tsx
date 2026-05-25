'use client';

import type { ComponentProps, FC } from 'react';
import Skill from '../../atoms/skill';

type SkillsProps = {
  // Omit <Component, "a" >  -> aを　捨てて　残るComponentPropsを取る意味。
  skills: Omit<ComponentProps<typeof Skill>, 'onClick'>[];
  onClick(): void;
};

const Skills: FC<SkillsProps> = (props) => {
  return props.skills.slice(0, 4).map((x) => {
    return (
      <Skill
        {...x}
        key={x.skillName}
        // ここは　skill　の　onClick　ではなく、上の　SkillsProps　の　onClick　だ。
        onClick={props.onClick}
        pp={x.pp}
        skillType={x.skillType}
      />
    );
  });
};

export default Skills;
