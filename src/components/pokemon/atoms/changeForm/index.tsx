import type { FC } from 'react';

type ChangeFormProps = {
  onClick: (name: string) => void;
};

const ChangeForm: FC<ChangeFormProps> = ({ onClick }) => {
  function changePokemon(formData: FormData) {
    const pokeName = formData.get('pokeName');

    if (typeof pokeName !== 'string') {
      return;
    }

    if (pokeName.trim() === '') {
      return;
    }

    onClick(pokeName.trim());
  }

  return (
    <form action={changePokemon}>
      <input name="pokeName" />
      <button type="submit">交代する</button>
    </form>
  );
};

export default ChangeForm;
