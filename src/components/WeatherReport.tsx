import React, { useState, useEffect } from "react";
import Forecast from "./Forecast";

interface Props {
  city: string;
  country: string;
  degrees: string;
}

const WeatherReport: React.FunctionComponent<Props> = ({
  city,
  country,
  degrees,
}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `//api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=1ff011665e3637b91147bb172ff57517&units=${degrees}`
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [city, country, degrees]);
  return <Forecast data={data} />;
};

export default WeatherReport;
