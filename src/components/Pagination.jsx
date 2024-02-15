/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "../App.css";

function Pagination({ data, dataPerPage, currentPage, onPageChange, disableNext }) {
  const totalPages = Math.ceil(data?.length / dataPerPage);

  const handleClickNext = () => {
    onPageChange(currentPage + 1);
  };
  const handleClickPre = () => {
    onPageChange(currentPage - 1);
  };

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  return (
    <div className="btn-pagination">
      <button
        className="btn"
        onClick={handleClickPre}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="btn"
        onClick={handleClickNext}
        disabled={disableNext || currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
