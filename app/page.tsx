import BattleFeild from '../src/components/pokemon/organisms/battleFeild';
import NaviBar from '../src/moreconCopy/Organisms/naviBar';
import Product_Info from '../src/moreconCopy/Organisms/product_Info';
import Review from '../src/moreconCopy/Organisms/review';

function IndexPage() {
  return (
    <div className="App">
      <div>
        <NaviBar />
        <BattleFeild />
        <Product_Info />
        <Review />
      </div>
    </div>
  );
}

IndexPage.displayName = 'IndexPage';
export default IndexPage;
