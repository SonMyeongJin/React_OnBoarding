import NaviImg from '../../Atoms/NaviBar/NaviButton/naviImg';
import NaviText from '../../Atoms/NaviBar/NaviButton/naviText';

function Navi_Icon() {
  return (
    <div className="Navi_Icon">
      <NaviImg menu="guide" />
      <NaviText text="guide" />

      <NaviImg menu="mail" />
      <NaviText text="mail" />

      <NaviImg menu="wishList" />
      <NaviText text="wishList" />

      <NaviImg menu="myPage" />
      <NaviText text="myPage" />
    </div>
  );
}

export default Navi_Icon;
