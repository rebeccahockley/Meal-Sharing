import React from "react";
import "./Styling/FooterStyles.css";
import facebookLogo from "/assets/facebook.jpg";
import gitHubLogo from "/assets/gitHub.jpg";
import instagramLogo from "/assets/instagram.jpg";
import linkedInLogo from "/assets/linkedIn.jpg";

export const Footer = () => {
  return (
    <footer>
      <div className="lineDecoration"></div>
      <div id="footerImageContainer">
        <a href="https://www.facebook.com/">
          <img
            src={facebookLogo}
            className="footerImages"
            alt="Outline of Facebook Logo"
          ></img>
        </a>
        <a href="https://github.com/rebeccahockley">
          <img
            src={gitHubLogo}
            className="footerImages"
            alt="Outline of GitHub Logo"
          ></img>
        </a>
        <a href="https://www.instagram.com/">
          <img
            src={instagramLogo}
            className="footerImages"
            alt="Outline of Instagram Logo"
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/rebecca-hockley-6b4475238/">
          <img
            src={linkedInLogo}
            className="footerImages"
            alt="Outline of LinkedIn Logo"
          ></img>
        </a>
      </div>
    </footer>
  );
};
