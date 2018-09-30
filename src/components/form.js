import React from "react";
import '../stylesheets/form.css';

const Form = ({ getWeather }) => (
	<form className="form-main" onSubmit={getWeather}>
		<input className="form-input" type="text" placeholder="city" name="city"/>
		<br/>
		<input className="form-input" type="text" placeholder="country" name="country"/>
		<br/>
		<input className="form-button" type="submit" value="search"/>
	</form>
);

export default Form;
