type NaviImgProps = {
  menu: 'guide' | 'mail' | 'wishList' | 'myPage';
};

// src/morecon_img_file/guide_on.png
// src/morecon_img_file/guide_off.svg
// src/morecon_img_file/mail_on.png
// src/morecon_img_file/mail_off.svg
// src/morecon_img_file/fav_on.png
// src/morecon_img_file/fav_off.svg
// src/morecon_img_file/mypage_on.png
// src/morecon_img_file/mypage_off.svg

function NaviImg({ menu }: NaviImgProps) {
  const guideImg = '/morecon_img_file/guide_on.png';
  const mailImg = '/morecon_img_file/mail_on.png';
  const wishListImg = '/morecon_img_file/fav_on.png';
  const myPageImg = '/morecon_img_file/mypage_on.png';

  if (menu === 'guide') {
    return <img alt="guide" src={guideImg} />;
  }
  if (menu === 'mail') {
    return <img alt="mail" src={mailImg} />;
  }
  if (menu === 'wishList') {
    return <img alt="wishList" src={wishListImg} />;
  }
  if (menu === 'myPage') {
    return <img alt="myPage" src={myPageImg} />;
  }
  return null;
}

export default NaviImg;
