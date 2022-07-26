import http from "./httpService";
import { MovieType } from "./types";

export const getMovies = () => {
  return http.get("/movies");
};

export const toggleMovieLike = (movie: MovieType) => {
  if (movie._id) {
    interface RequestBody {
      title: string;
      genreId: string;
      numberInStock: number;
      dailyRentalRate: number;
      isLiked: boolean;
    }
    // reshape the object to match the
    // API's request object structure
    const requestBody: RequestBody = {
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
      isLiked: !movie.isLiked,
    };
    // return a Promise that saves updates
    // the new object on the database
    return http.put(`/movies/${movie._id}`, requestBody);
  }
};

export const deleteMovie = (movie: MovieType) => {
  return http.delete(`/movies/${movie._id}`);
};
