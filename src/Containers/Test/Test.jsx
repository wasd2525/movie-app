import React, { useEffect, useState } from "react";
import "./Test.scss";
import { motion } from "framer-motion";
import movieIcon from "../../assets/movie.svg";

const Test = () => {
  return (
    <div className="app__test app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__test-info"
      >
        <div className="badge-cmp app__flex">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 className="title-text">
              Hi!
              <br />
              Welcome to Rando
              <span style={{ color: "#94b49f" }}>Movie</span>
            </h2>
            <a href="/">
              <button className="buttonALT">Begin</button>
            </a>
          </div>
          <img src={movieIcon} style={{ width: "50%" }} />
        </div>
      </motion.div>
    </div>
  );
};

export default Test;
