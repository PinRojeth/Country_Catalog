/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import "../App.css";

function Sorted({ sortCountry, onSortedData }) {
  // function sort Ascending by calling data from prop
  const handleAscClick = () => {
    const strAscending = [...sortCountry].sort((a, b) => {
      return a?.name?.official > b?.name?.official ? 1 : -1;
    });
    // call onSortedData props with the sorted Data 
    onSortedData(strAscending);
  };
  const handleDesClick = () => {
    const strAscending = [...sortCountry].sort((a, b) => {
      return a?.name?.official > b?.name?.official ? -1 : 1;
    });
    onSortedData(strAscending);
  };

  const hanldeResetClick = () => {
    onSortedData([...sortCountry])
  }
  return (
    <div className="Asc-Des-Container">
      <button className="btn-Asc-Des" onClick={handleAscClick}>
        Ascending
      </button>
      <button className="btn-Asc-Des" onClick={handleDesClick}>
        Descending
      </button>
      <button className="btn-reset" onClick={hanldeResetClick}>Reset</button>
    </div>
  );
}

export default Sorted;
