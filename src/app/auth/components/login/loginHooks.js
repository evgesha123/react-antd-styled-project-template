import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { Button } from 'antd';
import Config from '../../../../services/Config/index';
import { refreshTokenSetup } from '../utils/refreshToken';



const LoginHooks = () => {
  const onSuccess = (res) => {
    // eslint-disable-next-line no-console
    console.log('Login Success: currentUser:', res.profileObj);
    // eslint-disable-next-line no-alert
    alert(
      `Logged in successfully welcome ${res.profileObj.name}.`,
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    // eslint-disable-next-line no-console
    console.log('Login failed: res:', res);
    // eslint-disable-next-line no-alert
    alert(
      'Failed to login',
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: Config.GOOGLE_CLIENT_ID,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <Button onClick={signIn}>
      <img src="icons/google.svg" alt="google login" className="icon" />

      <span>Sign in with Google</span>
    </Button>
  );
};

export default LoginHooks;
