import { MovieType } from "../lib/types";
import EmptyHeart from "../assets/empty-heart.svg";
import FullHeart from "../assets/full-heart.svg";

// TODO: get the user from the state after auth
const user = false;

interface Props {
  data: MovieType[];
  handleLike: Function;
}

const MoviesTable = ({ data, handleLike }: Props) => {
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
          {data.map((element) => (
            <tr key={element._id}>
              <td>{element.title}</td>
              <td>{element.genre.name}</td>
              <td>{element.numberInStock}</td>
              <td>
                <span className="text-xs">$ </span>
                {element.dailyRentalRate}
              </td>
              <td className="min-w-[54px]">
                {element.isLiked ? (
                  <img
                    onClick={() => handleLike(element)}
                    className="h-[1.5em] cursor-pointer"
                    src={FullHeart}
                  ></img>
                ) : (
                  <img
                    onClick={() => handleLike(element)}
                    className="h-[1.5em] cursor-pointer"
                    src={EmptyHeart}
                  ></img>
                )}
              </td>
              {user && (
                <td>
                  <span className="btn-delete">Delete</span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesTable;
