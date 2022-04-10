import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiMenu, FiX, FiLogOut } from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";
import { useAuthentication } from "../../hooks/useAuthentication";
import UserContext from "../../context/UserContext";
import SignInContext from "../../context/SignInContext";
// import UserContext from "../../context/UserContext";
import SignIn from "../Forms/SignIn";
const NavBar = () => {
  //- Side nav bar visibility state
  const [hidden, setHidden] = useState(true);

  //- Sing in pop-up state
  const { isOpen, setIsOpen } = useContext(SignInContext);

  const sideBarState = () => {
    setHidden(!hidden);
  };

  const { loggedIn } = useAuthentication();
  const { logout, user } = useContext(UserContext);

  return (
    <nav className="bg-darkBg py-4 max-w-1440 w-screen px-8 sm:px-12">
      <div className="w-full sm:flex sm:items-center sm:justify-between ">
        <div className="flex items-center justify-between relative">
          <div className="logo-container">
            <SiFoodpanda size={40} />
            <span className="font-[lato] tracking-wider text-bodyRegular md:text-bodyLarge lg:text-[26px]">
              WeSave
            </span>
          </div>
          <button
            className="px-3 py-1 border border-solid rounded opacity-50 border-primary text-lightBg hover:opacity-75 sm:hidden"
            id="navbar-toggle"
            onClick={sideBarState}
          >
            {hidden ? <FiMenu /> : <FiX />}
          </button>
        </div>

        <div
          className={`${
            hidden ? "right-[-100%]" : "right-0"
          } nav-links nav-links-sm`}
        >
          <Link
            to="/"
            onClick={() => setHidden(true)}
            className="nav-link nav-link-sm"
          >
            Home
          </Link>

          {user && user.is_owner ? (
            <Link
              to="/createBasket"
              onClick={() => setHidden(true)}
              className="nav-link nav-link-sm"
            >
              Create Your Baskets
            </Link>
          ) : null}

          <Link
            to="about-us"
            onClick={() => setHidden(true)}
            className="nav-link nav-link-sm"
          >
            About Us
          </Link>

          <Link
            to="contact"
            onClick={() => setHidden(true)}
            className="nav-link nav-link-sm"
          >
            Contact
          </Link>
          <Link
            to="#"
            onClick={
              loggedIn
                ? logout
                : () => {
                    setIsOpen(true);
                    setHidden(true);
                  }
            }
            className="justify-center nav-link nav-link-sm"
          >
            {loggedIn ? (
              <div>
                Log Out
                <FiLogOut
                  className="inline-block ml-2 font-semibold"
                  size={20}
                />
              </div>
            ) : (
              <div>
                Sign In
                <FiLogIn
                  className="inline-block ml-2 font-semibold"
                  size={20}
                />
              </div>
            )}
          </Link>

          <SignIn openSignIn={isOpen} setOpenSignIn={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
