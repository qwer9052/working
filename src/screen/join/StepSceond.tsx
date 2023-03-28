import { ChangeEvent, useEffect, useState } from 'react';
import { CheckboxLeft } from '../../comp/CheckBox';
import StyledCheckBox from '../../comp/StyledCheckBox';
import Term1 from '../../comp/term/Term1';
import { COLORS } from '../../css/Color';

const StepSceond = () => {
  const [next, setNext] = useState(false);

  const [checkList, setCheckList] = useState<string[]>([]);

  const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setCheckList(['terms', 'collect', 'another', 'entrust', 'marketing']) : setCheckList([]);
  };

  const check = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setCheckList([...checkList, e.target.name]) : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };

  useEffect(() => {
    if (checkList.includes('terms') && checkList.includes('collect')) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [checkList]);

  return (
    <div style={{ width: 600, backgroundColor: '#fff', padding: '10px 43px 39px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}></div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '18px 0px' }}>
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>전체동의 </span>
        <StyledCheckBox id='all' onChange={checkAll} checked={checkList.length === 5 ? true : false} />
      </div>

      <div style={{ height: 1, background: '#E5E6E9', marginTop: 15, marginBottom: 15 }} />

      <div>
        <div style={{ margin: '34px 0px 9px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <b>개인정보 회원 이용약관 동의</b> <span style={{ fontSize: 14, fontWeight: 'normal', color: COLORS.point }}> (필수)</span>
          </div>
          <StyledCheckBox id='terms' onChange={check} checked={checkList.includes('terms') ? true : false} />
        </div>

        <Term1 />

        <div style={{ margin: '34px 0px 30px' }}>
          <b>개인정보 수집 및 이용</b>
        </div>

        <div style={{ display: 'flex', marginBottom: 9, alignItems: 'center', justifyContent: 'space-between' }}>
          <span>
            <span style={{ fontSize: 15 }}>필수적 개인정보 수집 및 이용 동의</span>
            <span style={{ fontSize: 14, fontWeight: 'normal', color: COLORS.point }}> (필수)</span>
          </span>
          <StyledCheckBox id='collect' onChange={check} checked={checkList.includes('collect') ? true : false} />
        </div>

        <div style={{ display: 'flex', marginBottom: 9, alignItems: 'center', justifyContent: 'space-between' }}>
          <span>
            <span style={{ fontSize: 15 }}>선택적 개인정보 수집 및 이용 동의</span>
            <span style={{ fontSize: 14, fontWeight: 'normal', color: COLORS.black_300 }}> (선택)</span>
          </span>
          <StyledCheckBox id='another' onChange={check} checked={checkList.includes('another') ? true : false} />
        </div>

        <div style={{ marginBottom: 9 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <b>인기 채용, 이벤트 등 마케팅 정보 수신</b>
              <span style={{ fontSize: 14, fontWeight: 'normal', color: COLORS.black_300 }}> (선택)</span>
            </div>

            <StyledCheckBox id='marketing' onChange={check} checked={checkList.includes('marketing') ? true : false} />
          </div>
          <span style={{ fontSize: 15 }}>추천하는 맞춤 채용 공고 및 이벤트, 혜택 정보를 받아보세요.</span>
        </div>

        <div style={{ marginBottom: 9 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <b>트렌드 뉴스레터 구독</b>
              <span style={{ fontSize: 14, fontWeight: 'normal', color: COLORS.black_300 }}> (선택)</span>
            </div>
            <StyledCheckBox id='entrust' onChange={check} checked={checkList.includes('entrust') ? true : false} />
          </div>
          <span style={{ fontSize: 15 }}>기업 및 직무 관련 최신 트렌드 및 뉴스를 받아보세요.</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', color: COLORS.error, fontSize: 13, fontWeight: 'bold', margin: '40px 0px 20px' }}>
          <p>이용약관과 개인정보 수집 및 이용(필수)에 대한 안내 모두 동의해주세요.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
          <button
            onChange={() => alert('#4')}
            disabled={next}
            style={{ width: 250, height: 44, border: 0, backgroundColor: next ? COLORS.point : COLORS.black_200, color: COLORS.white, fontWeight: 'bold', borderRadius: 7 }}
          >
            회원가입 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepSceond;
