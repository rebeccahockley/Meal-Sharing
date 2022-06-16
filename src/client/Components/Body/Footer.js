import React from "react";
import "./Styling/FooterStyles.css";
import facebook from "../assets/facebook.jpg";

// import gitHub from "/assets/gitHub.jpg";
// import instagram from "/assets/instagram.jpg";
// import linkedIn from "/assets/linkedIn.jpg";

export const Footer = () => {
  return (
    <footer>
      <div className="lineDecoration"></div>
      <div id="footerImageContainer">
        <a href="https://www.facebook.com/">
          <img
            src={facebook}
            className="footerImages"
            alt="Outline of Facebook Logo"
          ></img>
        </a>
        <a href="https://github.com/rebeccahockley">
          <img className="footerImages" alt="Outline of GitHub Logo"></img>
        </a>
        <a href="https://www.instagram.com/">
          <img className="footerImages" alt="Outline of Instagram Logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/rebecca-hockley-6b4475238/">
          <img className="footerImages" alt="Outline of LinkedIn Logo"></img>
        </a>
      </div>
    </footer>
  );
};
