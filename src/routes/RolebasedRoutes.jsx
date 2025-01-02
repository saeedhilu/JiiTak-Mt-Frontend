import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RoleProtecterRoute = ({ children, allowedRoles }) => {
  const {  user } = useSelector((state) => state.auth);

  
  const userHasRequiredRole = allowedRoles.some(role => {
    if (role === 'admin' && user?.role) return true;
    return false;
  });

  return userHasRequiredRole ? children : <Navigate to="/unauthorized" />;
};

export default RoleProtecterRoute;