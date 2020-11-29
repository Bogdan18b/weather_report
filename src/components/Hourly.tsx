import React from 'react';
import Details, {Hour} from './Details';
import styled from 'styled-components';

const HourlyStyleItem = styled.div`
font-size: 2rem;
margin-left: auto;
margin-right: auto;
background-color: lightskyblue;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(30rem,1fr));
grid-column: 1 / -1;
padding: 1rem;
margin: 1rem;
grid-gap: 1rem;
`;
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
