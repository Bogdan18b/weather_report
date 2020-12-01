import React from "react";
import HourlyDetails, { HourlyForecastInterface } from "./HourlyDetails";
import styled from "styled-components";

const HourlyStyleItem = styled.div`
  font-size: 2rem;
  margin-left: auto;
  margin-right: auto;
  background-color: lightskyblue;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-column: 1 / -1;
  padding: 1rem;
  margin: 1rem;
  grid-gap: 1rem;
`;
interface Props {
  dailyForecast: HourlyForecastInterface[];
}
const HourlyForecast: React.FunctionComponent<Props> = ({ dailyForecast }) => {
  if (!dailyForecast) return null;
  return (
    <HourlyStyleItem>
      {dailyForecast.map((hourlyForecast) => {
        return (
          <HourlyDetails
            key={hourlyForecast.dt}
            hourlyForecast={hourlyForecast}
          />
        );
      })}
    </HourlyStyleItem>
  );
};

export default HourlyForecast;
