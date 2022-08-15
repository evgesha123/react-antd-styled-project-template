import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import Config from '../../../../services/Config/index';
import { refreshTokenSetup } from '../../utils/refreshToken';



const LoginHooks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: Config.GOOGLE_CLIENT_ID,
        scope: '',
      });
    };

    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    localStorage.setItem('auth', JSON.stringify(res));
    navigate('/dashboard');
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    // eslint-disable-next-line no-console
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={Config.GOOGLE_CLIENT_ID}
        buttonText="Continue with Google account"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        style={{ marginTop: '100px' }}
        isSignedIn
      />
    </div>
  );
};

export default LoginHooks;
