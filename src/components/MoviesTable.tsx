import { Movie } from "../lib/types";
import EmptyHeart from "../assets/empty-heart.svg";
import FullHeart from "../assets/full-heart.svg";

const MoviesTable = ({ data }: { data: Movie[] | null }) => {
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((element) => (
              <tr key={element._id}>
                <td>{element.title}</td>
                <td>{element.genre.name}</td>
                <td>{element.numberInStock}</td>
                <td>{element.dailyRentalRate}</td>
                <td className="min-w-[54px]">
                  {element.isLiked ? (
                    <img className="h-[1.5em]" src={FullHeart}></img>
                  ) : (
                    <img className="h-[1.5em]" src={EmptyHeart}></img>
                  )}
                </td>
                <td>
                  <span className="btn-delete">Delete</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesTable;
