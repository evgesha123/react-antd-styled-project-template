import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { Button } from 'antd';
import Config from '../../../../services/Config/index';



const LogoutHooks = () => {
  const onLogoutSuccess = (res) => {
    // eslint-disable-next-line no-console
    console.log('Logged out Success');
    // eslint-disable-next-line no-alert
    alert('Logged out Successfully');
  };

  const onFailure = () => {
    // eslint-disable-next-line no-console
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId: Config.GOOGLE_CLIENT_ID,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <Button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon" />

      <span className="buttonText">Sign out</span>
    </Button>
  );
};

export default LogoutHooks;
