import React from 'react';
import Details from './details';

const Hourly = ({ day }) => {
  if (!day) return <p></p>;
    debugger
  return (
    <div>
      {day.map(hour => {
        return <Details key={hour.dt} hour={hour}/>;
      })}
    </div>
  );
};

export default Hourly;
