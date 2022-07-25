import { GenreType } from "../../lib/types";

const ListGroup = ({ data }: { data: GenreType[] | null }) => {
  return (
    <ul>
      {data && data.map((element) => <li key={element._id}>{element.name}</li>)}
    </ul>
  );
};

export default ListGroup;
