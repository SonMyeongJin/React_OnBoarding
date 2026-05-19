'use client';

type skillProps = {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
};

function Skill({ skill1, skill2, skill3, skill4 }: skillProps) {
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
}

export default Skill;
