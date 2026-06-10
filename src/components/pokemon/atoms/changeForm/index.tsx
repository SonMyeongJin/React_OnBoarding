import type { FC } from 'react';

type changeFormProps = {
  onClick: () => void;
};

const ChangeForm: FC<changeFormProps> = () => {
  return (
    <form>
      <input name="pokeName" />
      <button type="submit">변경하기</button>
    </form>
  );
};

export default ChangeForm;
