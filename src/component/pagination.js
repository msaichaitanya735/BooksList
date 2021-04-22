import React from 'react'
import '../App.css'

const Pagination = ({ perPage, totalBooks, paginate,currentPage }) => {
    const pageNumbers = [];
  console.log( perPage )
    for (let i = 1; i <= Math.ceil(totalBooks / perPage); i++) {
      pageNumbers.push(i);
    }
    console.log(pageNumbers.length)
  
    return (
      <nav>
          <ul className='pagination'>
          <li className='page-item'><a onClick={() => paginate(1)} href='!#' className='page_link'>
                start
              </a></li>
          <li className='page-item'><a onClick={() => (currentPage>2?paginate(currentPage-1):'')} href='!#' className='page_link'>
                Prev
              </a></li>
          {pageNumbers.map((number) => {
            if(Math.abs(number-currentPage)<3)
            if(Math.abs(number-currentPage)==0)
            return(
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='!#' className='pagelink'>
                {number}
              </a>
            </li>

          )
          else
          return(<li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='!#' className='page_link'>
                {number}
              </a>
            </li>)})}
          <li className='page-item'><a onClick={() => (currentPage<pageNumbers.length?paginate(currentPage+1):'')} href='!#' className='page_link'>
                Next
              </a></li>
          <li className='page-item'><a onClick={() => paginate(pageNumbers.length)} href='!#' className='page_link'>
                Final
              </a></li>
              
        </ul>

      </nav>
    );
  };

export default Pagination


