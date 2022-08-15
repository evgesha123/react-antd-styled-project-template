import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './assets/less/customStyles.less';
import isEmpty from 'lodash/isEmpty';
import PageLogin from './domains/login/PageLogin';
import PrivateRoute from './app/auth/components/privateRoute';
import PageDashboard from './domains/dashboard/PageDashboard';
import AccessDenied from './app/auth/components/accessDenied';



const App = () => {
  const isAuthenticated = !isEmpty(localStorage.getItem('auth'));

  // eslint-disable-next-line no-console
  console.log('isAuthenticated1111', isAuthenticated);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin />} />
          <Route path="*" element={<AccessDenied />} />
          <Route
            path="dashboard"
            element={<PrivateRoute roles={[/* ROLE.ADMIN */]} component={PageDashboard} />}
          />
          <Route
            path="users"
            element={<PrivateRoute roles={[/* ROLE.ADMIN, ROLE.USER */]} component={PageDashboard} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
