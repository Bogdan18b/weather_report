import React from "react";
import PropTypes from 'prop-types';
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

const Header = ({ city, country }) => (
	<div>
		{	city ? <Title>Weather Report for {city + ", " + country}</Title> :
									 <Title>Weather Report</Title>
		}
		<Subtitle>
			Find out the temperature for the next 5 days</Subtitle>
	</div>
	);

Header.propTypes = {
	city: PropTypes.string,
	country: PropTypes.string,
};

export default Header;
