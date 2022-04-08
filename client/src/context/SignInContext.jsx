import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

const SignInContext = createContext({});

export const SignInProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <SignInContext.Provider value={value}>{children}</SignInContext.Provider>
  );
};

SignInProvider.propTypes = {
  children: PropTypes.node,
};
export default SignInContext;
