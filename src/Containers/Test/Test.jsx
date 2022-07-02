import React from "react";
import { motion } from "framer-motion";
import movieIcon from "../../assets/notfound.svg";
import "./Test.scss";

const Test = () => {
  return (
    <div className="app__test app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__test-info"
      >
        <div className="app__flex-notfound">
          <img alt="background" src={movieIcon} className="notfoundIMG" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "5vh",
            }}
          >
            <h2 className="notfound-text">
              Sorry, we couldn't find the{" "}
              <span style={{ color: "#94b49f" }}>Movie</span> you were looking
              for
            </h2>
            <a href="/movie">
              <button className="buttonALT">Begin</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Test;
