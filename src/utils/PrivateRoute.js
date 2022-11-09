import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  if (user && user.role === 'admin') {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
