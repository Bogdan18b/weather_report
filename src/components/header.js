import React from "react";
import PropTypes from 'prop-types';
import '../stylesheets/header.css';

const Header = props => {
	return (
		<div>
			{	props.city ? <h1 className="header-title">Weather Report for {props.city + ", " + props.country}</h1> :
										 <h1 className="header-title">Weather Report</h1>
			}
			<h3 className="header-subtitle">
				Find out the temperature for the next 5 days</h3>
		</div>
	);
};

Header.propTypes = {
	city: PropTypes.string,
	country: PropTypes.string,
};

export default Header;
