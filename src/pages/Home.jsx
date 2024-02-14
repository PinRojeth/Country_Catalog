import { useFetchAllCountryQuery } from "../redux/store";
import Search from "../components/SearchBar";
function Home() {
  const { data: countries, isLoading, isError } = useFetchAllCountryQuery();
  console.log(countries);

  return (
    <>
      <Search />
      {isLoading && <p className="loading-screen">Loading...</p>}
      {isError && <p className="error-screen">Error loading data</p>}
      <div className="card-wrapper">
        {countries?.map((country) => (
          <div className="card-container" key={country.cca2}>
            <img src={country?.flag} className="flag-img" />
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
