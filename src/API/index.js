import axios from "axios";

const instance = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export const fetchGenres = async () => {
  try {
    const request = await instance.get(
      `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovie = async (id) => {
  try {
    const request = await instance.get(
      `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSimilar = async (id) => {
  try {
    const request = await instance.get(
      `/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrailer = async (id) => {
  try {
    const request = await instance.get(
      `/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieID = async (decade, genres, length) => {
  try {
    const request = await instance.get(
      `/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${
        decade.from
      }-01-01&primary_release_date.lte=${
        decade.to
      }-12-31&with_genres=${genres.join("%2C")}&with_runtime.gte=${
        length.from
      }&with_runtime.lte=${length.to}&with_watch_monetization_types=flatrate`
    );

    return request;
  } catch (error) {
    console.log(error);
  }
};
