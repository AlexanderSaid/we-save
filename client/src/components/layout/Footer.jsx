import React from "react";
import {
  SiFoodpanda,
  SiLinkedin,
  SiFacebook,
  SiInstagram,
  SiYoutube,
} from "react-icons/si";

const Footer = () => {
  return (
    <div className="mb-0 flex-col r">
      <div className="lg:ml-40 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex lg:ml-[150px] title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <SiFoodpanda size={70} color="white" />
          </a>
          <p className="lg:ml-[150px] mt-2 text-sm text-white">Food Saver</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
              SITEMAP
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-link">About Us</a>
              </li>
              <li>
                <a className="footer-link">Customer</a>
              </li>
              <li>
                <a className="footer-link">Shop Owner</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
              OTHER
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-link">FAQ</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
              LEGAL
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-link">TERMS & CONDITIONS</a>
              </li>
              <li>
                <a className="footer-link">PRIVACY POLICY</a>
              </li>
              <li>
                <a className="footer-link">COOKIE POLICY</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            © 2022 Dev — @food save
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-200">
              <SiLinkedin />
            </a>
            <a className="ml-3 text-gray-200">
              <SiInstagram />
            </a>
            <a className="ml-3 text-gray-200">
              <SiYoutube />
            </a>
            <a className="ml-3 text-gray-200">
              <SiFacebook />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
