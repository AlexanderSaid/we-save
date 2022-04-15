import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FiLogIn,
  FiMenu,
  FiX,
  FiLogOut,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";
import { useAuthentication } from "../../hooks/useAuthentication";
import UserContext from "../../context/UserContext";
import SignInContext from "../../context/SignInContext";
import SignIn from "../Forms/SignIn";
const NavBar = () => {
  //- Side nav bar visibility state
  const [hidden, setHidden] = useState(true);
  //- Dropdown menu visibility state
  const [menu, setMenu] = useState(false);

  //- Sing in pop-up state
  const { isOpen, setIsOpen } = useContext(SignInContext);
  const { loggedIn } = useAuthentication();
  const { logout, user } = useContext(UserContext);

  const sideBarState = () => {
    setHidden(!hidden);
  };

  const handleLogin = () => {
    setIsOpen(true);
    setHidden(true);
  };
  return (
    <nav className="w-full px-8 py-4 max-w-1440 md:px-12">
      <div className="w-full md:flex md:items-center md:justify-between ">
        <div className="relative flex items-center justify-between">
          <Link to="/">
            <div className="logo-container">
              <SiFoodpanda size={40} />
              <span className="font-[lato] tracking-wider text-bodyRegular md:text-bodyLarge lg:text-[26px]">
                WeSave
              </span>
            </div>
          </Link>
          <button
            className="px-3 py-1 border border-solid rounded opacity-50 border-primary text-lightBg hover:opacity-75 md:hidden"
            id="navbar-toggle"
            onClick={sideBarState}
          >
            {hidden ? <FiMenu /> : <FiX />}
          </button>
        </div>

        <div
          className={`${
            hidden ? "right-[-100%]" : "right-0"
          } nav-links nav-links-md`}
        >
          <Link
            to="/"
            onClick={() => setHidden(true)}
            className="nav-link nav-link-md"
          >
            Home
          </Link>

          {user && user.is_owner ? (
            <Link
              to="/createBasket"
              onClick={() => setHidden(true)}
              className="nav-link nav-link-md"
            >
              MyShop
            </Link>
          ) : null}

          <Link
            to="about-us"
            onClick={() => setHidden(true)}
            className="nav-link nav-link-md"
          >
            About Us
          </Link>

          <Link to="/contact" className="nav-link nav-link-md">
            Contact
          </Link>

          {loggedIn ? (
            <div
              onClick={() => setMenu(!menu)}
              className="justify-center nav-link nav-link-md login relative "
            >
              <div className="">
                <span>{user?.name?.first}</span>
                {menu ? (
                  <FiChevronUp
                    className="inline-block ml-2 font-semibold"
                    size={20}
                  />
                ) : (
                  <FiChevronDown
                    className="inline-block ml-2 font-semibold"
                    size={20}
                  />
                )}
              </div>
              <div className={`${menu ? "" : "hidden -right-[100%]"} dropdown`}>
                {user && user.is_owner && user.shop_id ? (
                  <a href="/createBasket" onClick={() => setHidden(true)}>
                    MyShop
                  </a>
                ) : (
                  <a href="#">Register shop</a>
                )}
                <a onClick={logout}>
                  Log Out <FiLogOut className="inline-block ml-1" size={17} />
                </a>
              </div>
            </div>
          ) : (
            <div
              onClick={() => handleLogin()}
              className="justify-center nav-link nav-link-md login"
            >
              <span>Sign In</span>
              <FiLogIn className="inline-block ml-2 font-semibold" size={20} />
            </div>
          )}

          <SignIn openSignIn={isOpen} setOpenSignIn={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
