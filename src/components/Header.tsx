import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
	font-size: 6rem;
	font-weight: bold;
	padding: 1rem;
`;

const Subtitle = styled.h1`
	text-align: center;
	font-size: 3rem;
	padding: 0.5rem;
	margin-bottom: 2rem;
`;

interface Props {
  city: string,
  country: string
}

const Header: React.FunctionComponent<Props> = ({ city, country }) => (
	<div>
		{	city ? <Title>Weather Report for {city + ", " + country}</Title> :
									 <Title>Weather Report</Title>
		}
		<Subtitle>Five days weather forecast</Subtitle>
	</div>
	);

export default Header;
