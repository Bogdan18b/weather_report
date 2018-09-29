import React from "react";

const Header = props => {
	return (
		<div>
			{	props.city ? <h1>Weather Report for {props.city + ", " + props.country}</h1> : <h1>Weather Report</h1>
			}
			<h3>Find out the temperature for today and the next 5 days</h3>
		</div>
	);
};

export default Header;
