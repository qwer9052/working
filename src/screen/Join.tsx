import WrapDiv from '../comp/WrapDiv';
import { Dispatch, useEffect, useRef, useState } from 'react';
import StyledInput from '../comp/StyledInput';
import { COLORS } from '../css/Color';
import StyledLink from '../comp/StyledLink';
import Checkbox from '../comp/CheckBox';
import { isValidEmail } from '../util/stringUtil';

const Join = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [autoLogin, setAutoLogin] = useState(false);

  const [signupDisable, setSignupDisable] = useState(true);
  const [errors, setErrors] = useState<any>({ email: null, name: null, pwd: null, pwdConfirm: null });
  const [inputs, setInputs] = useState({ email: '', name: '', pwd: '', pwdConfirm: '' });

  useEffect(() => {
    checkInputs();
  }, [errors]);

  const validEmail = (email: string) => {
    if (!isValidEmail(email)) {
      handleError('이메일을 확인해 주세요', 'email', setErrors);
    } else {
      handleError('', 'email', setErrors);
    }
  };

  const validPwd = (pwd: string) => {
    if (pwd.length < 6) {
      handleError('비밀번호를 입력해 주세요', 'pwd', setErrors);
    } else {
      handleError('', 'pwd', setErrors);
    }
  };

  const validPwdConfirm = (pwdConfirm: string) => {
    if (pwdConfirm.length < 6) {
      handleError('비밀번호 확인을 입력해 주세요', 'pwdConfirm', setErrors);
    } else if (pwdConfirm != inputs.pwd) {
      handleError('비밀번호가 같지 않습니다.', 'pwdConfirm', setErrors);
    } else {
      handleError('', 'pwdConfirm', setErrors);
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

  function handleOnchange(text: any, arg1: string, setInputs: Dispatch<import('react').SetStateAction<{ email: string; name: string; pwd: string; pwdConfirm: string }>>) {
    throw new Error('Function not implemented.');
  }

  return (
    <div style={{ width: windowSize.current[0], height: windowSize.current[1], display: 'flex', justifyContent: 'center', backgroundColor: '#ebecee' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2 style={{ color: COLORS.point, fontFamily: 'logo', fontWeight: 'bold' }}>Workingnet</h2>
        </div>
        <div style={{ backgroundColor: '#fff', width: 360, height: 500, border: 0, borderRadius: 12, boxShadow: 'rgb(30 40 58 / 8%) 4px 7px 14px' }}>
          <div style={{ padding: '28px 32px 0' }}>
            <h3>회원가입</h3>
            <button onClick={() => alert('가입')} style={{ display: 'flex', borderRadius: 10, border: '1px solid #ebefff', width: '100%' }}>
              <img style={{ width: 20, height: 20, margin: 'auto 0px auto 15px' }} src={'assets/google.png'} alt='BigCo Inc. logo' />
              <div style={{ margin: 'auto', height: 48, display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: 0, fontFamily: 'notosans bold', fontSize: 15 }}>Google 계정으로 시작하기</p>
              </div>
            </button>
            <div style={{ height: 1, background: '#E5E6E9', marginTop: 20, marginBottom: 20 }} />
            <StyledInput
              onChange={(text: string) => {
                handleOnchange(text, 'email', setInputs);
                validEmail(text);
              }}
              placeholder='이메일 주소'
              style={{ marginBottom: 10 }}
            />
            <StyledInput
              onChangeText={(text: string) => {
                handleOnchange(text, 'pwd', setInputs);
                validPwd(text);
              }}
              placeholder='비밀번호 (8자리 이상)'
              style={{ marginBottom: 10 }}
            ></StyledInput>
            <StyledInput
              onChangeText={(text: string) => {
                handleOnchange(text, 'pwdConfirm', setInputs);
                validPwdConfirm(text);
              }}
              placeholder='비밀번호 확인 (8자리 이상)'
              style={{ marginBottom: 10 }}
            ></StyledInput>

            <button
              onClick={() => alert('가입')}
              style={{ display: 'flex', borderRadius: 10, border: '1px solid #ebefff', width: '100%', backgroundColor: COLORS.point, color: COLORS.white, marginBottom: 15 }}
            >
              <img style={{ width: 20, height: 20, margin: 'auto 0px auto 15px' }} src={'assets/img_email.svg'} alt='BigCo Inc. logo' />
              <div style={{ margin: 'auto', height: 48, display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: 0, fontFamily: 'notosans bold', fontSize: 15 }}>이메일로 가입하기</p>
              </div>
            </button>
          </div>
          <div style={{ height: 1, background: '#E5E6E9', marginTop: 20, marginBottom: 20 }} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            이미 회원이세요?
            <StyledLink style={{ color: COLORS.point }} to='/login'>
              <b style={{ paddingLeft: 10 }}>로그인</b>
            </StyledLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
function handleError(arg0: string, arg1: string, setErrors: Dispatch<any>) {
  throw new Error('Function not implemented.');
}
