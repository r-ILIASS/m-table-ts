const PaginationControls = () => {
  const currentPage = 2;
  const pages = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex space-x-3">
      {pages.map((page) => (
        <span
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
