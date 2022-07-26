import { useState, useEffect } from "react";
import { getGenres } from "../lib/genresService";
import { getMovies, toggleMovieLike } from "../lib/moviesService";
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

export const useData = () => {
  const [movies, setmovies] = useState<MovieType[]>([initialMovie]);
  const [genres, setGenres] = useState<GenreType[]>([initialGenre]);
  // const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      // fetch movies
      const { data: movies } = await getMovies();
      setmovies(movies);

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
      const res = await toggleMovieLike(movie);
      console.log("res", res);
    } catch (error) {
      // TODO: log error somewhere
      console.log(error);
    }
  };

  return {
    movies,
    genres,
    handleLike,
    loading,
    error,
  };
};
