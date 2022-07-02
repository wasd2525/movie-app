import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Decades.scss";
import { motion } from "framer-motion";
import MovieContext from "../../../MovieContext";
import { fetchMovieID } from "../../../API";

const Decades = () => {
  // gets state and the set state of Decades
  const { updateMovieDecade, movie } = useContext(MovieContext);
  const navigate = useNavigate();

  const hasDecade = () => {
    return movie.decades.from === null;
  };

  // adds selected decade to state
  const selectDecade = (e) => {
    updateMovieDecade("add", e.target.name);
  };

  /* gets user data and fetches an array of movies according to user data
   gets random movie ID from array of movies and navigates to MoviePage
   with the selected random ID as a url param */

  const fetchMovie = async () => {
    const { data } = await fetchMovieID(
      movie.decades,
      movie.genres.map((genre) => genre.id),
      movie.length
    );
    if (data.results[Math.floor(Math.random() * data.results.length)])
      navigate(
        `/movie/${
          data.results[Math.floor(Math.random() * data.results.length)].id
        }`
      );
    else navigate(`/404`);
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
            </div>
            {console.log(movie)}
            <div className="app__decades-buttons">
              <button
                className={
                  movie.decades.from !== 1927 || movie.decades.from == null
                    ? "button__notselected-decades"
                    : "button__selected-decades"
                } // checks if button is selected by checking the state to see if decade wasn't selected or is equal to null
                onClick={(e) => selectDecade(e)}
                name="retro"
              >
                Retro
              </button>
              <button
                className={
                  movie.decades.from !== 1990 || movie.decades.from == null
                    ? "button__notselected-decades"
                    : "button__selected-decades"
                }
                onClick={(e) => selectDecade(e)}
                name="1990s"
              >
                1990s
              </button>
              <button
                className={
                  movie.decades.from !== 2000 || movie.decades.from == null
                    ? "button__notselected-decades"
                    : "button__selected-decades"
                }
                onClick={(e) => selectDecade(e)}
                name="2000s"
                decade="121"
              >
                2000s
              </button>
              <button
                className={
                  movie.decades.from !== 2010 || movie.decades.from == null
                    ? "button__notselected-decades"
                    : "button__selected-decades"
                }
                onClick={(e) => selectDecade(e)}
                name="2010s"
                decade="121"
              >
                2010s
              </button>
            </div>
            <button
              onClick={() => fetchMovie()}
              style={hasDecade() ? { backgroundColor: "lightgray" } : null}
              disabled={hasDecade()}
              className="buttonALT2"
            >
              find movie
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Decades;
