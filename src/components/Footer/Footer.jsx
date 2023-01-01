import React from "react";

import "./Footer.css";

import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />

      <div className="footer">
        <div className="social-links">
          <a className="social-links" href="https://github.com/AdityaPote">
            <img src={Github} alt="" href="https://github.com/AdityaPote" />
          </a>
          <a className="social-links" href="https://github.com/AdityaPote">
            <img src={Instagram} alt="" />
          </a>
          <a
            className="social-links"
            href="https://www.linkedin.com/in/aditya-pote11/"
          >
            <img
              src={LinkedIn}
              alt=""
              href="https://www.linkedin.com/in/aditya-pote11/"
            />
          </a>
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
