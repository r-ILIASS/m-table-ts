import { GenreType } from "../../lib/types";

interface Props {
  data: GenreType[];
  selectedItem: string;
  setSelectedItem: Function;
}

const ListGroup = ({ data, selectedItem, setSelectedItem }: Props) => {
  return (
    <div>
      <ul>
        {data.map((element) => (
          <li
            key={element._id}
            onClick={() =>
              selectedItem === element.name
                ? setSelectedItem("")
                : setSelectedItem(element.name)
            }
            className={`${
              element.name === selectedItem &&
              "bg-blue-100 text-blue-500 font-semibold"
            }`}
          >
            {element.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
