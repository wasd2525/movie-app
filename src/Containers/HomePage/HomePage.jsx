import React from "react";
import "./HomePage.scss";
import { motion } from "framer-motion";
import movieIcon from "../../assets/movie.svg";
import randomovie from "../../assets/randomovie.svg";

const HomePage = () => {
  return (
    <div className="app__home app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__home-info"
      >
        <div className="app__flex-home">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 className="title-text">
              Welcome to
              {/* <span style={{ color: "#94b49f" }}>Movie</span> */}
            </h2>
            <img
              style={{ width: "30vw", marginTop: "20px" }}
              src={randomovie}
              alt="logo"
            />
            <a href="/movie">
              <button className="buttonALT">Begin</button>
            </a>
          </div>
          <img alt="background" src={movieIcon} className="movieIMG" />
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
