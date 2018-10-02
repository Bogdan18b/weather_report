import React from "react";
import '../stylesheets/form.css';

const Form = ({ getWeather, changeDegrees }) => {
	return (
			<form className="form-main" onSubmit={getWeather}>
				<input className="form-input" id="search-box"type="text" placeholder="city" name="city"/>
				<br/>
				<p onClick={changeDegrees}
					className="form-input">Fahrenheit
				</p>
				<br/>
				<input className="form-button" type="submit" value="search"/>
			</form>
	);
}

export default Form;
