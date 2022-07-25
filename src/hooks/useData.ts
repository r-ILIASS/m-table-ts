import { useState, useEffect } from "react";
import { getGenres } from "../lib/get";
import { GenreType } from "../lib/types";

export const useData = () => {
  const [genres, setGenres] = useState<GenreType[] | null>(null);
  // const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

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
    genres,
    loading,
    error,
  };
};
