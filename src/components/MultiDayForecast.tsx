import React, { useState } from "react";
import { format } from "date-fns";
import DailyForecast from "./DailyForecast";
import styled from "styled-components";
import { HourlyForecastInterface } from "./HourlyDetails";

const DailyStyleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: max-content;
  margin: 1rem;
  padding: 1rem;
  grid-gap: 3rem;
  width: -webkit-fill-available;
  grid-auto-flow: dense;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ErrorMessage = styled.p`
  font-size: 5rem;
  font-weight: bold;
  color: blue;
  margin-left: 50%;
  margin-top: 5rem;
`;

interface Props {
  data: {
    list?: HourlyForecastInterface[];
  };
}

const SHOW_HOURLY_FORECAST: boolean[] = new Array(6).fill(false);

const MultiDayForecast: React.FunctionComponent<Props> = ({ data }) => {
  let [showHourlyForecast, setShowHourlyForecast] = useState(
    SHOW_HOURLY_FORECAST
  );
  let { list } = data;
  if (!list) return <ErrorMessage>City not found!</ErrorMessage>;
  let uniqueDays: string[] = [];
  let days: Array<HourlyForecastInterface[]> = [];
  list.forEach((item) => {
    const day = format(item.dt_txt, "MMM DD");
    if (!uniqueDays.includes(day)) uniqueDays.push(day);
  });
  uniqueDays.forEach((_, index) => {
    days[index] = data.list.filter(
      (day) => format(day.dt_txt, "MMM DD") === uniqueDays[index]
    );
  });
  const toggle = (index: number) => (e: React.SyntheticEvent) => {
    e.preventDefault();
    const toggleHourlyForecast = [...SHOW_HOURLY_FORECAST];
    toggleHourlyForecast[index] = !showHourlyForecast[index];
    setShowHourlyForecast(toggleHourlyForecast);
  };
  return (
    <DailyStyleContainer>
      {uniqueDays.map((_, index) => (
        <DailyForecast
          key={index}
          dailyForecast={days[index]}
          showHourlyForecast={showHourlyForecast[index]}
          toggle={toggle(index)}
        />
      ))}
      {uniqueDays.length === 6 || <div id="extra"></div>}
    </DailyStyleContainer>
  );
};

export default MultiDayForecast;
