type MegaButtonProps = {
  changeMegaSinka: () => void;
};

function MegaButton({ changeMegaSinka }: MegaButtonProps) {
  return (
    <button className="mega-button" onClick={changeMegaSinka} type="button">
      メガシンカ
    </button>
  );
}

export default MegaButton;
