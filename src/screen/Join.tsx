import { useRef, useState } from 'react';
import { COLORS } from '../css/Color';
import StepSceond from './join/StepSceond';
import StepThird from './join/StepThird';
import { StepFirst } from './join/StepFirst';
import { step } from '../type/enum';
import StyledLink from '../comp/StyledLink';

const Join = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [signupStep, setSignupStep] = useState<step>(step.first);

  return (
    <div style={{ width: windowSize.current[0], height: windowSize.current[1], display: 'flex', justifyContent: 'center', backgroundColor: '#ebecee' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2 style={{ fontFamily: 'logo', fontWeight: 'bold' }}>
            <StyledLink style={{ color: COLORS.point }} to={'/'}>
              Workingnet
            </StyledLink>
          </h2>
        </div>

        {signupStep == step.first ? <StepFirst signupStep={signupStep} setSignupStep={setSignupStep} /> : null}
        {signupStep == step.second ? <StepSceond signupStep={signupStep} setSignupStep={setSignupStep} /> : null}
        {signupStep == step.thrid ? <StepThird /> : null}
      </div>
    </div>
  );
};

export default Join;
