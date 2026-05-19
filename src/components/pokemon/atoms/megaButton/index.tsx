import { useState } from 'react';

function MegaButton() {
  const [_isMegaSinka, setMegaSinka] = useState(false);

  function changeMegaSinka() {
    setMegaSinka((prev) => !prev);
  }

  return (
    <button className="mega-button" onClick={changeMegaSinka} type="button">
      メガシンカ
    </button>
  );
}

export default MegaButton;
