import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import PageLogin from './domains/login/PageLogin';
import PrivateRoute from './app/auth/components/privateRoute';
import PageDashboard from './domains/dashboard/PageDashboard';
import PageUsers from './domains/users/PageUsers';
import AccessDenied from './app/auth/components/accessDenied';
import './assets/less/themes/antd-customized.css';
import urlPageDashboard from './urls/urlPageDashboard';
import urlPageUsers from './urls/urlPageUsers';



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin />} />
          <Route path="*" element={<AccessDenied />} />
          <Route
            path={urlPageDashboard()}
            element={<PrivateRoute roles={[/* ROLE.ADMIN */]} component={PageDashboard} />}
          />
          <Route
            path={urlPageUsers()}
            element={<PrivateRoute roles={[/* ROLE.ADMIN, ROLE.USER */]} component={PageUsers} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
