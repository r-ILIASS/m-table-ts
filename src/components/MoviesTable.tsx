import HeartIcon from "../assets/empty-heart.svg";

const MoviesTable = () => {
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
          <tr>
            <td>Movie title</td>
            <td>Drama</td>
            <td>132</td>
            <td>12</td>
            <td>
              <img src={HeartIcon} alt="like" />
            </td>
            <td>
              <span className="btn-delete">Delete</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MoviesTable;
