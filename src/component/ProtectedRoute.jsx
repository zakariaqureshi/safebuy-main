// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// This component will protect the routes that need authentication
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");

  // If the user is not authenticated, redirect them to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children; // If authenticated, return the children (i.e., protected page)
};

export default ProtectedRoute;
