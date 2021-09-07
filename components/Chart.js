import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";

const Chart = () => {
  const [daily, setDaily] = useState();

  const fetchDailyData = async () => {
    setDaily(
      await fetch("https://covid19.mathdro.id/api/daily").then((data) =>
        data.json()
      )
    );
  };

  console.log(daily);

  useEffect(() => {
    fetchDailyData();
  }, []);

  return <div></div>;
};

export default Chart;
