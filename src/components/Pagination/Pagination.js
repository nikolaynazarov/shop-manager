import React, { useState } from 'react'

import './Pagination.scss'

const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber) => {
    setActivePage(pageNumber)
    setCurrentPage(pageNumber)
  };

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setActivePage(currentPage + 1)
      setCurrentPage(prevState => prevState + 1)
    } else {
      return
    }
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setActivePage(currentPage - 1)
      setCurrentPage(prevState => prevState - 1)
    } else {
      return
    }
  }

  return (
    <nav>
      <ul className="pagination">
        <span className="pagination-link" onClick={ previousPage }>&laquo;</span>
        { pageNumbers.map(number => (
          <li key={ number } className="pagination-item">
            <span
              className={ `pagination-link ${number === activePage ? 'active' : ''}` }
              onClick={ () => paginate(number) }>
              { number }
            </span>
          </li>
        )) }
        <span className="pagination-link" onClick={ nextPage }>&raquo;</span>
      </ul>
    </nav>
  )
}

export default Pagination
