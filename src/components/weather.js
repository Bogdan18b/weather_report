import React from "react";
import DailyWeather from './daily_weather';

const Weather = props => {
	debugger
return (
	<div>
	 {
	 	props.city && props.country && <p> Location:
	 		<span> { props.city }, { props.country }</span>
	 	</p>
	 }
	 	<DailyWeather day={props.day1} />
	 	<DailyWeather day={props.day2} />
	 	<DailyWeather day={props.day3} />
	 	<DailyWeather day={props.day4} />
	 	<DailyWeather day={props.day5} />


	 {
	 	props.error && <p>{ props.error }</p>
	 }
	</div>
);};

export default Weather;
