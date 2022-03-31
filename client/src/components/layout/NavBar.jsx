import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";

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
    <nav className="bg-darkBg py-2 md:py-4 ">
      <div className="container px-4 mx-auto md:flex md:items-center ">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-lightFont">
            <SiFoodpanda size={50} />
          </div>
          <button
            className="border border-solid border-primary px-3 py-1 rounded text-lightBg opacity-50 hover:opacity-75 md:hidden"
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
            className="p-2 lg:px-4 md:mx-2 text-darkFont rounded bg-primary"
          >
            Home
          </Link>
          <Link
            to="#"
            className="p-2 lg:px-4 md:mx-2 text-lightFont rounded hover:bg-primary hover:text-gray-700 transition-colors duration-300"
          >
            Store Owner?
          </Link>
          <Link
            to="#"
            className="p-2 lg:px-4 md:mx-2 text-lightFont rounded hover:bg-primary hover:text-gray-700 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="#"
            className="p-2 lg:px-4 md:mx-2 text-lightFont rounded hover:bg-primary hover:text-gray-700 transition-colors duration-300"
          >
            FAQ
          </Link>
          <Link
            to="#"
            className=" p-2 lg:px-4 md:mx-2 text-lightFont rounded hover:bg-primary hover:text-gray-700 transition-colors duration-300 justify-center"
          >
            <div onClick={() => setIsOpen(true)}>
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
