import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import CountryPicker from "../components/CountryPicker";
import { useEffect, useState } from "react";

const Index = () => {
  const [details, setDetails] = useState({
    confirmed: {},
    recovered: {},
    deaths: {},
    lastUpdate: 0,
  });

  const fetchData = async () => {
    const { confirmed, recovered, deaths, lastUpdate } = await fetch(
      "https://covid19.mathdro.id/api"
    ).then((data) => data.json());

    setDetails({
      ...details,
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {/* <CountryPicker /> */}
      <Card details={details} />
      <Chart />
    </>
  );
};

export default Index;
