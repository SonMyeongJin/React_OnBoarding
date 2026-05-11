import type { FC } from 'react';

export const status: FC = () => {
  const hp = 100;
  const attack = 50;
  const defense = 30;
  const speed = 20;

  return (
    <div>
      HP: {hp}
      <br />
      Attack: {attack}
      <br />
      Defense: {defense}
      <br />
      Speed: {speed}
    </div>
  );
};
