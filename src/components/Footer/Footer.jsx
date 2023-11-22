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
          <a className="social-links" href="https://github.com/adreeja06">
            <img src={Github} alt="" href="https://github.com/adreeja06" />
          </a>
          <a className="social-links" href="https://www.instagram.com/_a.d.r.e.e.j.a_/">
            <img src={Instagram} alt="" />
          </a>
          <a
            className="social-links"
            href="https://www.linkedin.com/in/adreeja-mahato-84a000226/"
          >
            <img
              src={LinkedIn}
              alt=""
              href="https://www.linkedin.com/in/adreeja-mahato-84a000226/"
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
