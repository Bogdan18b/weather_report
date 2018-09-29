import React from "react";

const Form = ({ getWeather }) => (
	<form onSubmit={getWeather}>
    <label htmlFor="city">City</label>
		<input type="text" id="city" name="city"/>
    <label htmlFor="city">Country</label>
		<input type="text" id="country" name="country"/>
		<input type="submit" value="search"/>
	</form>
);

export default Form;
