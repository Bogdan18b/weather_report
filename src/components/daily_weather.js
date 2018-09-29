import React from 'react';
import Hourly from './hourly';

const DailyWeather = ({ day }) => {
  let minTemp = 120;
  let maxTemp = 0;
  if (day) {
    day.forEach(hour => {
      if (minTemp > hour.main.temp_min) minTemp = hour.main.temp_min;
      if (maxTemp < hour.main.temp_max) maxTemp = hour.main.temp_max;
    });
  }

  debugger
  return (
    <div>
      { day && <h1> Date: {day[0].dt_txt.slice(5,10)}</h1>}
      { day && <h3> Min temp: {Math.round(minTemp)}</h3>}
      { day && <h3> Max temp: {Math.round(maxTemp)}</h3>}
      <Hourly day={day}/>
    </div>
  );
};

export default DailyWeather;
