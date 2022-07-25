import http from "./httpService";
import { MovieType } from "./types";

export const getMovies = () => {
  return http.get("/movies");
};

export const toggleMovieLike = (movie: MovieType) => {
  console.log("toggle like on movie: ", movie);
};
