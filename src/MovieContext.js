import { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  // main state of app, keeps all data that is required to fetch final movie
  const [movie, setMovie] = useState({
    genres: [],
    length: { from: null, to: null },
    decades: { from: null, to: null },
    watchProvider: "",
  });

  const updateMovieGenre = (action, movieData) => {
    if (action === "add" && movie.genres.length < 4)
      setMovie({ ...movie, genres: [...movie.genres, movieData] });
    else
      setMovie({
        ...movie,
        genres: movie.genres.filter((genre) => genre.id !== movieData),
      });
  };
  const updateMovieLength = (action, movieData) => {
    if (action === "add") {
      switch (movieData) {
        case "short":
          setMovie({ ...movie, length: { from: 87, to: 105 } });
          break;
        case "med":
          setMovie({ ...movie, length: { from: 106, to: 120 } });
          break;
        case "long":
          setMovie({ ...movie, length: { from: 121, to: 1000 } });
          break;
        default:
          setMovie({ ...movie, length: null });
      }
    } else setMovie({ ...movie, length: { from: null, to: null } });
  };

  const updateMovieDecade = (action, movieData) => {
    if (action === "add") {
      switch (movieData) {
        case "retro":
          setMovie({ ...movie, decades: { from: 1927, to: 1989 } });
          break;
        case "1990s":
          setMovie({ ...movie, decades: { from: 1990, to: 1999 } });
          break;
        case "2000s":
          setMovie({ ...movie, decades: { from: 2000, to: 2009 } });
          break;
        case "2010s":
          setMovie({ ...movie, decades: { from: 2010, to: 2022 } });
          break;
        default:
          setMovie({ ...movie, decades: { from: 2010, to: 2022 } });
      }
    } else setMovie({ ...movie, decades: { from: null, to: null } });
  };

  return (
    <MovieContext.Provider
      value={{ movie, updateMovieGenre, updateMovieLength, updateMovieDecade }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
