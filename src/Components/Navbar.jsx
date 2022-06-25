import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import icon from "../assets/icon.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={icon} />
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
