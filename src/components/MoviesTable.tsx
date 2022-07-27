import PaginationControls from "./common/PaginationControls";

import { MovieType } from "../lib/types";
import EmptyHeart from "../assets/empty-heart.svg";
import FullHeart from "../assets/full-heart.svg";
import { paginate } from "../lib/paginate";

// TODO: get the user from the state after auth
const user = false;

interface Props {
  data: MovieType[];
  currentPage: number;
  pageSize: number;
  selectedGenre: string;
  setCurrentPage: Function;
  handleLike: Function;
  handleDelete: Function;
}

const MoviesTable = ({
  data,
  currentPage,
  selectedGenre,
  pageSize,
  setCurrentPage,
  handleLike,
  handleDelete,
}: Props) => {
  // filter by genre
  let filtered;
  if (selectedGenre === "") filtered = [...data];
  else filtered = data.filter((x) => x.genre.name === selectedGenre);

  // paginate the data
  const paginatedData = paginate(currentPage, pageSize, filtered);

  return (
    <div className="w-full">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            {user && <th></th>}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>
                <span className="text-xs">$ </span>
                {movie.dailyRentalRate}
              </td>
              <td className="min-w-[54px]">
                {movie.isLiked ? (
                  <img
                    onClick={() => handleLike(movie)}
                    className="h-[1.5em] cursor-pointer"
                    src={FullHeart}
                  ></img>
                ) : (
                  <img
                    onClick={() => handleLike(movie)}
                    className="h-[1.5em] cursor-pointer"
                    src={EmptyHeart}
                  ></img>
                )}
              </td>
              {user && (
                <td>
                  <span
                    onClick={() => handleDelete(movie)}
                    className="btn-delete"
                  >
                    Delete
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationControls
        pageSize={pageSize}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        dataLength={filtered.length}
      />
    </div>
  );
};

export default MoviesTable;
