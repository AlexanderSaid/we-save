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
import { useAuthentication } from "../../hooks/useAuthentication";
import UserContext from "../../context/UserContext";
import SignInContext from "../../context/SignInContext";
import SignIn from "../Forms/SignIn";
import ShopRegistration from "../Forms/ShopRegistration";
import logo1 from "../../assets/images/logo/logo1.png";

const NavBar = () => {
  //- Side nav bar visibility state
  const [hidden, setHidden] = useState(true);
  //- Dropdown menu visibility state
  const [menu, setMenu] = useState(false);

  //- Sing in pop-up state
  const { isOpen, setIsOpen, setShopIsOpen, shopIsOpen } =
    useContext(SignInContext);
  const { loggedIn } = useAuthentication();
  const { logout, user } = useContext(UserContext);

  const sideBarState = () => {
    setHidden(!hidden);
  };
  const handleLinkClick = () => {
    setHidden(true);
    setMenu(false);
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
              <img src={logo1} alt="logo" className="h-[50px] w-[50px]" />
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
            onClick={handleLinkClick}
            className="nav-link nav-link-md"
          >
            Home
          </Link>

          {user && user.is_owner ? (
            <Link
              to="my-shop"
              onClick={handleLinkClick}
              className="nav-link nav-link-md"
            >
              MyShop
            </Link>
          ) : null}

          <Link
            to="about-us"
            onClick={handleLinkClick}
            className="nav-link nav-link-md"
          >
            About Us
          </Link>

          <Link
            to="contact"
            onClick={handleLinkClick}
            className="nav-link nav-link-md"
          >
            Contact
          </Link>

          {loggedIn ? (
            <div
              onClick={() => setMenu(!menu)}
              className="justify-center nav-link nav-link-md login relative min-w-[120px]"
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
                  <a href="my-shop" onClick={handleLinkClick}>
                    MyShop
                  </a>
                ) : (
                  <a onClick={() => setShopIsOpen(true)}>Register shop</a>
                )}
                <a href="/" onClick={logout}>
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
          <ShopRegistration
            shopRegisterOpen={shopIsOpen}
            setShopRegisterOpen={setShopIsOpen}
          />
          <SignIn openSignIn={isOpen} setOpenSignIn={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
