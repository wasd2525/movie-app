import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Decades.scss";
import { motion } from "framer-motion";
import MovieContext from "../../../MovieContext";
import { fetchMovieID } from "../../../API";

const Decades = () => {
  const { updateMovieDecade, movie } = useContext(MovieContext);
  const navigate = useNavigate();

  const selectDecade = (e) => {
    updateMovieDecade("add", e.target.name);
  };

  const fetchMovie = async () => {
    const id = await fetchMovieID(
      movie.decades,
      movie.genres.map((genre) => genre.id),
      movie.length
    );
    navigate(`/movie/${id.data.results[0].id}`);
  };

  return (
    <div className="app__decades app__flex">
      <motion.div
        // whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        // transition={{ duration: 0.5 }}
        className="app__decades-info"
      >
        <div className="app__decades-badge">
          <div className="badge-cmp app__flex">
            <div style={{ padding: "2rem 1rem" }}>
              <h2 className="title-text">Pick a Decade</h2>
              <h2 className="p-text">______</h2>
            </div>
            {console.log(movie)}
            <div className="app__decades-buttons">
              <button
                className={
                  movie.decades.from != 1927 || movie.decades.from == null
                    ? "button__notselected-decades"
                    : "button__selected-decades"
                }
                onClick={selectDecade}
                name="retro"
              >
                Retro
              </button>
              <button
                className={
                  movie.decades.from != 1990 || movie.decades.from == null
                    ? "button__notselected-decades"
                    : "button__selected-decades"
                }
                onClick={selectDecade}
                name="1990s"
              >
                1990s
              </button>
              <button
                className={
                  movie.decades.from != 2000 || movie.decades.from == null
                    ? "button__notselected-decades"
                    : "button__selected-decades"
                }
                onClick={selectDecade}
                name="2000s"
                decade="121"
              >
                2000s
              </button>
              <button
                className={
                  movie.decades.from != 2010 || movie.decades.from == null
                    ? "button__notselected-decades"
                    : "button__selected-decades"
                }
                onClick={selectDecade}
                name="2010s"
                decade="121"
              >
                2010s
              </button>
            </div>
            <button onClick={fetchMovie} className="buttonALT2">
              find movie
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Decades;
