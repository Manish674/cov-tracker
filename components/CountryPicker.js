import { useEffect, useState } from "react";

const CountryPicker = () => {
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

  return (
    <div>
      <select name="cars" id="cars">
        {countries.length > 0
          ? countries.map(({ name, iso2, iso3 }) => {
              return (
                <option id={iso3} value={iso2}>
                  {name}
                </option>
              );
            })
          : ""}
      </select>
    </div>
  );
};

export default CountryPicker;
