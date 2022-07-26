import { useState, useEffect } from "react";
import { getGenres } from "../lib/genresService";
import { getMovies, toggleMovieLike, deleteMovie } from "../lib/moviesService";
import { MovieType, GenreType } from "../lib/types";

const initialGenre: GenreType = {
  _id: "",
  name: "",
};

const initialMovie: MovieType = {
  _id: "",
  title: "",
  genre: initialGenre,
  dailyRentalRate: 0,
  numberInStock: 0,
  isLiked: false,
};

// fetches all needed data and manages the global state
export const useData = () => {
  const [movies, setMovies] = useState<MovieType[]>([initialMovie]);
  const [genres, setGenres] = useState<GenreType[]>([initialGenre]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const pageSize = 15;

  const fetchData = async () => {
    try {
      setLoading(true);
      // fetch movies
      const { data: movies } = await getMovies();
      setMovies(movies);
      // fetch genres
      const { data: genres } = await getGenres();
      setGenres(genres);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // handlers
  const handleLike = async (movie: MovieType) => {
    try {
      await toggleMovieLike(movie);
      /* UPDATE THE UI */
      const tmpState = [...movies];
      const indexOfLiked = movies.indexOf(movie);
      tmpState[indexOfLiked].isLiked = !tmpState[indexOfLiked].isLiked;
      setMovies(tmpState);
    } catch (error) {
      // TODO: log error somewhere
      console.log("ERROR ON LIKE", error);
    }
  };

  const handleDelete = async (movie: MovieType) => {
    try {
      // delete movie on the backend
      await deleteMovie(movie);
      /* UPDATE THE UI */
      const tmpState = movies.filter((x) => x._id !== movie._id);
      setMovies(tmpState);
    } catch (error) {
      // TODO: log error somewhere
      console.log("ERROR ON DELETE", error);
    }
  };

  return {
    movies,
    genres,
    selectedGenre,
    setSelectedGenre,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    pageSize,
    handleLike,
    handleDelete,
    loading,
    error,
  };
};
