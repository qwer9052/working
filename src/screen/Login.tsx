import WrapDiv from '../comp/WrapDiv';
import { useEffect, useRef, useState } from 'react';
import StyledInput from '../comp/StyledInput';
import { COLORS } from '../css/Color';
import StyledLink from '../comp/StyledLink';
import Checkbox from '../comp/CheckBox';
import google from '../assets/img/google.png';
import imgEmail from '../assets/img/img_email.svg';
import { axiosInstance } from '../util/axiosPlugin';
import { Token } from '../type/token';
import { writeToStorage } from '../util/asyncStorage';
import { useNavigate } from 'react-router-dom';
import { handleError, handleOnChange } from '../util/common';
import GoogleLoginButton from '../comp/GoogleOAuthProvider';
import { isValidEmail } from '../util/stringUtil';

const Login = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [autoLogin, setAutoLogin] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({ email: null, pwd: null });
  const [inputs, setInputs] = useState({ email: '', pwd: '' });
  const [signupDisable, setSignupDisable] = useState(true);

  useEffect(() => {
    checkInputs();
  }, [errors]);

  const submit = () => {
    console.log(inputs);
    axiosInstance
      .post('/user/login', {
        email: inputs.email,
        pwd: inputs.pwd,
      })
      .then((res) => {
        console.log(res.data);
        const { accessToken, refreshToken } = res.data;
        const token: Token = {
          accessToken: accessToken,
          refreshToken: refreshToken,
        };
        writeToStorage('token', JSON.stringify(token));
        alert('로그인 성공');
        navigate('/');
      })
      .catch((err) => {
        alert('오류');
        console.log(err);
      });
  };

  const validEmail = (email: string) => {
    if (!isValidEmail(email)) {
      handleError('이메일을 확인해 주세요', 'email', setErrors);
    } else {
      handleError('', 'email', setErrors);
    }
  };

  const validPwd = (pwd: string) => {
    if (pwd.length < 8) {
      handleError('비밀번호를 입력해 주세요', 'pwd', setErrors);
    } else {
      handleError('', 'pwd', setErrors);
    }
  };

  const checkInputs = () => {
    setTimeout(() => {
      let disable = false;
      Object.values(errors).forEach((e: any) => {
        if (e == null) {
          disable = true;
        } else if (e.length > 0) {
          disable = true;
        }
      });
      setSignupDisable(disable);
    }, 100);
  };

  return (
    <div style={{ width: windowSize.current[0], height: windowSize.current[1], display: 'flex', justifyContent: 'center', backgroundColor: '#ebecee' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2 style={{ color: COLORS.point, fontFamily: 'logo', fontWeight: 'bold' }}>
            <StyledLink style={{ color: COLORS.point }} to={'/'}>
              Workingnet
            </StyledLink>
          </h2>
        </div>
        <div style={{ backgroundColor: '#fff', width: 360, height: 480, border: 0, borderRadius: 12, boxShadow: 'rgb(30 40 58 / 8%) 4px 7px 14px' }}>
          <div style={{ padding: '28px 32px 0' }}>
            <h3>로그인</h3>
            <GoogleLoginButton />
            {/* <button onClick={() => alert('가입')} style={{ display: 'flex', borderRadius: 10, border: '1px solid #ebefff', width: '100%' }}>
              <img style={{ width: 20, height: 20, margin: 'auto 0px auto 15px' }} src={google} alt='BigCo Inc. logo' />
              <div style={{ margin: 'auto', height: 48, display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: 0 }}>Google 계정으로 로그인</p>
              </div>
            </button> */}
            <div style={{ height: 1, background: '#E5E6E9', marginTop: 20, marginBottom: 20 }} />

            <StyledInput
              onChange={(e: any) => {
                handleOnChange(e.target.value, 'email', setInputs);
                validEmail(e.target.value);
              }}
              type='email'
              placeholder='이메일 주소'
              style={{ marginBottom: 10 }}
            />
            <p style={{ color: COLORS.error, fontSize: 13, paddingLeft: 10, marginBottom: 10 }}>{errors.email}</p>
            <StyledInput
              onChange={(e: any) => {
                handleOnChange(e.target.value, 'pwd', setInputs);
                validPwd(e.target.value);
              }}
              type='password'
              placeholder='비밀번호 (8자리 이상)'
              style={{ marginBottom: 10 }}
            ></StyledInput>
            <p style={{ color: COLORS.error, fontSize: 13, paddingLeft: 10, marginBottom: 10 }}>{errors.pwd}</p>
            <button
              disabled={signupDisable}
              onClick={submit}
              style={{
                display: 'flex',
                borderRadius: 10,
                border: '1px solid #ebefff',
                width: '100%',
                backgroundColor: signupDisable ? COLORS.black_200 : COLORS.point,
                color: COLORS.white,
                marginBottom: 15,
              }}
            >
              <img style={{ width: 20, height: 20, margin: 'auto 0px auto 15px' }} src={imgEmail} alt='BigCo Inc. logo' />
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
