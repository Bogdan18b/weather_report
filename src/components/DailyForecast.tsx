import React, { Fragment } from "react";
import HourlyForecast from "./HourlyForecast";
import { format, parse } from "date-fns";
import { Button } from "./FormStyles";
import { HourlyForecastInterface } from "./Details";
import styled from "styled-components";

const DailyStyleItem = styled.div`
  font-size: 2rem;
  text-align: center;
  background-color: lightskyblue;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 2px solid lightgray;
  h1 {
    padding: 0.5rem;
    font-weight: 700;
    &:nth-child(2) {
      border-bottom: 3px solid blue;
      margin-bottom: 1.5rem;
    }
  }
  img {
    width: 40%;
    margin: 0 auto;
  }
`;

interface Props {
  day: HourlyForecastInterface[];
  toggle: any;
  show: any;
}
const DailyForecast: React.FunctionComponent<Props> = ({
  day,
  toggle,
  show,
}) => {
  if (!day || day.length === 0) return null;
  let dateDay = format(parse(day[0].dt_txt), "dddd");
  let dateMonth = format(parse(day[0].dt_txt), "MMM DD");
  let minTemp = 120;
  let maxTemp = 0;
  let description: any = [];
  let forecast;
  day.forEach((hour) => {
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
  }
  return (
    <Fragment>
      <DailyStyleItem>
        <h1>{dateDay}</h1>
        <h1>{dateMonth}</h1>
        <h3>
          <img src={forecast} alt="" />
        </h3>
        <h3>min: {Math.round(minTemp)}˚</h3>
        <h3>max: {Math.round(maxTemp)}˚</h3>
        <Button onClick={toggle}>{show ? "close" : "details"}</Button>
      </DailyStyleItem>
      {show && <HourlyForecast day={day} />}
    </Fragment>
  );
};

export default DailyForecast;
