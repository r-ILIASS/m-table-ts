import http from "./httpService";

export const getMovies = () => {
  return http.get("/movies");
};

