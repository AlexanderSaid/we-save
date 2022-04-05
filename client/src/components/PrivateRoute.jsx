import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
const PrivateRoute = () => {
  const { loggedIn, loading } = useAuthentication();
  if (loading) {
    return <h1>isLoading ... </h1>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
