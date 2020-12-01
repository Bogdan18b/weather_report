import React from "react";
import { format } from "date-fns";
import styled from "styled-components";

const HourlyList = styled.ul`
  font-size: 2rem;
  border: 1px solid black;
  padding: 0.5rem;
  background-color: #f3f4f6;
  background-size: 80%;
  position: relative;
  text-align: center;
  li > img {
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
  }
`;
export interface HourlyForecastInterface {
  dt_txt: string;
  dt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string;
    main: string;
  }[];
}
interface Props {
  hourlyForecast: HourlyForecastInterface;
}

const HourlyDetails: React.FunctionComponent<Props> = ({ hourlyForecast }) => {
  if (!hourlyForecast) return null;
  let sign = hourlyForecast.weather[0].icon;
  return (
    <HourlyList>
      <li>Time: {format(hourlyForecast.dt_txt, "hh:mm A")}</li>
      <li>Temperature: {Math.round(hourlyForecast.main.temp)}˚</li>
      <li>Humidity: {Math.round(hourlyForecast.main.humidity)}%</li>
      <li>Pressure: {Math.round(hourlyForecast.main.pressure)}&nbsp;hPa</li>
      <li>Wind: {Math.round(hourlyForecast.wind.speed)}&nbsp;mph</li>
      <li>Description: {hourlyForecast.weather[0].description}</li>
      <li>
        <img src={`https://openweathermap.org/img/w/${sign}.png`} alt="" />
      </li>
    </HourlyList>
  );
};

export default HourlyDetails;
