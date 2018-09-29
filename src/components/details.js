import React from 'react';

const Details = ({ hour }) => {
  if (!hour) return <p></p>;
  debugger
  return (
    <ul>
      <li>Time: {hour.dt_txt.slice(11)}</li>
      <li>Description: {hour.weather[0].description}</li>
      <li>Temperature: {Math.round(hour.main.temp)}</li>
      <li>Humidity: {Math.round(hour.main.humidity)}</li>
      <li>Pressure: {Math.round(hour.main.pressure)}</li>
      <li>Wind: {Math.round(hour.wind.speed)}</li>
    </ul>
  );
};

export default Details;
