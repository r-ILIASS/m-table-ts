import { useData } from "../hooks/useData";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./MoviesTable";

const Hero = () => {
  const { movies, genres, handleLike, handleDelete, loading, error } =
    useData();

  if (error) return <p>Something went wrong</p>;
  if (loading) return <p>Loading ...</p>;

  return (
    <main className="px-5 py-10 max-w-7xl mx-auto flex space-x-16">
      <ListGroup data={genres} />
      <MoviesTable
        data={movies}
        handleLike={handleLike}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default Hero;
