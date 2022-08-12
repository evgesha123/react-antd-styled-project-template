import { BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import './assets/less/customStyles.less';



const App = () => {
  const [ profile, setProfile ] = useState([]);
  const clientId = '386576574744-4q6g4rej43gg3nli1midei1qsge5jo87.apps.googleusercontent.com';

  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };

  const onFailure = (err) => {
    // eslint-disable-next-line no-console
    console.log('failed', err);
  };

  const logOut = () => {
    setProfile(null);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId,
        scope: '',
      });
    };

    gapi.load('client:auth2', initClient);
  });

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h2>React Google Login</h2>
          <br />
          <br />
          {profile ? (
            <div>
              <img src={profile.imageUrl} alt="user logo" />
              <h3>User Logged in</h3>
              <p>
                Name:
                {profile.name}
              </p>
              <p>
                Email Address:
                {profile.email}
              </p>
              <br />
              <br />
              <GoogleLogout
                clientId={clientId}
                buttonText="Log out"
                onLogoutSuccess={logOut}
              />
            </div>
          ) : (
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy="single_host_origin"
              isSignedIn
            />
          )}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
