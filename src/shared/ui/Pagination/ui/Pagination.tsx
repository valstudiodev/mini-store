import { PaginationProps } from '../model/pagination.types';
import '../styles/pagination.scss';
import { ChevronRight } from "lucide-react";

function Pagination({
  currentPage,
  onPageChange,
  totalPages
}: PaginationProps) {
  const pagination = 'pagination'

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  const handlePrev = (): void => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = (): void => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <nav
      aria-label='pagination'
      className={pagination}>
      <ul className={`${pagination}__list`}>

        <li className={`${pagination}__item`}>
          <button
            type='button'
            onClick={handlePrev}
            disabled={currentPage === 1}
            aria-label='Go to previous page'
            className={`${pagination}__btn ${pagination}__btn--left`}
          >
            <ChevronRight size={45} />
          </button>
        </li>

        {pages.map((page) => (
          <li
            key={page}
            className={`${pagination}__item`}>
            <button
              type='button'
              onClick={() => onPageChange(page)}
              className={`${pagination}__btn ${page === currentPage ? 'is-active' : ''}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        <li className={`${pagination}__item`}>
          <button
            type='button'
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label='Go to next page'
            className={`${pagination}__btn ${pagination}__btn--rigth`}
          >
            <ChevronRight size={45} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;