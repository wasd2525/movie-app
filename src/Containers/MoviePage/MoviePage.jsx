import React, { useEffect, useState } from "react";
import "./MoviePage.scss";
import { motion } from "framer-motion";
import { fetchMovie, fetchTrailer, fetchSimilar } from "../../API/index";
import dis from "../../assets/dis.png";
import noData from "../../assets/nodata.jpg";
import noDataAlt from "../../assets/nodataalt.jpg";

import { useParams } from "react-router-dom";

const MoviePage = () => {
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
  }, [id]);

  return (
    <div className="app__movie app__flex">
      {console.log(movie)}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__movie-info"
      >
        <div className="app__movie-badge">
          <div
            style={{ backgroundColor: "#FFF" }}
            className="badge-cmp app__flex"
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
                filter: "brightness(50%)",
              }}
              alt="backdrop"
              src={
                movie?.backdrop_path
                  ? `${imgUrl}${movie?.backdrop_path}`
                  : noData
              }
            />

            <div style={{ left: "3%" }} className="movie-data-cmp">
              <div style={{ paddingBottom: "20px" }}>
                {/* <a
                  href={`https://www.youtube.com/watch?v=${
                    trailer.filter((video) => video.type === "Trailer")[0]?.key
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    style={{
                      height: "5vh",
                      marginRight: "10px",
                    }}
                    className="buttonP"
                  >
                    <img
                      style={{
                        width: "30px",
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                      }}
                      alt="netflix"
                      src={`${imgUrl}/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg`}
                    />
                  </button>
                </a> */}
                <a
                  href={`https://www.youtube.com/watch?v=${
                    trailer.filter((video) => video.type === "Trailer")[0]?.key
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    style={{
                      height: "5vh",
                      backgroundColor: "white",
                    }}
                    className="buttonP"
                  >
                    <img
                      style={{
                        width: "40px",
                      }}
                      alt="disney"
                      src={dis}
                    />
                  </button>
                </a>
              </div>
              <h2 style={{ marginBottom: "10px" }}>
                {movie?.title} ({movie.release_date?.slice(0, 4)})
              </h2>

              <h4>
                {movie.genres?.map((genre) => genre.name).join(" - ")}
                <br />
                Runtime: {movie.runtime}m
              </h4>
              <div>
                <a
                  href={`https://www.youtube.com/watch?v=${
                    trailer.filter((video) => video.type === "Trailer")[0]?.key
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
              {/* Should reset state instead of redirecting */}
              <a href={`/movie`} rel="noreferrer">
                <button
                  style={{
                    backgroundColor: "var(--button-color",
                    width: "13rem",
                    color: "#fcf8e8",
                  }}
                  className="button"
                >
                  Restart
                </button>
              </a>
            </div>
          </div>

          <div
            style={{
              border: "1px solid",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            className="badge-cmp-desc app__flex"
          >
            <h2 style={{ color: "var(--button-color-alt)" }}>Description:</h2>
            <br />
            <h3 style={{ color: "#333333" }}>{movie?.overview}</h3>
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
              <a style={{ display: "flex" }} href={`/movie/${simMovie.id}`}>
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
                    alt="backdrop"
                    src={
                      simMovie?.backdrop_path
                        ? `${imgUrlS}${simMovie?.backdrop_path}`
                        : noDataAlt
                    }
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

export default MoviePage;
