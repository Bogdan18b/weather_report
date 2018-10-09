import React from "react";
import PropTypes from 'prop-types';
import DailyWeather from './daily_weather';
import '../stylesheets/weather.css';

const Weather = props => {
	if (!props) return null;
	if (props.error) return <h3 className="weather-error">{ props.error }</h3>;
	return (
		<div className="weather-main">
			 <ul className="description">
				 <li>Date:</li>
				 <li>Day:</li>
				 <li>Min Temp:</li>
				 <li>Max Temp:</li>
				 <li>Forecast:</li>
			 </ul>
		 	<DailyWeather day={props.day1} />
		 	<DailyWeather day={props.day2} />
		 	<DailyWeather day={props.day3} />
		 	<DailyWeather day={props.day4} />
		 	<DailyWeather day={props.day5} />
		 	<DailyWeather day={props.day6} />
		</div>
	);
};

Weather.propTypes = {
	error: PropTypes.string,
	day1: PropTypes.arrayOf(PropTypes.object),
	day2: PropTypes.arrayOf(PropTypes.object),
	day3: PropTypes.arrayOf(PropTypes.object),
	day4: PropTypes.arrayOf(PropTypes.object),
	day5: PropTypes.arrayOf(PropTypes.object),
	day6: PropTypes.arrayOf(PropTypes.object)
}

export default Weather;
