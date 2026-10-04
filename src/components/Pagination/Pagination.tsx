import ReactPaginateImport from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

type ModuleWithDefault<T> = {
  default?: T;
};

const ReactPaginate =
  (
    ReactPaginateImport as typeof ReactPaginateImport &
      ModuleWithDefault<typeof ReactPaginateImport>
  ).default ?? ReactPaginateImport;

function Pagination({ pageCount, currentPage, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
}

export default Pagination;
