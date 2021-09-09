import CountUp from "react-countup";

const Card = ({ details }) => {
  const { confirmed, recovered, lastUpdate, deaths } = details;

  return (
    <div className="w-full space-y-8 lg:space-y-0 mb-4 flex flex-col lg:flex-row items-center justify-center">
      <div className="w-4/5 lg:max-w-[389.6px] lg:min-w-[20rem] p-4 rounded-lg shadow-lg space-y-1">
        <h3 className="text-[#8f8f8f]">Infected</h3>
        <p className="text-2xl">
          <CountUp start={0} end={confirmed.value} duration={2} separator="," />{" "}
        </p>
        {new Date(lastUpdate).toDateString()}
        <p>Current active corona cases</p>
      </div>

      <div className="w-4/5 lg:max-w-[389.6px] lg:min-w-[20rem] shadow-lg p-4 rounded-lg space-y-1">
        <h3 className="text-[#8f8f8f]">Deaths</h3>
        <p className="text-2xl">
          <CountUp start={0} end={deaths.value} duration={2} separator="," />{" "}
        </p>

        {new Date(lastUpdate).toDateString()}
        <p>People died of covid-19</p>
      </div>

      <div className="min-w-[20rem] hidden shadow-lg p-4 rounded-lg space-y-1">
        <h3 className="text-[#8f8f8f]">Recovered</h3>
        <p className="text-2xl">{recovered.value}</p>
        {new Date(lastUpdate).toDateString()}
        <p>People who recovered from covid-19</p>
      </div>
    </div>
  );
};

export default Card;
