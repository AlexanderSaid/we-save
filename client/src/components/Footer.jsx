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
    <div className="footer">
      <div className="sitemap">
        <ul>
          <li>SITEMAP</li>
          <li>About Us</li>
          <li>Customer</li>
          <li>Shop Owner</li>
        </ul>
      </div>
      <div className="other">
        <ul>
          <li>OTHER</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="legal">
        <ul>
          <li>LEGAL</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footerLogo">
        <SiFoodpanda size={70} />
      </div>
      <div className="socialMedia">
        <a>
          <SiLinkedin />
        </a>
        <a>
          <SiFacebook />
        </a>
        <a>
          <SiInstagram />
        </a>
        <a>
          <SiYoutube />
        </a>
      </div>
      <div className="copyrights">
        &copy; 2022 by <span>Food-Saves</span>. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
