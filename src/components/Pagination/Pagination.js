import React from 'react'

import './Pagination.scss'

const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage, numberOfPages = 3 }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  const pagesBefore = currentPage > numberOfPages ? pageNumbers[currentPage - 2] - numberOfPages : pageNumbers[0] - 1;
  const pagesAfter = pageNumbers[currentPage - 1] + numberOfPages;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(prevState => prevState + 1)
    } else {
      return
    }
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(prevState => prevState - 1)
    } else {
      return
    }
  }

  const getFirstPage = () => {
    setCurrentPage(pageNumbers[0])
  }

  const getLastPage = () => {
    setCurrentPage(pageNumbers[pageNumbers.length - 1])
  }

  return (
    <nav>
      <ul className="pagination">
        <span className="pagination-link" onClick={ getFirstPage }>&laquo;</span>
        <span className="pagination-link" onClick={ previousPage }>&lt;</span>
        { pageNumbers
          .slice(pagesBefore, pagesAfter)
          .map(number => (
            <li key={ number } className="pagination-item">
              <span
                className={ `pagination-link ${number === currentPage ? 'active' : ''}` }
                onClick={ () => paginate(number) }>
                { number }
              </span>
            </li>
          )) }
        <span className="pagination-link" onClick={ nextPage }>&gt;</span>
        <span className="pagination-link" onClick={ getLastPage }>&raquo;</span>
      </ul>
    </nav>
  )
}

export default Pagination
