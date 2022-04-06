import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const stored = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(stored ? stored : null);
  const API_URL = "http://localhost:5000/api/users/login";

  //Login member
  const login = async (userData) => {
    const { data } = await axios.post(API_URL, userData);
    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.result));
    }
    setUser(data.result);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
export default UserContext;
