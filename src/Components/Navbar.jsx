import React from "react";
import "./Navbar.scss";
import logo from "../assets/logo-alt.svg";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img alt="logo" src={logo} />
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "portfolio"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`/`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
