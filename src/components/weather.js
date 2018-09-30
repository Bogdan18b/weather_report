import React from "react";
import DailyWeather from './daily_weather';
import '../stylesheets/weather.css';

const Weather = props => {
	if (!props) return <p></p>
	if (props.error) return <h3 className="weather-error">{ props.error }</h3>;
	debugger
return (
	 <div className="weather-main">
		 <ul className="description">
			 <li>Date:</li>
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
);};

export default Weather;
