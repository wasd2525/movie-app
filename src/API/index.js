import axios from "axios";

const instance = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export const fetchGenres = async () => {
  try {
    const request = await instance.get(
      `/genre/movie/list?api_key=ccba5e877c1dae0c4d6ee7398e0fe4e6&language=en-US`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovie = async (id) => {
  try {
    const request = await instance.get(
      `/movie/${id}?api_key=ccba5e877c1dae0c4d6ee7398e0fe4e6&language=en-US`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSimilar = async (id) => {
  try {
    const request = await instance.get(
      `/movie/${id}/similar?api_key=ccba5e877c1dae0c4d6ee7398e0fe4e6&language=en-US&page=1`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrailer = async (id) => {
  try {
    const request = await instance.get(
      `/movie/${id}/videos?api_key=ccba5e877c1dae0c4d6ee7398e0fe4e6&language=en-US`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};
