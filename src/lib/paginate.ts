/** Gets elements on the current page respective to pageSize */
export const paginate = (
  currentPage: number,
  pageSize: number,
  items: any[]
) => {
  const indexOfLastPage = currentPage * pageSize;
  const indexOfFirstPage = indexOfLastPage - pageSize;
  return items.slice(indexOfFirstPage, indexOfLastPage) as any[];
};
