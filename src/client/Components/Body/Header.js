import React from "react";
import { Link } from "react-router-dom";
import "./Styling/HeaderStyles.css";
import banner from "../../assets/banner.jpeg";

export const Header = () => {
  return (
    <>
      <header id="header">
        <div id="title">
          <h1>Book. Meet. Eat.</h1>
          <h2>A meal sharing app designed to bring people together.</h2>
          <img
            src={banner}
            id="banner"
            alt="Banner showing 12 vector outlines of different food and drinks"
          ></img>
        </div>
        <div className="lineDecoration"></div>
        <div>
          <nav id="navBar">
            <ul>
              <li className="navBarLinks">
                <Link to="/">Home</Link>
              </li>
              <li className="navBarLinks">
                <Link to="/meals">Meals</Link>
              </li>
              <li className="navBarLinks">
                <Link to="/reviews">Reviews</Link>
              </li>
            </ul>
          </nav>
          <div className="lineDecoration"></div>
        </div>
      </header>
    </>
  );
};
