import React, { useEffect, useState, useContext } from "react";
import "./Genres.scss";
import { motion } from "framer-motion";
import MovieContext from "../../../MovieContext";
import { fetchGenres } from "../../../API/index";

const Genres = () => {
  const { updateMovieGenre, movie } = useContext(MovieContext);

  const [genreList, setGenreList] = useState();

  const selectGenre = (e) => {
    if (!movie.genres.find((x) => x.id == e.target.id))
      updateMovieGenre("add", { id: e.target.id, name: e.target.name });
    else updateMovieGenre("remove", e.target.id);
  };

  useEffect(() => {
    fetchGenres().then((req) => {
      setGenreList(req.data.genres);
    });
  }, []);

  return (
    <div className="app__genres app__flex">
      <motion.div
        // whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        // transition={{ duration: 1 }}
        className="app__genres-info"
      >
        <div className="app__genres-badge">
          <div className="badge-cmp app__flex">
            <div style={{ padding: "2rem 0rem" }}>
              <h2 className="title-text">Pick a Genre</h2>
              <h2 className="p-text">Pick up to 4 Genres</h2>
            </div>

            <div className="grid">
              {genreList?.map((i) => (
                <div className={`itemG span-col-2 span-row-2`}>
                  <button
                    name={i.name}
                    id={i.id}
                    onClick={selectGenre}
                    className={
                      movie.genres.find((x) => x.id == i.id)
                        ? "button__selected-genre"
                        : "button__notselected-genre"
                    }
                  >
                    {i.name}
                  </button>
                </div>
              ))}
            </div>
            {console.log(movie)}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Genres;
