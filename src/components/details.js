import React from 'react';
import PropTypes from 'prop-types';
import { HourlyList } from './WeatherStyles';
import { format } from 'date-fns';

const Details = ({ hour }) => {
  if (!hour) return null;
  let sign = hour.weather[0].icon;
  return (
    <HourlyList>
      <li>Time: {format(hour.dt_txt, "hh:mm A")}</li>
      <li>Temperature: {Math.round(hour.main.temp)}˚</li>
      <li>Humidity: {Math.round(hour.main.humidity)}%</li>
      <li>Pressure: {Math.round(hour.main.pressure)}&nbsp;hPa</li>
      <li>Wind: {Math.round(hour.wind.speed)}&nbsp;mph</li>
      <li>Description: {hour.weather[0].description}</li>
      <li><img
        src={`https://openweathermap.org/img/w/${sign}.png`} alt=""/></li>
    </HourlyList>
  );
};

Details.propTypes = {
  hour: PropTypes.shape({
    dt_txt: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number,
      humidity: PropTypes.number,
      pressure: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number
    }),
    weather: PropTypes.array
  })
};

export default Details;
