import React from 'react'
import './Pagination.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function Pagination({ cars, setPage, page }) {
  // total page
  const totalPages = Math.ceil(cars.length / 10)

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    )
      setPage(selectedPage)
  }

  return (
    <>
      <div className="pagination">
        <p>{`Page ${page} of ${totalPages}`}</p>

        <div className="pagi-btn">
          <span
            onClick={() => selectedPageHandler(page - 1)}
            className={page > 1 ? '' : 'pagination_disabled'}
          >
            <AiOutlineArrowLeft />
          </span>
          {/* map the total page */}
          {[...Array(totalPages)].map((ele, i) => {
            const pageNumber = i + 1
            return (
              <span
                className={page === pageNumber ? 'pagination_selected' : ''}
                onClick={() => selectedPageHandler(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </span>
            )
          })}
          <span
            onClick={() => selectedPageHandler(page + 1)}
            className={page < totalPages ? '' : 'pagination_disabled'}
          >
            <AiOutlineArrowRight />
          </span>
        </div>
      </div>
    </>
  )
}

export default Pagination
