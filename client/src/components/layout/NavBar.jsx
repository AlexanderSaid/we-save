import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";
// import SignIn from "./SignIn";
import SignUp from "../SignUp";

const NavBar = () => {
  const [hidden, setHidden] = useState(true);
  const [flex, setFlex] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navbarCollapse = () => {
    setHidden(!hidden);
    setFlex(!flex);
  };

  return (
    <nav className="py-2 bg-darkBg md:py-4 ">
      <div className="container px-4 mx-auto md:flex md:items-center ">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-lightFont">
            <SiFoodpanda size={50} />
          </div>
          <button
            className="px-3 py-1 border border-solid rounded opacity-50 border-primary text-lightBg hover:opacity-75 md:hidden"
            id="navbar-toggle"
            onClick={navbarCollapse}
          >
            <FiMenu />
          </button>
        </div>
        <div
          className={`${flex ? "flex" : ""} ${
            hidden ? "hidden" : ""
          } md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 `}
          id="navbar-collapse"
        >
          <Link
            to="/"
            className="p-2 rounded lg:px-4 md:mx-2 text-darkFont bg-primary"
          >
            Home
          </Link>
          <Link
            to="#"
            className="p-2 transition-colors duration-300 rounded lg:px-4 md:mx-2 text-lightFont hover:bg-primary hover:text-gray-700"
          >
            Store Owner?
          </Link>
          <Link
            to="about-us"
            className="p-2 transition-colors duration-300 rounded lg:px-4 md:mx-2 text-lightFont hover:bg-primary hover:text-gray-700"
          >
            About Us
          </Link>
          <Link
            to="#"
            className="p-2 transition-colors duration-300 rounded lg:px-4 md:mx-2 text-lightFont hover:bg-primary hover:text-gray-700"
          >
            FAQ
          </Link>
          <Link
            to="#"
            className="justify-center p-2 transition-colors duration-300 rounded lg:px-4 md:mx-2 text-lightFont hover:bg-primary hover:text-gray-700"
          >
            <div
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <FiLogIn size={24} />
            </div>
          </Link>

          <SignUp openSignUp={isOpen} setSignUp={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
