import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react/cjs/react.development";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const stored = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(stored ? stored : null);
  // const API_URL = "http://localhost:5001/api/users/login";

  const { error, isLoading, performFetch, cancelFetch } = useFetch(
    "/users/login",
    (response) => {
      localStorage.setItem("user", JSON.stringify(response.result));
      setUser(response.result);
    },
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

  //Login member
  // const login = async (userData) => {
  //   const { data } = await axios.post(API_URL, userData);
  //   if (data.success) {
  //     localStorage.setItem("user", JSON.stringify(data.result));
  //   }
  //   setUser(data.result);
  // };

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
