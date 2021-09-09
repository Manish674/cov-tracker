import axios from "axios";
import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ details: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  const fetchMyAPI = async () => {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily");
    console.log(data);

    if (data) {
      console.log(data);
      const initialDailyData = data.map(
        ({
          reportDate: date,
          confirmed,
          deaths,
          deltaConfirmed,
          recovered,
        }) => ({
          confirmed: confirmed.total,
          deaths: deaths.total,
          delta: deltaConfirmed,
          recovered: recovered.total,
          date,
        })
      );

      setDailyData(initialDailyData);
    } else {
      console.log("No god damn data");
    }
  };

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          // {
          //   data: dailyData.map((data) => data.recovered),
          //   label: "Recovered",
          //   borderColor: "green",
          //   backgroundColor: "rgba(0, 255, 0, 0.5)",
          //   fill: true,
          // },
        ],
      }}
    />
  ) : null;

  return (
    <>
      <h3 className="w-4/5 mx-auto font-bold text-2xl">Global Data</h3>
      <div className="w-full border">{country ? barChart : lineChart}</div>{" "}
    </>
  );
};

export default Chart;
