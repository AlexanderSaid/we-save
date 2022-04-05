import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const UsersContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const API_URL = "/api/members";

  //Login member
  const login = async (userData) => {
    const { data } = await axios.post(`${API_URL}/login`, userData);
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
    }
    setUser(data);
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

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
export default UsersContext;
