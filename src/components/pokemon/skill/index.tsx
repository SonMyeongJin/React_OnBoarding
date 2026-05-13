'use client';

type ImageProps = {
  name: string;
};

function Skill({ name }: ImageProps) {
  const pikaSkill1 = 'Thunderbolt';
  const pikaSkill2 = 'Quick Attack';
  const pikaSkill3 = 'Iron Tail';
  const pikaSkill4 = 'Electro Ball';

  const hitokageSkill1 = 'Flamethrower';
  const hitokageSkill2 = 'Scratch';
  const hitokageSkill3 = 'Ember';
  const hitokageSkill4 = 'Fire Spin';

  if (name === 'Pikachu') {
    return (
      <div>
        <h2>Skills</h2>
        skill1: {pikaSkill1}
        <br />
        skill2: {pikaSkill2}
        <br />
        skill3: {pikaSkill3}
        <br />
        skill4: {pikaSkill4}
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
}

export default Skill;
