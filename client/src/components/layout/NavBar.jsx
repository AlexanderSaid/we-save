import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";
// import UserContext from "../../context/UserContext";
import SignIn from "./SignIn";
const NavBar = () => {
  const [hidden, setHidden] = useState(true);
  const [flex, setFlex] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const { logout } = useContext(UserContext);
  const navbarCollapse = () => {
    setHidden(!hidden);
    setFlex(!flex);
  };

  return (
    <nav className="bg-darkBg py-4 max-w-1440 w-screen px-8 sm:px-12">
      <div className="w-full sm:flex sm:items-center sm:justify-between ">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-lightFont">
            <SiFoodpanda size={50} />
          </div>
          <button
            className="px-3 py-1 border border-solid rounded opacity-50 border-primary text-lightBg hover:opacity-75 sm:hidden"
            id="navbar-toggle"
            onClick={navbarCollapse}
          >
            <FiMenu />
          </button>
        </div>
        <div
          className={`${flex ? "flex" : ""} ${
            hidden ? "hidden" : ""
          } sm:flex flex-col sm:flex-row mt-3 sm:mt-0 `}
          id="navbar-collapse"
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
          {/* <button className="text-primary" onClick={logout}>
            Logout
          </button>
          <Link
            to="/register"
            className="nav-link"
          >
            Register shop
          </Link>
          <Link
            to="/login"
            className="nav-link"
          >
            Login
          </Link> */}
          <Link to="#" className="nav-link">
            Store Owner?
          </Link>
          <Link to="#" className="nav-link">
            About Us
          </Link>
          <Link to="#" className="nav-link">
            FAQ
          </Link>
          <Link to="#" className="justify-center nav-link">
            <div
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <FiLogIn size={24} />
            </div>
          </Link>

          <SignIn openSignIn={isOpen} setOpenSignIn={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
