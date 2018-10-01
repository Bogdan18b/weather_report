import React from 'react';

const updateTime = time => {
  let newTime;
  if (time.slice(0,2) < 12) {
    newTime = time.slice(0,5) + ' AM';
  } else if (time.slice(0,2) === '12') {
    newTime = "12:00 PM";
  } else {
    newTime = (time.slice(0,2) - 12) + time.slice(2,5) + ' PM';
  }
  return newTime;
};

const Details = ({ hour }) => {
  if (!hour) return <p></p>;
  let sign = hour.weather[0].icon;
  return (
    <ul
      className="hourly-update">
      <li>Time: {updateTime(hour.dt_txt.slice(11))}</li>
      <li>Temperature: {Math.round(hour.main.temp)}˚</li>
      <li>Humidity: {Math.round(hour.main.humidity)}%</li>
      <li>Pressure: {Math.round(hour.main.pressure)}&nbsp;hPa</li>
      <li>Wind: {Math.round(hour.wind.speed)}&nbsp;mph</li>
      <li>Description: {hour.weather[0].description}</li>
      <li><img className="hourly-update-pic"
        src={`http://openweathermap.org/img/w/${sign}.png`} alt=""/></li>
    </ul>
  );
};

export default Details;
