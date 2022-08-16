import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { FaSignOutAlt } from 'react-icons/fa';
import Config from '../../../../config/index';



const LogoutHook = () => {
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
      style={{ color: 'white' }}
      onClick={signOut}
      type='link'
      icon={<FaSignOutAlt className='kt-mr-5' />}
    >
      Sign out
    </Button>
  );
};

export default LogoutHook;
