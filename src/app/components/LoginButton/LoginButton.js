import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import Config from '../../../config/index';
import urlPageDashboard from '../../../urls/urlPageDashboard';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { mkNotification } from '../../../lib/mkNotification';



const LoginButton = () => {
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
    navigate(urlPageDashboard());
    refreshTokenSetup(res);
  };

  const onFailure = () => {
    mkNotification('error', 'Authentication error! Contact the web development team.');
  };

  return (
    <GoogleLogin
      theme='dark'
      clientId={Config.GOOGLE_CLIENT_ID}
      buttonText="Continue with Google account"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      style={{ marginTop: '100px' }}
      isSignedIn
    />
  );
};

export default LoginButton;
