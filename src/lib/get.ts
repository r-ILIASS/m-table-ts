import http from "./httpService";

export const getGenres = () => {
  return http.get("/genres");
};

export const getMovies = () => {
  return http.get("/movies");
};
