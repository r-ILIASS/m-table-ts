import { useState, useEffect } from "react";
import { getGenres } from "../lib/genresService";
import { getMovies } from "../lib/moviesService";
import { GenreType } from "../lib/types";

export const useData = () => {
  const [movies, setmovies] = useState(null);
  const [genres, setGenres] = useState<GenreType[] | null>(null);
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

  return {
    movies,
    genres,
    loading,
    error,
  };
};
