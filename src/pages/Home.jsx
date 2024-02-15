import { useEffect, useState } from "react";
import { useFetchAllCountryQuery } from "../redux/store";
import Search from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Sorted from "../components/Sorting";
import CountryModal from "../components/CountryModal";
function Home() {
  const { data: countries, isLoading, isError } = useFetchAllCountryQuery();

  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedCountries, setSortedCountries] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const fuzzySearch = (searchTerm, country) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const lowerCountryName = country?.name?.official.toLowerCase();
    return lowerCountryName.includes(lowerSearchTerm);
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredCountries(countries);
    } else {
      const results = countries.filter((country) =>
        fuzzySearch(searchTerm, country)
      );
      setFilteredCountries(results);
      setCurrentPage(1);
    }
    setSortedCountries(filteredCountries);
  }, [searchTerm, countries]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const hanldeOnChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * 25;
  const endIndex = startIndex + 25;
  const currentItems =
    sortedCountries?.slice(startIndex, endIndex) ||
    filteredCountries?.slice(startIndex, endIndex);

  const handleSort = (sortedData) => {
    setSortedCountries(sortedData);
  };

  const handleOpenModal = (country) => {
    setOpenModal(true);
    setSelectedCountry(country);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className="sort-pagination-container">
        <div>
          <h1 className="label">Sort By Name</h1>
        </div>
        <div className="func-btn">
          <Sorted sortCountry={filteredCountries} onSortedData={handleSort} />
          <Pagination
            data={filteredCountries}
            dataPerPage={25}
            onPageChange={hanldeOnChangePage}
            currentPage={currentPage}
          />
        </div>
      </div>

      {isLoading && <p className="loading-screen">Loading...</p>}
      {isError && <p className="error-screen">Error loading data</p>}
      <div className="card-wrapper">
        {currentItems?.map((country) => (
          <div className="card-container" key={country.cca2}>
            <img src={country?.flags?.png} className="flag-img" />
            <div className="info-wrapper">
              <h1 className="country-name">{country?.name?.official}</h1>
              <p>CCA2 : {country.cca2}</p>
              <p>CCA3 : {country.cca3}</p>
              <p>
                Native Name :{" "}
                {Object.keys(country?.name?.nativeName || {}).map(
                  (langCode) => (
                    <span key={langCode}>
                      {country?.name?.nativeName[langCode]?.official}
                      {langCode !== "eng" && ` (${langCode})`}
                      {", "}
                    </span>
                  )
                )}
              </p>
              <p>
                AltSpellings :{" "}
                {country?.altSpellings?.map((alt) => (
                  <span key={country.cca2}>{alt}, </span>
                ))}
              </p>
              <p>
                IDD : {country?.idd?.root}
                {country?.idd?.suffixes}
              </p>
            </div>
            <button
              className="btn-detail"
              onClick={() => handleOpenModal(country)}
            >
              Details
            </button>
            {openModal && (
              <CountryModal
                onClose={handleCloseModal}
                CountryDetail={selectedCountry}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
