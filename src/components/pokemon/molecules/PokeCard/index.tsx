import type { ComponentProps } from 'react';
import Profile from '../../atoms/image';
import Skill from '../../atoms/skill';
import Status from '../../atoms/status';

type Props = {
  isPika: ComponentProps<typeof Profile>['isPika'];
  skill: ComponentProps<typeof Skill>['name'];
};

function PokeCard({ isPika }: Props, { skill }: Props) {
  return (
    <div className="hito-card">
      <Profile isPika={isPika} />
      <Status />
      <Skill name={skill} />
    </div>
  );
}

export default PokeCard;

// <Profile isPika={false}/>
// <Status/>
// <Skill name="Hitokage"/>
