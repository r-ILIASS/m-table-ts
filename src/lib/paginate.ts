/** returns elements on the current selected
 * page respective to the page size */
export const paginate = (
  currentPage: number,
  pageSize: number,
  items: any[]
) => {
  const indexOfLastPage = currentPage * pageSize;
  const indexOfFirstPage = indexOfLastPage - pageSize;
  return items.slice(indexOfFirstPage, indexOfLastPage) as any[];
};
