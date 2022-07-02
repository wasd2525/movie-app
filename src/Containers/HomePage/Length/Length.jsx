import React, { useContext } from "react";
import "./Length.scss";
import { motion } from "framer-motion";
import MovieContext from "../../../MovieContext";

const Length = () => {
  const { updateMovieLength, movie } = useContext(MovieContext);

  const selectLength = (e) => {
    updateMovieLength("add", e.target.name);
  };

  return (
    <div className="app__length app__flex">
      <motion.div
        // whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        // transition={{ duration: 0.5 }}
        className="app__length-info"
      >
        <div className="app__length-badge">
          <div className="badge-cmp app__flex">
            <div style={{ padding: "2rem 1rem" }}>
              <h2 className="title-text">Pick a Length</h2>
              <h2 className="p-text">______</h2>
            </div>
            {console.log(movie)}
            <div className="app__length-buttons">
              <button
                name="short"
                className={
                  movie.length.from !== 87 || movie.length.from == null
                    ? "button__notselected-length"
                    : "button__selected-length"
                }
                onClick={selectLength}
              >
                I'm looking for a short movie.
              </button>
              <button
                name="med"
                className={
                  movie.length.from !== 106 || movie.length.from == null
                    ? "button__notselected-length"
                    : "button__selected-length"
                }
                onClick={selectLength}
              >
                I'm looking for a something in the middle.
              </button>
              <button
                name="long"
                length="121"
                className={
                  movie.length.from !== 121 || movie.length.from == null
                    ? "button__notselected-length"
                    : "button__selected-length"
                }
                onClick={selectLength}
              >
                I'm looking for a long movie.
              </button>
              {console.log(movie)}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Length;
