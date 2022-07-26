import _ from "lodash";

interface Props {
  currentPage: number;
  dataLength: number;
  pageSize: number;
  setCurrentPage: Function;
}

const PaginationControls = ({
  currentPage,
  pageSize,
  setCurrentPage,
  dataLength,
}: Props) => {
  const pagesCount = Math.ceil(dataLength / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="flex space-x-3 select-none">
      {pages.map((page) => (
        <span
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`${
            currentPage === page && "bg-blue-500 text-white font-semibold"
          } ${
            currentPage !== page && "border"
          } border-gray-400 rounded-full w-[2.3rem] h-[2.3rem] cursor-pointer hover:scale-95 duration-50 grid place-items-center text-xs text-gray-400`}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default PaginationControls;
