import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
// import AccessDenied from '../accessDenied';
import PropTypes from 'prop-types';
import LayoutInner from '../Layout/LayoutInner';
// import { ROLE } from './features/auth/auth';
// import { selectCurrentUser, selectIsAuthenticated } from './features/auth/authSlice';



const PrivateRoute = ({ /*roles,*/ component }) => {
  const isAuthenticated = !isEmpty(localStorage.getItem('auth'));

  // const user = useSelector(selectCurrentUser);
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  // const userHasRequiredRole = !!(user && roles.includes(user.role));

  if (isAuthenticated /*&& userHasRequiredRole*/) {
    return (
      <LayoutInner content={component()} />
    );
  }

  // if (isAuthenticated && !userHasRequiredRole) {
  //   return <AccessDenied />;
  // }

  return <Navigate to="/" />;
};


PrivateRoute.propTypes = {
  roles: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  component: PropTypes.any.isRequired,
};

PrivateRoute.defaultProps = {
  roles: null,
};

export default PrivateRoute;
