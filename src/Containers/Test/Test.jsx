import React, { useEffect, useState } from "react";
import "./Test.scss";
import { motion } from "framer-motion";
import { fetchMovie, fetchTrailer, fetchSimilar } from "../../API/index";

import { useParams, Link } from "react-router-dom";

const Test = () => {
  const [movie, setMovie] = useState({});
  const [similar, setSimilar] = useState([]);
  const [trailer, setTrailer] = useState([]);
  let { id } = useParams();

  const imgUrl = "https://image.tmdb.org/t/p/original";
  const imgUrlS = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetchMovie(id).then((req) => {
      setMovie(req.data);
    });
    fetchTrailer(id).then((req) => {
      setTrailer(req.data.results);
    });
    fetchSimilar(id).then((req) => {
      setSimilar(req.data.results);
    });
  }, []);

  return (
    <div className="app__test app__flex">
      {console.log(movie)}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__test-info"
      >
        <div className="app__test-badge">
          <div className="badge-cmp app__flex">
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
                filter: "brightness(50%)",
              }}
              src={`${imgUrl}${movie?.backdrop_path}`}
            />
            <div style={{ left: "3%" }} className="movie-data-cmp">
              <h2 style={{ marginBottom: "10px" }}>
                {movie?.original_title} ({movie.release_date?.slice(0, 4)})
              </h2>

              <h4>
                {movie.genres?.map((genre) => genre.name + " ")}
                <br />
                Runtime: {movie.runtime}m
              </h4>
              <div>
                <a
                  href={`https://www.youtube.com/watch?v=${
                    trailer.filter((video) => video.type == "Trailer")[0]?.key
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="button">Trailer</button>
                </a>
                <a
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    style={{ backgroundColor: "#f3ce13" }}
                    className="button"
                  >
                    IMDB
                  </button>
                </a>
              </div>
            </div>
            <div style={{ right: "3%" }} className="movie-data-cmp">
              <div>
                <a
                  href={`https://www.youtube.com/watch?v=${
                    trailer.filter((video) => video.type == "Trailer")[0]?.key
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    style={{
                      width: "5vw",
                      height: "8vh",
                    }}
                    className="buttonP"
                  >
                    <img
                      style={{
                        width: "50px",
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                      }}
                      src={`${imgUrl}/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg`}
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="badge-cmp-desc app__flex">
            <h3>{movie?.overview}</h3>
          </div>
          <div style={{ width: "100%", padding: "3rem 2rem 1rem 1rem" }}>
            <h3
              style={{ fontSize: "2.5rem", textAlign: "left" }}
              className="title-text"
            >
              Recommended Movies
            </h3>
          </div>
          <div className="app__recommended">
            {similar.slice(0, 4).map((simMovie) => (
              <a style={{ display: "flex" }} href={`/test/${simMovie.id}`}>
                <div
                  style={{ margin: "1rem", padding: "0px" }}
                  className="badge-cmp-desc app__flex"
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                      filter: "brightness(70%)",
                    }}
                    src={`${imgUrlS}${simMovie?.backdrop_path}`}
                  />
                  <div className="movie-data-cmp">
                    <h2>{simMovie?.title}</h2>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="copyright">
            <div className="copyright-wrapper">
              <p className="p-text">a project by ben hazan</p>
              <p className="p-text">@2022</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Test;
