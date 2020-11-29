import React from 'react';
import Details, {Hour} from './Details';
import { HourlyStyleItem } from './WeatherStyles';

interface Props {
  day: Hour[]
}
const Hourly: React.FunctionComponent<Props> = ({ day }) => {
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
