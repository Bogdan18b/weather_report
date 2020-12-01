import React, { useState, useEffect } from "react";
import MultiDayForecast from "./MultiDayForecast";

interface Props {
  city: string;
  unitSystem: string;
}

const WeatherReport: React.FunctionComponent<Props> = ({
  city,
  unitSystem,
}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `//api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_GOOGLE_API_KEY}&units=${unitSystem}`
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [city, unitSystem]);
  return <MultiDayForecast data={data} />;
};

export default WeatherReport;
