import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiLogIn } from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";

import TEST_ID from "./Nav.testid";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <SiFoodpanda size={50} />
      </div>
      <ul className="navBarList">
        <Link to="#" data-testid={TEST_ID.linkToUser}>
          <li>Store Owner?</li>
        </Link>
        <Link to="#" data-testid={TEST_ID.linkToAboutUs}>
          <li>About Us</li>
        </Link>
        <Link to="#" data-testid={TEST_ID.linkToFAQ}>
          <li>FAQ</li>
        </Link>
        <Link to="#" data-testid={TEST_ID.linkToHomePage}>
          <li>
            <FiHome />
          </li>
        </Link>
        <Link to="#" data-testid={TEST_ID.linkToLogin}>
          <li>
            <FiLogIn />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
