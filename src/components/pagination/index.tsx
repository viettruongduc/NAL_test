import React from 'react'
import usePagination from './usePagination'

interface Props {
  totalPosts: number
}

const Pagination: React.FC<Props> = ({ totalPosts }) => {
  const {
    handlePageClick,
    handlePreviousPageClick,
    handleNextPageClick,
    pageNumbers,
    currentPage
  } = usePagination(totalPosts)

  return (
    <nav>
      <ul className="pagination">
        <li onClick={handlePreviousPageClick} className="page-item">
          <p className="page-link cursor-pointer">Prev</p>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => handlePageClick(number)}
            className={`page-item ${currentPage === number ? 'active' : ''}`}
          >
            <p className="page-link cursor-pointer">{number}</p>
          </li>
        ))}
        <li onClick={handleNextPageClick} className="page-item">
          <p className="page-link">Next</p>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
