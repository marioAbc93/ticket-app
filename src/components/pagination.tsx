import { PaginationProps } from "../models/types";

export const Pagination = ({ pagination, onPageChange }: PaginationProps) => {
  if (!pagination || pagination.total_pages <= 1) return null;

  const generatePageButtons = () => {
    const totalPages = pagination.total_pages;
    const currentPage = pagination.current_page;
    const pageButtons = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <li key={i}>
            <a
              href="#"
              onClick={() => onPageChange(i)}
              className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 ${
                i === currentPage
                  ? "text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                  : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {i}
            </a>
          </li>
        );
      }
    } else {
      pageButtons.push(
        <li key={1}>
          <a
            href="#"
            onClick={() => onPageChange(1)}
            className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 ${
              currentPage === 1
                ? "text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            1
          </a>
        </li>
      );

      if (currentPage > 3) {
        pageButtons.push(<li key="start-dots">...</li>);
      }

      let startPage = currentPage - 1;
      let endPage = currentPage + 1;

      if (currentPage <= 3) {
        startPage = 2;
        endPage = 4;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }

      startPage = Math.max(startPage, 2);
      endPage = Math.min(endPage, totalPages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
          <li key={i}>
            <a
              href="#"
              onClick={() => onPageChange(i)}
              className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 ${
                i === currentPage
                  ? "text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                  : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {i}
            </a>
          </li>
        );
      }

      if (currentPage < totalPages - 2) {
        pageButtons.push(<li key="end-dots">...</li>);
      }

      pageButtons.push(
        <li key={totalPages}>
          <a
            href="#"
            onClick={() => onPageChange(totalPages)}
            className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 ${
              currentPage === totalPages
                ? "text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            {totalPages}
          </a>
        </li>
      );
    }

    return pageButtons;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <button
            onClick={() => onPageChange(pagination.current_page - 1)}
            disabled={pagination.current_page === 1}
            className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${
              pagination.current_page === 1 ? "cursor-not-allowed" : ""
            }`}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>

        {generatePageButtons()}

        <li>
          <button
            onClick={() => onPageChange(pagination.current_page + 1)}
            disabled={pagination.current_page === pagination.total_pages}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${
              pagination.current_page === pagination.total_pages
                ? "cursor-not-allowed"
                : ""
            }`}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};
