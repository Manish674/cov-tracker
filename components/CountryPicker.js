import { useEffect, useState } from "react";

const CountryPicker = ({ setDetails, details }) => {
  const [country, setCountry] = useState();
  const [countries, setCountries] = useState([]);

  const fetchCountryList = async () => {
    const { countries } = await fetch(
      "https://covid19.mathdro.id/api/countries/"
    ).then((data) => data.json());

    setCountries(countries);
  };

  useEffect(() => {
    fetchCountryList();
  }, []);

  const handleSelectChange = async (e) => {
    const { confirmed, deaths, lastUpdate } = await fetch(
      `https://covid19.mathdro.id/api/countries/${e.target.value}`
    ).then((data) => data.json());
    console.log(confirmed.value, deaths.value, lastUpdate);
    setDetails({
      ...details,
      confirmed,
      deaths,
      lastUpdate,
    });
  };

  return (
    <>
      <div className="flex justify-center mb-4">
        <select
          className="p-2 rounded-lg lg:p-4 shadow-sm"
          onChange={(e) => handleSelectChange(e)}
        >
          {countries.length > 0
            ? countries.map(({ name, iso2, iso3 }) => {
                return (
                  <option classname="border" id={iso3} value={iso2}>
                    {name}
                  </option>
                );
              })
            : ""}
        </select>
      </div>
    </>
  );
};

export default CountryPicker;
