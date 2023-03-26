import WrapDiv from '../comp/WrapDiv';
import { useRef, useState } from 'react';
import StyledInput from '../comp/StyledInput';
import { COLORS } from '../css/Color';
import StyledLink from '../comp/StyledLink';
import Checkbox from '../comp/CheckBox';

const Login = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [autoLogin, setAutoLogin] = useState(false);

  return (
    <div style={{ width: windowSize.current[0], height: windowSize.current[1], display: 'flex', justifyContent: 'center', backgroundColor: '#ebecee' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2 style={{ color: COLORS.point, fontFamily: 'logo', fontWeight: 'bold' }}>Workingnet</h2>
        </div>
        <div style={{ backgroundColor: '#fff', width: 360, height: 480, border: 0, borderRadius: 12, boxShadow: 'rgb(30 40 58 / 8%) 4px 7px 14px' }}>
          <div style={{ padding: '28px 32px 0' }}>
            <h3>로그인</h3>
            <button onClick={() => alert('가입')} style={{ display: 'flex', borderRadius: 10, border: '1px solid #ebefff', width: '100%' }}>
              <img style={{ width: 20, height: 20, margin: 'auto 0px auto 15px' }} src={'assets/google.png'} alt='BigCo Inc. logo' />
              <div style={{ margin: 'auto', height: 48, display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: 0 }}>Google 계정으로 로그인</p>
              </div>
            </button>
            <div style={{ height: 1, background: '#E5E6E9', marginTop: 20, marginBottom: 20 }} />
            <StyledInput placeholder='이메일 주소' style={{ marginBottom: 10 }} />
            <StyledInput placeholder='비밀번호 (8자리 이상)' style={{ marginBottom: 10 }}></StyledInput>

            <button
              onClick={() => alert('가입')}
              style={{ display: 'flex', borderRadius: 10, border: '1px solid #ebefff', width: '100%', backgroundColor: COLORS.point, color: COLORS.white, marginBottom: 15 }}
            >
              <img style={{ width: 20, height: 20, margin: 'auto 0px auto 15px' }} src={'assets/img_email.svg'} alt='BigCo Inc. logo' />
              <div style={{ margin: 'auto', height: 48, display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: 0 }}>이메일로 로그인</p>
              </div>
            </button>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Checkbox disabled={false} children={<span style={{ margin: 0, fontSize: 15, paddingLeft: 5 }}>로그인 상태 유지</span>} checked={autoLogin} onChange={setAutoLogin} />
              <div>
                <StyledLink style={{ fontSize: 15, color: COLORS.black_800 }}>비밀번호 찾기</StyledLink>
              </div>
            </div>
          </div>
          <div style={{ height: 1, background: '#E5E6E9', marginTop: 20, marginBottom: 20 }} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            아직 회원이 아니세요?
            <StyledLink style={{ color: COLORS.point }} to='/join'>
              <b style={{ paddingLeft: 10 }}>회원가입</b>
            </StyledLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
