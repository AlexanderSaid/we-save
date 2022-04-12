import React from "react";
import {
  SiFoodpanda,
  SiLinkedin,
  SiFacebook,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-darkBg max-w-1440 w-full px-4 flex items-center justify-evenly flex-wrap gap-x-12 sm:px-8 md:gap-x-12 md2:gap-x-4">
      <div className="order-3 md2:order-1 mb-8 md2:mb-0">
        <p className="text-center text-bodyRegular md2:pt-7 md2:mt-8 font-semibold tracking-wide">
          © 2022 Coffee & Chocolate Team
          <br />
          <span className="text-bodyMd">
            Class-34
            <a
              href="https://hackyourfuture.net"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 hover:text-primary hover:underline"
            >
              HackYourFuture
            </a>
          </span>
        </p>
      </div>
      <div className="mt-16 mb-12 order-1 md2:order2">
        <a
          href="#top"
          className="flex flex-col items-center justify-center gap-4"
        >
          <SiFoodpanda size={60} />
          <span className="font-[lato] tracking-wider font-bold text-bodyRegular md:text-[26px] mb-4">
            WeSave
          </span>
        </a>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="hover:scale-[120%]">
            <a
              href="https://www.facebook.com/hackyourfuturenow"
              className="hover:text-primary "
            >
              <SiFacebook size={20} />
            </a>
          </div>
          <div className="hover:scale-[120%]">
            <a
              href="https://twitter.com/hackyourfutures"
              className="hover:text-primary "
            >
              <SiTwitter size={20} />
            </a>
          </div>
          <div className="hover:scale-[120%]">
            <a
              href="https://www.linkedin.com/school/hackyourfuture/"
              className="hover:text-primary "
            >
              <SiLinkedin size={20} />
            </a>
          </div>
          <div className="hover:scale-[120%]">
            <a
              href="https://www.youtube.com/channel/UCkK246iKcOAvsL0SI_6n3eA"
              className="hover:text-primary "
            >
              <SiYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 font-semibold tracking-wide order-2 md2:order-3 text-bodyRegular">
        <a href="/" className="hover:text-primary">
          Home
        </a>
        <a href="/results#search-results" className="hover:text-primary">
          Search
        </a>
        <a href="/about-us" className="hover:text-primary">
          About Us
        </a>
        <a href="/contact" className="hover:text-primary">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Footer;
