import React from "react";
import '../stylesheets/form.css';

const toggleClass = () => {
	debugger
	document.getElementById("degrees").classList.toggle('hide');
}
class Form extends React.Component {
	debugger
	changeType = type => {
		return type === "imperial" ? "Celsius" : "Fahrenheit";
	}
	render() {
		return (
				<form className="form-main" onSubmit={this.props.getWeather}>
					<input className="form-input" id="search-box"type="text" placeholder="city" name="city"/>
					<br/>
					<p onClick={this.props.changeDegrees}
						className="form-degrees"
						onMouseEnter={toggleClass}
						onMouseLeave={toggleClass}>Fahrenheit
					</p>
					<p className="hide"
						id="degrees">click to change to {this.changeType(this.props.type)}</p>
					<br/>
					<input className="form-button" type="submit" value="search"/>
				</form>
		);
}
}

export default Form;
