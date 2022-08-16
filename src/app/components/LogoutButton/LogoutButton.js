import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Config from '../../../config/index';



const LogoutButton = () => {
  const navigate = useNavigate();

  const onLogoutSuccess = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  const { signOut } = useGoogleLogout({
    clientId: Config.GOOGLE_CLIENT_ID,
    onLogoutSuccess,
  });

  return (
    <Button
      style={{ background: 'rgb(32 75 161)', borderColor: 'transparent' }}
      onClick={signOut}
      type='primary'
    >
      Sign out
    </Button>
  );
};

export default LogoutButton;
