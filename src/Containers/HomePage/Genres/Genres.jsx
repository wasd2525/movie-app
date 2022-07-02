import React, { useEffect, useState, useContext } from "react";
import "./Genres.scss";
import { motion } from "framer-motion";
import MovieContext from "../../../MovieContext";
import { fetchGenres } from "../../../API/index";

const Genres = () => {
  const { updateMovieGenre, movie } = useContext(MovieContext); // gets stat and the set state of Genres
  const [genreList, setGenreList] = useState([]); // state with array of all genres on the api

  const selectGenre = (e) => {
    if (!movie.genres.find((x) => String(x.id) === String(e.target.id)))
      updateMovieGenre("add", { id: e.target.id, name: e.target.name });
    else updateMovieGenre("remove", e.target.id);
  };

  useEffect(() => {
    fetchGenres().then(({ data: { genres } }) => {
      setGenreList(genres);
    });
  }, []);

  return (
    <div className="app__genres app__flex">
      <div className="app__genres-badge">
        <div className="badge-cmp app__flex">
          <div style={{ padding: "2rem 0rem" }}>
            <h2 className="title-text">Pick a Genre</h2>
            <h2 className="p-text">Pick up to 4 Genres</h2>
          </div>

          <motion.div
          // whileInView={{ opacity: [0, 1] }}
          // transition={{ duration: 1 }}
          >
            {genreList.length !== 0 ? (
              <div className="grid">
                {genreList?.map((i) => (
                  <div key={i.id} className={`itemG span-col-2 span-row-2`}>
                    <button
                      name={i.name}
                      id={i.id}
                      onClick={selectGenre}
                      className={
                        movie.genres.find((x) => String(x.id) === String(i.id))
                          ? "button__selected-genre"
                          : "button__notselected-genre"
                      }
                    >
                      {i.name}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </motion.div>
          {console.log(movie)}
        </div>
      </div>
    </div>
  );
};

export default Genres;
