import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import PageLogin from './domains/login/PageLogin';
import PageDashboard from './domains/dashboard/PageDashboard';
import PageUsers from './domains/users/PageUsers';
import './assets/less/themes/antd-customized.css';
import urlPageDashboard from './urls/urlPageDashboard';
import urlPageUsers from './urls/urlPageUsers';
import AccessDenied from './app/components/AccessDenied';
import PrivateRoute from './app/components/PrivateRoute';



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
