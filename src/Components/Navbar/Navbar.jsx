import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import logo from "../../assets/logo-alt.svg";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  // for mobile navbar
  const [toggle, setToggle] = useState(false);

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

      {/* mobile version of navbar */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "portfolio"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
