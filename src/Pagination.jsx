import React from "react"


function Pagination(props){

const {flightInfo} = props;  
const { flightsPerPage ,handleClickPagination, handleNextPage, handlePreviousPage ,isActive , currentPage } = props 

// Logic for displaying page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(flightInfo.length / flightsPerPage); i++) {
  pageNumbers.push(i);
}

const renderPageNumbers = pageNumbers.map(number => {
  
 return (
   <li
     className={ currentPage === number ? 'active page-item page-link' : 'page-item page-link'}
     key={number}
     id={number}
     onClick={handleClickPagination}
   >
     {number}
   </li>
 );
 });
  return (
    <ul className="pagination"> 
      <li 
        className="page-item page-link previous"
        onClick={handlePreviousPage}>
        Previous
      </li>

        {renderPageNumbers}

      <li
        className="page-item page-link next" 
        onClick= {handleNextPage}>
        Next
      </li>
   </ul>
  )
}

export default Pagination