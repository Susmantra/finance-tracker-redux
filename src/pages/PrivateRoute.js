import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const logedIn = false;

  return logedIn ? children : <Navigate to="/" />;
};
