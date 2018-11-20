import React, { useState, useEffect } from 'react';
import Forecast from './Forecast';
import Autocomplete from 'react-google-autocomplete';

const GetWeather = async (city, country, degrees) => {
  const result = await fetch(`//api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=1ff011665e3637b91147bb172ff57517&units=${degrees}`);
  const data = await result.json();
  console.log(data);
  return data;
}

function useGetWeather(city, country, degrees) {
  const [data, setData] = useState({});

  useEffect(
    async () => {
      const result = await GetWeather(city, country, degrees);
      setData(result);
    },
    [city, degrees]
  );
  console.log(data);
  return data;
}

const WeatherReport = ({ city, country, degrees }) => {
  const data = useGetWeather(city, country, degrees);

 return (
   <Forecast data={data} />
 );
};

export default WeatherReport;
