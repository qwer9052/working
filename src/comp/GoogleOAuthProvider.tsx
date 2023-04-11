import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { axiosInstance } from '../util/axiosPlugin';
import { useNavigate } from 'react-router-dom';
import { writeToStorage } from '../util/asyncStorage';
import { Token } from '../type/token';

const GoogleLoginButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;
  const navigate = useNavigate();

  const gmailLogin = (email: string, gmailAuth: string) => {
    axiosInstance
      .post('/user/login/gmail', {
        email: email,
        gmailAuth: gmailAuth,
      })
      .then((res) => {
        console.log(res.data);
        const { accessToken, refreshToken } = res.data;
        const token: Token = {
          accessToken: accessToken,
          refreshToken: refreshToken,
        };
        writeToStorage('token', JSON.stringify(token));
        navigate('/');
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        useOneTap
        width='300px'
        onSuccess={(res) => {
          const decoded: any = jwt_decode(res.credential);
          gmailLogin(decoded.email, decoded.sub);
        }}
        onError={() => {
          console.log('error');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
