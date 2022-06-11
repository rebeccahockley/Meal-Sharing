import React from "react";
import "./Styling/FooterStyles.css";

export const Footer = () => {
  return (
    <footer>
      <div className="lineDecoration"></div>
      <div id="footerImageContainer">
        <img
          src="./src/client/Components/Assets/Facebook.jpg"
          className="footerImages"
          alt="Outline of Facebook Logo"
        ></img>
        <img
          src="./src/client/Components/Assets/GitHub.jpg"
          className="footerImages"
          alt="Outline of GitHub Logo"
        ></img>
        <img
          src="./src/client/Components/Assets/Instagram.png"
          className="footerImages"
          alt="Outline of Instagram Logo"
        ></img>
        <img
          src="./src/client/Components/Assets/LinkedIn.png"
          className="footerImages"
          alt="Outline of LinkedIn Logo"
        ></img>
      </div>
    </footer>
  );
};
