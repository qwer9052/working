import WrapDiv from '../comp/WrapDiv';
import { Dispatch, useEffect, useRef, useState } from 'react';
import StyledInput from '../comp/StyledInput';
import { COLORS } from '../css/Color';
import StyledLink from '../comp/StyledLink';
import Checkbox, { CheckboxLeft } from '../comp/CheckBox';
import { emailValidation, isValidEmail } from '../util/stringUtil';
import { handleError, handleOnChange } from '../util/common';
import { axiosInstance } from '../util/axiosPlugin';
import { writeToStorage } from '../util/asyncStorage';
import { Token } from '../type/token';
import TestCompo from '../comp/StyledCheckBox';
import StepSceond from './join/StepSceond';
import google from '../assets/img/google.png';
import imgEmail from '../assets/img/img_email.svg';
import StepThird from './join/StepThird';

enum step {
  first,
  second,
  thrid,
}

const Join = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [autoLogin, setAutoLogin] = useState(false);

  const [signupDisable, setSignupDisable] = useState(true);
  const [errors, setErrors] = useState<any>({ email: null, pwd: null, pwdConfirm: null });
  const [inputs, setInputs] = useState({ email: '', pwd: '', pwdConfirm: '' });
  const [signupStep, setSignupStep] = useState<step>(step.first);

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
    if (pwd.length < 8) {
      handleError('비밀번호를 입력해 주세요', 'pwd', setErrors);
    } else {
      handleError('', 'pwd', setErrors);
    }
  };

  const validPwdConfirm = (pwdConfirm: string) => {
    if (pwdConfirm.length < 8) {
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

  const submit = () => {};

  const stepFirst = () => {
    return (
      <div style={{ backgroundColor: '#fff', width: 360, border: 0, borderRadius: 12, boxShadow: 'rgb(30 40 58 / 8%) 4px 7px 14px' }}>
        <div style={{ padding: '28px 32px 0' }}>
          <h3>회원가입</h3>
          <button onClick={() => alert('가입')} style={{ display: 'flex', borderRadius: 10, border: '1px solid #ebefff', width: '100%' }}>
            <img style={{ width: 20, height: 20, margin: 'auto 0px auto 15px' }} src={google} alt='BigCo Inc. logo' />
            <div style={{ margin: 'auto', height: 48, display: 'flex', alignItems: 'center' }}>
              <p style={{ margin: 0, fontFamily: 'notosans bold', fontSize: 15 }}>Google 계정으로 시작하기</p>
            </div>
          </button>
          <div style={{ height: 1, background: '#E5E6E9', marginTop: 20, marginBottom: 20 }} />
          <StyledInput
            onChange={(e: any) => {
              handleOnChange(e.target.value, 'email', setInputs);
              validEmail(e.target.value);
            }}
            maxLength={25}
            placeholder='이메일 주소'
            style={{ marginBottom: 10 }}
          />
          <p style={{ color: COLORS.error, fontSize: 13, paddingLeft: 10 }}>{errors.email}</p>
          <StyledInput
            type={'password'}
            onChange={(e: any) => {
              handleOnChange(e.target.value, 'pwd', setInputs);
              validPwd(e.target.value);
            }}
            placeholder='비밀번호 (8자리 이상)'
            style={{ marginBottom: 10 }}
          />
          <p style={{ color: COLORS.error, fontSize: 13, paddingLeft: 10 }}>{errors.pwd}</p>
          <StyledInput
            type={'password'}
            onChange={(e: any) => {
              handleOnChange(e.target.value, 'pwdConfirm', setInputs);
              validPwdConfirm(e.target.value);
            }}
            placeholder='비밀번호 확인 (8자리 이상)'
            style={{ marginBottom: 10 }}
          />
          <p style={{ color: COLORS.error, fontSize: 13, paddingLeft: 10 }}>{errors.pwdConfirm}</p>

          <button
            disabled={signupDisable}
            onClick={() => setSignupStep(step.second)}
            style={{ display: 'flex', borderRadius: 10, border: 0, width: '100%', backgroundColor: signupDisable ? COLORS.black_200 : COLORS.point, color: COLORS.white, marginBottom: 15 }}
          >
            <img style={{ width: 20, height: 20, margin: 'auto 0px auto 15px' }} src={imgEmail} alt='BigCo Inc. logo' />
            <div style={{ margin: 'auto', height: 48, display: 'flex', alignItems: 'center' }}>
              <p style={{ margin: 0, fontFamily: 'notosans bold', fontSize: 15 }}>이메일로 가입하기</p>
            </div>
          </button>
        </div>
        <div style={{ height: 1, background: '#E5E6E9', marginTop: 20, marginBottom: 20 }} />
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 20 }}>
          이미 회원이세요?
          <StyledLink style={{ color: COLORS.point }} to='/login'>
            <b style={{ paddingLeft: 10 }}>로그인</b>
          </StyledLink>
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: windowSize.current[0], height: windowSize.current[1], display: 'flex', justifyContent: 'center', backgroundColor: '#ebecee' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2 style={{ color: COLORS.point, fontFamily: 'logo', fontWeight: 'bold' }}>Workingnet</h2>
        </div>

        {signupStep == step.first ? stepFirst() : null}
        {signupStep == step.second ? <StepSceond /> : null}
        {signupStep == step.thrid ? <StepThird /> : null}
      </div>
    </div>
  );
};

export default Join;
