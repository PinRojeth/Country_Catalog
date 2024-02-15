/* eslint-disable react/prop-types */
import "../App.css";

function CountryModal({ CountryDetail, onClose }) {
  const handleCloseModal = () => {
    onClose(false);
  };
  console.log(CountryDetail);
  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="dialog">
        <div className="modal-content">
          <img src={CountryDetail?.flags?.png} alt="" />
          <div className="detail-wrapper">
            <h1 className="country-name-detail">
              {CountryDetail?.name?.official}
            </h1>
            <p>Cca2 : {CountryDetail?.cca2}</p>
            <p>Cca3 : {CountryDetail?.cca3}</p>
            <p>Ccn3 : {CountryDetail?.ccn3}</p>
            <p>Common : {CountryDetail?.name?.common}</p>
            <p>
              Native Name :{" "}
              {Object.keys(CountryDetail?.name?.nativeName || {}).map(
                (langCode) => (
                  <span key={langCode}>
                    {CountryDetail?.name?.nativeName[langCode]?.official}
                    {langCode !== "eng" && ` (${langCode})`}
                    {", "}
                  </span>
                )
              )}
            </p>
            <p>
              AltSpellings :{" "}
              {CountryDetail?.altSpellings?.map((alt) => (
                <span key={CountryDetail?.cca2}>{alt}, </span>
              ))}
            </p>
            <p>
              Idd : {CountryDetail?.idd?.root}
              {CountryDetail?.idd?.suffixes}
            </p>
            <p>Area : {CountryDetail?.area}</p>
            <p>Capital : {CountryDetail?.capital}</p>
            <p>
              CapitalInfo : Lat ({CountryDetail?.capitalInfo?.latlng[0]}) lng (
              {CountryDetail?.capitalInfo?.latlng[1]})
            </p>
            <p>
              Car : Side({CountryDetail?.car?.side}) Signs(
              {CountryDetail?.car?.signs})
            </p>
            <p>Containents : {CountryDetail?.continents}</p>
            <p>
              Currencies:{" "}
              {Object.keys(CountryDetail?.currencies || {}).map((cur) => (
                <span key={cur}>
                  {CountryDetail?.currencies[cur].name} (
                  {CountryDetail?.currencies[cur].symbol}){", "}
                </span>
              ))}
            </p>
            <p>
              {" "}
              Demonyms:{" "}
              {Object.keys(CountryDetail?.demonyms || {}).map((langCode) => (
                <span key={langCode}>
                  {`${langCode}: `}
                  {`Female: ${CountryDetail?.demonyms[langCode].f}, `}
                  {`Male: ${CountryDetail?.demonyms[langCode].m}`}
                  {", "}
                </span>
              ))}
            </p>
            <p>Fifa : {CountryDetail?.fifa}</p>
            <p>
              {" "}
              Gini :{" "}
              {Object.keys(CountryDetail?.gini || {}).map((year) => (
                <span key={year}>
                  {`${year}: ${CountryDetail?.gini[year]}`}
                  {", "}
                </span>
              ))}
            </p>
            <p>Independent : {CountryDetail?.independent ? "Yes" : "No"}</p>
            <p>Landlocked : {CountryDetail?.landlocked ? "Yes" : "No"}</p>
            <p>
              {" "}
              Languages :{" "}
              {Object.keys(CountryDetail?.languages || {}).map((language) => {
                return (
                  <span key={language}>
                    {`${language} (${CountryDetail?.languages[language]})`}
                    {", "}
                  </span>
                );
              })}
            </p>
            <p>
              Latlng : Lat ({CountryDetail?.latlng?.[0]}) lng (
              {CountryDetail?.latlng?.[1]})
            </p>
            <p>Maps : {CountryDetail.maps?.googleMaps}</p>
            <p>PostalCode : {CountryDetail?.postalCode?.format}</p>
            <p>Population: {CountryDetail?.population}</p>
            <p>Region : {CountryDetail?.region}</p>
            <p>Start Of Week : {CountryDetail?.startOfWeek}</p>
            <p>Status : {CountryDetail?.status}</p>
            <p>SubRegion : {CountryDetail?.subregion}</p>
            <p>Timezones : {CountryDetail?.timezones}</p>
            <p>Tld : {CountryDetail?.tld}</p>
            <p>
              Translations :{" "}
              {Object.entries(CountryDetail?.translations || {}).map(
                ([language, translation]) => (
                  <li key={language}>
                    {`${language}: (${translation?.official} ${translation?.common}) `}
                    {", "}
                  </li>
                )
              )}
            </p>
          </div>
          <button className="modal-close" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountryModal;
