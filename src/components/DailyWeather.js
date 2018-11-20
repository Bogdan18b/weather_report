import React, { useState } from 'react';
import PropTypes from "prop-types";
import Hourly from './Hourly';
import { format, parse } from 'date-fns';
import { Button } from './FormStyles';
import { DailyStyleItem } from './WeatherStyles';

const DailyWeather = props => {
  let [state, setState] = useState({
    display: false,
    details: "details"
  });

  const handleClick = e => {
    e.preventDefault();
    let d;
    d = state.details === "details" ? "close" : "details"
    let status = !state.display;
    setState({
      display: status,
      details: d
    })
  };

    if (!props.day || props.day.length === 0) return null;
    let dateDay = format(parse(props.day[0].dt_txt), 'dddd');
    let dateMonth = format(parse(props.day[0].dt_txt), 'MMM DD');
    let minTemp = 120;
    let maxTemp = 0;
    let description = [];
    let forecast;
      props.day.forEach(hour => {
        if (minTemp > hour.main.temp_min) minTemp = hour.main.temp_min;
        if (maxTemp < hour.main.temp_max) maxTemp = hour.main.temp_max;
        description.push(hour.weather[0].main);
      });
    if (description.includes("Rain")) {
      forecast = "https://openweathermap.org/img/w/10d.png";
    } else if (description.includes("Snow")) {
      forecast = "https://openweathermap.org/img/w/13d.png";
    } else if (description.includes("Clouds")) {
      forecast = "https://openweathermap.org/img/w/03d.png";
    } else {
      forecast = "https://openweathermap.org/img/w/01d.png";
    };
    return (
      <DailyStyleItem>
        <h1>{ dateDay }</h1>
        <h1>{ dateMonth }</h1>
        <h3><img src={forecast} alt=""/></h3>
        <h3>min: { Math.round(minTemp) }˚</h3>
        <h3>max: { Math.round(maxTemp) }˚</h3>
        <Button
          onClick={props.toggle}>
            details
        </Button>
      </DailyStyleItem>
    );
}

DailyWeather.propTypes = {
  day: PropTypes.arrayOf(PropTypes.object)
}

export default DailyWeather;
