import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiMenu, FiX, FiLogOut } from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";
import { useAuthentication } from "../../hooks/useAuthentication";
import UserContext from "../../context/UserContext";
import SignInContext from "../../context/SignInContext";
import SignIn from "../Forms/SignIn";
const NavBar = () => {
  //- Side nav bar visibility state
  const [hidden, setHidden] = useState(true);
  //- Sing in pop-up state
  const { isOpen, setIsOpen } = useContext(SignInContext);
  const { loggedIn } = useAuthentication();
  const { logout, user } = useContext(UserContext);

  const sideBarState = () => {
    setHidden(!hidden);
  };

  const handleLoginLogout = () => {
    if (loggedIn) {
      logout();
    } else {
      setIsOpen(true);
      setHidden(true);
    }
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
          <Link
            to="/"
            onClick={handleLoginLogout}
            className="justify-center nav-link nav-link-md login"
          >
            <div>
              {loggedIn ? user?.name?.first : "Sign In"}
              {loggedIn ? (
                <FiLogOut
                  className="inline-block ml-2 font-semibold"
                  size={20}
                />
              ) : (
                <FiLogIn
                  className="inline-block ml-2 font-semibold"
                  size={20}
                />
              )}
            </div>
          </Link>

          <SignIn openSignIn={isOpen} setOpenSignIn={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
