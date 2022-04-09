import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react/cjs/react.development";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const stored = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(stored ? stored : null);

  const { error, isLoading, performFetch, cancelFetch } = useFetch(
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
    login,
    logout,
    isLoading,
    error,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
export default UserContext;
