import React from "react";
import { Link } from "react-router-dom";

import TEST_ID from "./Nav.testid";

const Nav = () => {
  return (
    <ul>
      <Link to="/" data-testid={TEST_ID.linkToHome}>
        <li>
          <p className="text-xl leading-tight">Home</p>
        </li>
      </Link>
      <Link to="/user" data-testid={TEST_ID.linkToUsers}>
        <li>
          {" "}
          <p className="text-xl leading-tight">User</p>
        </li>
      </Link>
      <div className="flex-col justify-center">
        <div className=" bg-primary box font-title ">primary</div>
        <div className=" bg-accent box font-title1">accent</div>
        <div className=" bg-darkBg box">dark bg</div>
        <div className=" bg-lightBg box">light bg</div>
        <div className=" bg-darkFont box">dark font</div>
        <div className=" bg-lightFont box">light font</div>
        <div className=" bg-error box">error</div>
      </div>
    </ul>
  );
};

export default Nav;
