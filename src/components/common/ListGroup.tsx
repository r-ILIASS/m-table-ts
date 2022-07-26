import { GenreType } from "../../lib/types";

const ListGroup = ({ data }: { data: GenreType[] }) => {
  return (
    <div>
      <ul>
        {data.map((element) => (
          <li key={element._id}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
