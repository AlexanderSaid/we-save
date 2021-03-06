import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const stored = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(stored ? stored : null);

  const { error, isLoading, performFetch, cancelFetch, setError } = useFetch(
    "/users/login",
    (response) => {
      localStorage.setItem("user", JSON.stringify(response.result));
      setUser(response.result);
    }
  );

  useEffect(() => {
    return cancelFetch;
  }, []);

  const login = (userData) => {
    performFetch({
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    setUser,
    login,
    logout,
    isLoading,
    error,
    setError,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
export default UserContext;
