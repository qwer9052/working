import { COLORS } from '../css/Color';
import error from '../assets/img/input_error.svg';

const arr = ['SK D&D', '비바리퍼블리카', '마인다스인', '부산은행', '새마을금고', '써모피셔사이언티픽코리아', 'LS전선', '카카오', '카카오뱅크', 'DS솔루션즈'];

const SearchRank = () => {
  return (
    <div style={{ backgroundColor: '#f8f8f8', display: 'flex', flex: 1, padding: '22px 21px 14px', flexDirection: 'column', marginRight: 0, marginLeft: 'auto' }}>
      <div style={{ marginRight: 'auto', marginLeft: 0, marginBottom: 10 }}>
        <p style={{ fontFamily: 'notosans', fontSize: 15 }}>실시간 인기 검색</p>
      </div>

      <div style={{}}>
        {arr.map((item, index) => {
          return (
            <div style={{ display: 'flex', alignItems: 'center', padding: '5px 3px' }}>
              <span style={{ textAlign: 'center', flex: 0.05, fontSize: 15, fontFamily: 'notosans', color: COLORS.black_200 }}>{index + 1}</span>
              <span style={{ textAlign: 'left', flex: 0.85, fontSize: 14, fontFamily: 'notosans reg', paddingLeft: 15 }}>{item}</span>
              <span style={{ textAlign: 'left', flex: 0.1 }}>{1}</span>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 10, display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <img style={{ width: 13, height: 13, marginRight: 3 }} src={error} alt='BigCo Inc. logo' />
        <span style={{ fontSize: 12, color: '#94969b' }}>Workingnet에서 실시간 인기 순위</span>
      </div>
    </div>
  );
};

export default SearchRank;
