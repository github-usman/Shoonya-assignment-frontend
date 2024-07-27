import React from "react";
import { useApiParamsContexts } from "../../contexts/ApiParamsContexts";

/**
 * PaginationUtils Component
 * 
 * This component handles pagination controls for navigating through pages of data.
 * It displays "Previous" and "Next" buttons for page navigation and renders page number buttons.
 * The page number buttons are conditionally rendered based on the current page and total number of pages.
 * 
 * It uses the `useApiParamsContexts` hook to get and set pagination-related state.
 */
const PaginationUtils = () => {
  
  const { setCurrentPage, currentPage, totalPages } = useApiParamsContexts();

  return (
    <div  className="flex flex-col gap-3 md:gap-0 xsm:flex-row items-center">
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={`bg-spaceCadet text-white rounded-3xl md:rounded-sm px-[16px] py-[8px]   ${currentPage === 1 ? 'opacity-70 cursor-default' : 'hover:shadow-hover-custom-shadow'}`}>
        Previous
      </button>
      <span>
        {totalPages && (
          <>
            {Array.from({ length: totalPages }, (_, i) => {
              //when active page less than 2

              if (currentPage <= 2) {
                if (i + 1 <= 2) {
                  return (
                    <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`${currentPage === i + 1 ? "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] bg-spaceCadet text-white hover:shadow-hover-custom-shadow" : "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] hover:shadow-hover-custom-shadow hover:bg-spaceCadet hover:text-white"}`} >
                      {i + 1}
                    </button>
                  );
                } else if (i + 1 === 3) {
                  return <button key={i + 1} >...</button>
                } else if (i + 1 >= totalPages - 1) {
                  return (
                    <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`${currentPage === i + 1 ? "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] bg-spaceCadet text-white hover:shadow-hover-custom-shadow" : "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] hover:shadow-hover-custom-shadow hover:bg-spaceCadet hover:text-white"}`}  >
                      {i + 1}
                    </button>
                  );
                }
                //IFF active page greater than  2
              } else if (currentPage <= totalPages - 2) {
                if (i + 1 === 1) {
                  return (
                    <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`${currentPage === i + 1 ? "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] bg-spaceCadet text-white hover:shadow-hover-custom-shadow" : "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] hover:shadow-hover-custom-shadow hover:bg-spaceCadet hover:text-white"}`} >
                      {i + 1}
                    </button>
                  );
                } else if (i + 1 === 2) {
                  return <button key={i + 1} >...</button>
                } else if (i + 1 === currentPage - 1 || i + 1 === currentPage + 1 || currentPage === i + 1) {
                  return (
                    <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`${currentPage === i + 1 ? "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] bg-spaceCadet text-white hover:shadow-hover-custom-shadow" : "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] hover:shadow-hover-custom-shadow hover:bg-spaceCadet hover:text-white"}`}  >
                      {i + 1}
                    </button>
                  );
                } else if (i + 1 === totalPages) {
                  return <button key={i+1} ><p className="inline">...</p><p onClick={() => setCurrentPage(i + 1)} className={`inline ${currentPage === i + 1 ? "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] bg-spaceCadet text-white hover:shadow-hover-custom-shadow" : "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] hover:shadow-hover-custom-shadow hover:bg-spaceCadet hover:text-white"}`}  > {i + 1} </p>
                  </button>
                }
                return null;

              } else {

                // IFF active page is one of the last two pages
                if (i + 1 <= 2) {
                  return (
                    <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`${currentPage === i + 1 ? "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] bg-spaceCadet text-white hover:shadow-hover-custom-shadow" : "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] hover:shadow-hover-custom-shadow hover:bg-spaceCadet hover:text-white"}`} >
                      {i + 1}
                    </button>
                  );
                } else if (i + 1 === 3) {
                  return <button key={i + 1} >...</button>
                } else if (i + 1 >= totalPages - 1) {
                  return (
                    <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`${currentPage === i + 1 ? "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] bg-spaceCadet text-white hover:shadow-hover-custom-shadow" : "border-[2px] mx-1 rounded-3xl md:rounded-sm border-solid border-spaceCadet p-[6px] hover:shadow-hover-custom-shadow hover:bg-spaceCadet hover:text-white"}`}  >
                      {i + 1}
                    </button>
                  );
                }
              }
              return null;
            })}
          </>
        )}
      </span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={`bg-spaceCadet text-white rounded-3xl md:rounded-sm px-[16px] py-[8px]  ${currentPage >= totalPages ? 'opacity-70 cursor-default' : 'hover:shadow-hover-custom-shadow'}`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationUtils;