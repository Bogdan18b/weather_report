import React from "react";
import Details, { HourlyForecastInterface } from "./Details";
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
  day: HourlyForecastInterface[];
}
const HourlyForecast: React.FunctionComponent<Props> = ({ day }) => {
  if (!day) return null;
  return (
    <HourlyStyleItem>
      {day.map((hourlyForecast) => {
        return <Details key={hourlyForecast.dt} hourlyForecast={hourlyForecast} />;
      })}
    </HourlyStyleItem>
  );
};

export default HourlyForecast;
