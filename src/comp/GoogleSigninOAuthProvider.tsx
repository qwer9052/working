import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { axiosInstance } from '../util/axiosPlugin';
import { useNavigate } from 'react-router-dom';
import { writeToStorage } from '../util/asyncStorage';
import { Token } from '../type/token';
import { handleOnChange } from '../util/common';
type props = {
  setInputs: Function;
  validEmail: Function;
  validName: Function;
};

const GoogleSigninButton = (props: props) => {
  const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;
  const navigate = useNavigate();

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        useOneTap
        width='300px'
        text='continue_with'
        onSuccess={(res) => {
          const decoded: any = jwt_decode(res.credential);

          handleOnChange(decoded.email, 'email', props.setInputs);
          props.validEmail(decoded.email);
          handleOnChange(decoded.family_name + decoded.given_name, 'name', props.setInputs);
          props.validName(decoded.name);
        }}
        onError={() => {
          console.log('error');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSigninButton;
