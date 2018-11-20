import React from 'react';
import Details from './Details';
import { HourlyStyleItem } from './WeatherStyles';

const Hourly = ({ day }) => {
  if (!day) return null;
  return (
    <HourlyStyleItem>
      {day.map(hour => {
        return <Details key={hour.dt} hour={hour}/>;
      })}
    </HourlyStyleItem>
  );
};

export default Hourly;
