import { useEffect, useState } from "react";
import { useFetchAllCountryQuery } from "../redux/store";
import Search from "../components/SearchBar";
import Pagination from "../components/Pagination";
function Home() {
  const { data: countries, isLoading, isError } = useFetchAllCountryQuery();
  console.log(countries);

  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
      setCurrentPage(1)
    }
  }, [searchTerm, countries]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const hanldeOnChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * 25;
  const endIndex = startIndex + 25;
  const currentItems = filteredCountries?.slice(startIndex, endIndex);
  return (
    <>
      <Search onSearch={handleSearch} />
      <Pagination
        data={filteredCountries}
        dataPerPage={25}
        onPageChange={hanldeOnChangePage}
        currentPage={currentPage}
      />
      {isLoading && <p className="loading-screen">Loading...</p>}
      {isError && <p className="error-screen">Error loading data</p>}
      <div className="card-wrapper">
        {currentItems?.map((country) => (
          <div className="card-container" key={country.cca2}>
            <img src={country?.flags.png} className="flag-img" />
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
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
