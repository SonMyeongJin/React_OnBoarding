import type { FC } from 'react';

type changeFormProps = {
  onClick: () => void;
};

const ChangeForm: FC<changeFormProps> = () => {
  return (
    <form>
      <input name="pokeName" />
      <button type="submit">交代する</button>
    </form>
  );
};

export default ChangeForm;
